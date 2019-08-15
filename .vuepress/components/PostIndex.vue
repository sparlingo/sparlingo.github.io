<template>
  <div id="blogIndex" class="container">
    <div class="card column is-4" v-for="post in posts">
      <div class="card-content">
        <p class="title"><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            Tags
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            {{ formateDate(post.frontmatter.date) }}
          </span>
        </p>
      </footer>
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
#blogIndex{

}

</style>