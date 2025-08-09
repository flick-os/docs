import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flick OS",
  description: "Flick OS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PC Edition', link: '/pc-edition' }
    ],

    sidebar: [
      {
        text: 'PC Edition',
        items: [
          { text: 'Architecture', link: '/pc-edition/architecture' },
          { text: 'Features', link: '/pc-edition/features' },
          { text: 'Goals', link: '/pc-edition/goals' },
          { text: 'Initrd', link: '/pc-edition/initrd' },
          { text: 'Roadmap', link: '/pc-edition/roadmap' },
          { text: 'Shell', link: '/pc-edition/shell' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/flick-os' }
    ]
  }
})
