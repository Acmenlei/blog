import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

export default defineConfig({
  title: 'coderlei‘s blog',
  lastUpdated: true,

  themeConfig: {
    lastUpdatedText: '最后更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/vitepress-template'
      }
    ],
    nav,
    sidebar
  },
  markdown: {
    lineNumbers: true
  },
  outDir: '../../public',
})