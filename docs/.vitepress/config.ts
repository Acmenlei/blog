import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

export default defineConfig({
  title: '🫡 coderlei‘s blog',
  lastUpdated: true,

  themeConfig: {
    lastUpdatedText: '最后更新时间',
    logo: '',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/acmenlei'
      }
    ],
    nav,
    sidebar
  },
  markdown: {
    lineNumbers: true
  },
  base: '/blog/'
})