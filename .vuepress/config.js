module.exports = {
  title: 'sparlingo.github.io',
  description: 'These are my projects, I hope you find them useful',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }]
  ],
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development Blog', link: '/blog' },
      { text: 'Projects', link: '/projects' },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/sparlingo'
        },
        {
          type: 'twitter',
          link: 'https://github.com/kevin_sparling'
        }
      ],
      copyright: [
        {
          text: 'MIT Licensed |  Copyright © 2018-present'
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/blog/',
            pagination: {
              lengthPerPage: 4,
            }
          }
        ]
      }
    ]
  ],
  markdown: {
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
        .end()
  }
}
