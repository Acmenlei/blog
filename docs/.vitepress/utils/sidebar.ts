export const sidebar = {
  '/about/': [
    {
      text: '文章目录',
      link: '/about/hello', // default enter link page
      items: [
        { text: 'hello', link: '/about/profile' },
      ]
    }
  ],
  '/vue/': [
    {
      text: 'vuejs技术栈系列',
      link: '/vue/computed',
      items: [
        { text: 'computed原理', link: '/vue/computed' },
        { text: 'dom diff', link: '/vue/domdiff' },
      ]
    }
  ]
}
