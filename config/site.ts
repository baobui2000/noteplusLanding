export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Note +",
  description: "多店舗飲食店向けの運営管理DXツール。AIを活用した多言語コミュニケーションと効率的な店舗管理を実現。",
  mainNav: [
    {
      title: "ホーム",
      href: "/",
    },
    {
      title: "機能",
      href: "/features",
    },
    {
      title: "料金",
      href: "/pricing",
    },
    {
      title: "お問い合わせ",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/baobui2000",
    github: "https://github.com/baobui2000/AppNotePlus",
    docs: "https://baobui2000.github.io/AppNotePlus/",
  },
}

