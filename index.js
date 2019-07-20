module.exports = {
    title: 'sparlingo.github.io',
    description: "Yes, please lord yes!",
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'}]
    ],
    plugins: [
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'post',
                    path: '/blog/',
                    dirname: '_posts',
                    layout: 'IndexPost',
                    itemLayout: 'Post'
                }
            ],
            frontmatters: [
                {
                  id: "tag",
                  keys: ['tag', 'tags'],
                  path: '/tag/',
                  layout: 'Tag',
                  frontmatter: { title: 'Tag' },
                  itemlayout: 'Tag',
                  pagination: {
                    perPagePosts: 3
                  }
                },
              ]
        }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' },
        ]
    }
}