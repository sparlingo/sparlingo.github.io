<template>
  <div id="blogIndex" class="container">
    <h1 class="title is-2 has-text-centered">My recent blog posts</h1>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="post in posts">
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">
                <h4 class="title is-4 has-text-centered"><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></h4>
              </div>
            </div>
            <div class="card-content">
              <p>THING</p>
            </div>
            <div class="card-footer">
              <span>Published on: {{ formateDate(post.frontmatter.date) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

</style>

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
