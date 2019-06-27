module.exports = {
    title: 'sparlingo.github.io',
    description: "Yes, please lord yes!",
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'}]
    ],
    theme: '@vuepress/blog',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog' },
        ]
    }
}