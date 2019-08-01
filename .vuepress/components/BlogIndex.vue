<template>    
    <article class="article-preview" v-for="post in blogPosts" :key="post.key">
        <h1 class="article-preview__title"> {{post.title}} </h1>
        <div class="article-preview__tags">
        <span>{{post.frontmatter['author']}}</span> • 
        <span>{{post.frontmatter['date']}}</span> • 
        <span>{{post.frontmatter['topic']}}</span>
        </div>
        <p class="article-preview__text"> {{post.frontmatter['preview-text']}} </p>
        <a :href="post.path" class="article-preview__link"> Read → </a>
    </article>
</template>

<script>
computed: {
    blogPosts () {
      return this.$site.pages.filter(page => page.path.includes('/posts/'))
    }
}
</script>
