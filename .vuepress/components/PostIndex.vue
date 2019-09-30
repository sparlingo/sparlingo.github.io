<template>
  <div id="blogIndex" class="container">
    <h1 class="title is-2 has-text-centered">My recent blog posts</h1>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="post in posts">
          <div class="card">
            <header class="card-header">
                <h3 class="card-header-title is-3 has-text-centered">
                  <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
                </h3>
            </header>
            <div class="card-content">
              <p>{{post.frontmatter.description}}</p>
            </div>
            <div class="card-footer">
              <p class="card-footer-item">
                {{ formateDate(post.frontmatter.date) }}
              </p>
              <p class="card-footer-item">
                <span class="icon">
                  <i class="fa fa-hashtag"></i>
                  {{post.frontmatter.tag}}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
header.card-header
  text-align: centered

card
  height: 250px

.card-header
  background-color: #E3E3E3
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
