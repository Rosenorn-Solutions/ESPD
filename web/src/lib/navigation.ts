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
      { title: "Om ESPD", href: "/om-espd" },
      { title: "Bestyrelsen", href: "/bestyrelsen" },
      { title: "Vedtægter", href: "/vedtaegter" },
      { title: "Regnskab 2021", href: "/regnskab" },
    ],
  },
  {
    title: "Om sexisme",
    children: [
      { title: "Hvad er sexisme?", href: "/sexisme" },
      { title: "Sexismepyramiden", href: "/sexismepyramiden" },
      { title: "Hvad er voldtægtskultur?", href: "/voldtaegtskultur" },
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
            href: "/sexisme-i-gaming",
          },
          { title: "Roskilde Festival", href: "/roskilde-festival" },
          { title: "FN's verdensmål", href: "/fns-verdensmaal" },
        ],
      },
      {
        title: "Mærkesager",
        children: [
          {
            title: "Retningslinjer til medier",
            href: "/retningslinjer-medier",
          },
          { title: "Kønsbaseret vold", href: "/koensbaseret-vold" },
          {
            title: "Samtykkebaseret voldtægtslovgivning",
            href: "/samtykkelov",
          },
        ],
      },
      {
        title: "Aktiviteter",
        children: [
          { title: "ESPDs Flirteworkshop", href: "/flirteworkshop" },
          { title: "Oplæg og arrangementer", href: "/oplaeg" },
        ],
      },
      { title: "Høringssvar", href: "/hoeringssvar" },
    ],
  },
  {
    title: "Kontakt",
    children: [
      { title: "Kontakt os", href: "/kontakt-os" },
      {
        title: "Udsat for overgreb eller vold? Find hjælp her",
        href: "/find-hjaelp",
      },
    ],
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];
