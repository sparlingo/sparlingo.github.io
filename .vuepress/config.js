module.exports = {
  title: 'sparlingo.github.io',
  description: 'These are my projects, I hope you find them useful',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }]
  ],
  postcss: {
    postcss: {
      plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')]
    }
  },
  //theme: '@vuepress/blog',
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
            itemLayout: 'Post',
            itemPermalink: '/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 6
            }
          }
        ]
      }
    ]
  ],
  markdown: {
  }
}
