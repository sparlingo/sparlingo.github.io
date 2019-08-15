module.exports = {
  title: 'sparlingo.github.io',
  description: 'These are my projects, I hope you find them useful',
  //theme: '@vuepress/blog', // OR shortcut: @vuepress/blog
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css' }]
  ],
  plugins: [
    [
      '@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/blog',
            layout: 'PostIndex',
            itemLayout: 'Blog',
          },
        ]
      }
    ]
  ]
}
