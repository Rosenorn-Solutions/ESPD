# Ubuntu Deployment

This repository includes a self-hosted deployment target for the Next.js app in `web/`. It matches the release flow in `.github/workflows/ci.yml`:

1. CI builds the app in GitHub Actions.
2. The build artifact is uploaded to the server.
3. The server extracts the artifact to `/var/www/edsp/frontend/releases/<timestamp>`.
4. CI installs the Node.js dependencies for that release.
5. The `/var/www/edsp/frontend/current` symlink is updated.
6. `espd-web.service` is restarted and Nginx keeps proxying traffic to `127.0.0.1:3000`.

## Server prerequisites

Install Node.js 24, Nginx, and Certbot:

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs nginx certbot python3-certbot-nginx
```

Create the runtime user and directories expected by the workflow:

```bash
sudo useradd --system --create-home --home-dir /var/www/edsp/frontend --shell /usr/sbin/nologin espd
sudo mkdir -p /var/www/edsp/frontend/releases /var/www/edsp/frontend/tmp /etc/espd /var/www/certbot
sudo chown -R espd:espd /var/www/edsp/frontend
sudo chmod 755 /var/www/edsp /var/www/edsp/frontend /var/www/edsp/frontend/releases /var/www/edsp/frontend/tmp
```

## systemd

Copy the service file and environment file:

```bash
sudo cp deploy/systemd/espd-web.service /etc/systemd/system/espd-web.service
sudo cp deploy/systemd/espd-web.env.example /etc/espd/web.env
sudo chown root:root /etc/systemd/system/espd-web.service /etc/espd/web.env
sudo chmod 644 /etc/systemd/system/espd-web.service
sudo chmod 600 /etc/espd/web.env
```

Edit `/etc/espd/web.env` with the real values before the first deploy.

Enable the service so CI can restart it after the first release is uploaded:

```bash
sudo systemctl daemon-reload
sudo systemctl enable espd-web.service
```

## Nginx

Copy the site configuration into place:

```bash
sudo cp deploy/nginx/edsp.dk.conf /etc/nginx/sites-available/edsp.dk
sudo ln -sf /etc/nginx/sites-available/edsp.dk /etc/nginx/sites-enabled/edsp.dk
sudo rm -f /etc/nginx/sites-enabled/default
```

The provided config expects a Let's Encrypt certificate for `edsp.dk` and `www.edsp.dk`. If the certificate does not exist yet, request it before testing the final config:

```bash
sudo certbot certonly --webroot -w /var/www/certbot -d edsp.dk -d www.edsp.dk
```

Then validate and reload Nginx:

```bash
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl reload nginx
```

## GitHub Actions variables and secrets

Set these repository variables so the workflow lines up with the server:

```text
SERVER_NAME=<server hostname or IP>
SERVER_USER=<ssh user with permission to sudo systemctl>
DEPLOY_ROOT=/var/www/edsp/frontend
DEPLOY_TMP_DIR=/var/www/edsp/frontend/tmp
```

Set these repository secrets:

```text
SERVER_ROOT_CERTIFICATE=<private SSH key>
SERVER_ROOT_CERTIFICATE_PASSWORD=<passphrase, if the key has one>
```

## First deploy check

After the first successful push to `main`, verify the service and proxy:

```bash
sudo systemctl status espd-web.service
curl -I http://127.0.0.1:3000
curl -I https://edsp.dk
```

If the public hostname will actually be `espd.dk` instead of `edsp.dk`, update the Nginx `server_name` values and the certificate paths before enabling the site.