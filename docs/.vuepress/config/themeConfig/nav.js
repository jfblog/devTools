// nav
module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  {
    text: '前端技术',
    link: '/web/',
    icon: '',
    items: [
      {
        text: '文档教程',
        items: [
          { text: '慕课教程', link: '/web/docs/imooc/wiki/', icon: 'reco-blog' },
        ]
      }
    ]
  },
  {
    text: '图书馆',
    link: '/library/',
    icon: '',
    items: [
      {
        text: '太易',
        items: [
          { text: '时间地图', link: '/library/map/', icon: 'reco-blog' },
        ]
      }
    ]
  },
  {
    text: '千山万水',
    link: '/idealism/',
    icon: '',
    items: [
      {
        text: '昨日',
        items: [
          { text: '音乐', link: '/idealism/music/', icon: 'reco-blog' },
        ]
      }
    ]
  },
  { text: '留言板', link: '/bookshop/message-board/', icon: 'reco-suggestion' },
  {
    text: '关于',
    icon: 'reco-message',
    items: [
      {
        text: '联系',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/kaimo313', icon: 'reco-csdn' },
          { text: 'Gitee', link: 'https://gitee.com/kaimo313', icon: 'reco-mayun' },
          { text: 'GitHub', link: 'https://github.com/kaimo313', icon: 'reco-github' },
          { text: '联系店长', link: '/bookshop/linkme/', icon: 'reco-account' },
        ]
      },{
        text: '博客',
        items: [
          { text: '博客说明', link: '/bookshop/explain/', icon: 'reco-document' },
          { text: '更新日志', link: '/bookshop/logs/', icon: 'reco-document' },
        ]
      },{
        text: '其他',
        items: [
          { text: '资源工具', link: '/resource-tools/', icon: 'reco-document' },
          { text: '友情链接', link: '/bookshop/friendslink/', icon: 'reco-friend' },
        ]
      },
    ]
  }
]
