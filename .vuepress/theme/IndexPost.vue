<template>
  <div class="theme-container">
    <Navbar />
    <section class="content">
      <div class="container">
        <div class="columns is-centered is-multiline has-text-centered">
          <div class="column is-8">
            <h1>My Blog Posts</h1>
            <div id="posts">
              <div class="post" v-for="post in posts">
                <h2 class="title is-2"><router-link class="page-link" :to="post.path">{{ post.title }}</router-link></h2>
                <h5 class="title">{{ post.frontmatter.description }}</h5>
                <h6 class="subtitle is-6">Posted by Kevin Sparling on {{ formateDate(post.frontmatter.date) }}</h6>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
h1
  text-align: center
  font-size: 2.75rem
  font-weight: 600
  padding-top: 15px

h5
  font-weight: 400

.subtitle
  opacity: 60%
  
.page-link
  font: 100% Ubuntu
  font-size: 1.5rem
  color: #111111

.post
  
</style>

<script>
import moment from 'moment'

export default {
  methods: {
    formateDate(date, format = 'YYYY-MM-DD') {
      return moment(date).format(format)
    }
  },
  computed: {
    posts() {
      //let posts = this.$site.pages
      let posts = this.$pagination._matchedPages
        .filter(post => !post.frontmatter.blog_index)
        .filter(post => !post.frontmatter.isHome)
        .filter(post => !post.path.startsWith('/projects/'))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

      return posts;
    }
  }
}
</script>