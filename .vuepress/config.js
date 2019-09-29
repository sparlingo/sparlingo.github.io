module.exports = {
  title: 'sparlingo.github.io',
  description: 'These are my projects, I hope you find them useful',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }]
  ],
  plugins: [
    [
      "vuepress-plugin-cat"
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'My Blog', link: '/blog' },
      { text: 'Projects', link: '/projects' },
    ]
  },
  projectConfig: {
  }
}
