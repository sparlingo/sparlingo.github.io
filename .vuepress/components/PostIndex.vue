<template>
  <div id="blogIndex" class="container">
    <h1 class="title is-2">My recent blog posts</h1>
    <div class="blogRow has-text-centered" v-for="post in posts">
      <div class="columns">
        <div class="column is-one-fifth is-inline">
          <a href="" class="button is-small is-rounded is-dark">
            <span class="icon">
              <i class="fa fa-hashtag"></i>
            </span>
            <span>{{post.frontmatter.tag}}</span>
          </a>
        </div>
        <div id="dateField" class="column is-one-fifth has-text-grey-light">
          <span>
            {{ formateDate(post.frontmatter.date) }}
          </span>
        </div>
        <div class="column">
          <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  props: [
    'limit',
  ],
  methods: {
    formateDate(date, format = 'YYYY-MM-DD') {
      return moment(date).format(format)
    },
  },
  computed: {
    posts() {
      let posts = this.$site.pages
        .filter(post => !post.frontmatter.blog_index)
        .filter(post => !post.frontmatter.isHome)
        .filter(post => !post.path.startsWith('/projects/'))
        .filter(post => !post.path.startsWith('/archived/'))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

      if (this.limit > 0) {
        posts = posts.slice(0, this.limit);
      }

      return posts;
    }
  }
}
</script>



<style scoped>
#blogIndex {
  padding-top: 50px;
}


</style>