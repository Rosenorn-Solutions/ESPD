import type { NavItem } from "@/types";

/**
 * Main navigation structure.
 * In production, this would come from Sanity CMS via the `navigation` singleton.
 * For now we hard-code it to match the original site's menu.
 */
export const mainNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Hvem er vi?",
    children: [
      { title: "Om ESPD", href: "/hvem-er-vi/om-espd" },
      { title: "Bestyrelsen", href: "/hvem-er-vi/bestyrelsen" },
      { title: "Vedtægter", href: "/hvem-er-vi/vedtaegter" },
      { title: "Regnskab", href: "/hvem-er-vi/regnskab" },
    ],
  },
  {
    title: "Om sexisme",
    children: [
      { title: "Hvad er sexisme?", href: "/om-sexisme/hvad-er-sexisme" },
      { title: "Sexismepyramiden", href: "/om-sexisme/sexismepyramiden" },
      { title: "Hvad er voldtægtskultur?", href: "/om-sexisme/hvad-er-voldtaegtskultur" },
    ],
  },
  {
    title: "Vores arbejde",
    children: [
      {
        title: "Samarbejde",
        children: [
          {
            title: "Sexisme i Gaming og Rollespil",
            href: "/vores-arbejde/samarbejde/sexisme-i-gaming-og-rollespil",
          },
          { title: "Roskilde Festival", href: "/vores-arbejde/samarbejde/roskilde-festival" },
          { title: "FN's verdensmål", href: "/vores-arbejde/samarbejde/fns-verdensmaal" },
        ],
      },
      {
        title: "Mærkesager",
        children: [
          {
            title: "Retningslinjer til medier i sager om kønnet vold",
            href: "/vores-arbejde/maerkesager/retningslinjer-til-medier-i-sager-om-koennet-vold",
          },
          { title: "Kønsbaseret vold", href: "/vores-arbejde/maerkesager/koensbaseret-vold" },
          {
            title: "Samtykkebaseret voldtægtslovgivning",
            href: "/vores-arbejde/maerkesager/samtykkebaseret-voldtaegtslovgivning",
          },
        ],
      },
      {
        title: "Aktiviteter",
        children: [
          { title: "ESPDs Flirteworkshop", href: "/vores-arbejde/aktiviteter/espds-flirteworkshop" },
          { title: "Oplæg og arrangementer", href: "/vores-arbejde/aktiviteter/oplaeg" },
        ],
      },
      { title: "Høringssvar", href: "/vores-arbejde/hoeringssvar" },
    ],
  },
  {
    title: "Kontakt",
    children: [
      { title: "Kontakt os", href: "/kontakt/kontakt-os" },
      {
        title: "Hvor kan jeg få hjælp?",
        href: "/kontakt/hvor-kan-jeg-faa-hjaelp",
      },
    ],
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];
