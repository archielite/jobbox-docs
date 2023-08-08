import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/jobbox/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/jobbox/release-notes' },
      { text: 'Upgrade Guide', link: '/jobbox/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/jobbox/installation' },
      { text: 'SSL', link: '/jobbox/ssl' },
      { text: 'License', link: '/jobbox/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage', link: '/jobbox/usage-homepage' },
      { text: 'Setup theme', link: '/jobbox/usage-theme' },
      { text: 'Setup menus', link: '/jobbox/usage-menu' },
      { text: 'Widgets', link: '/jobbox/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/jobbox/usage-custom-css-js' },
      { text: 'Translation', link: '/jobbox/usage-translation' },
      { text: 'Email', link: '/jobbox/usage-email' },
      { text: 'Multi-language', link: '/jobbox/usage-multi-language' },
      { text: 'Currencies', link: '/jobbox/usage-currencies' },
      { text: 'Media', link: '/jobbox/usage-media' },
      { text: 'Analytics', link: '/jobbox/usage-analytics' },
      { text: 'Backup', link: '/jobbox/plugin-backup' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]
