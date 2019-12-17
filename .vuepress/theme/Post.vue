<template>
  <div class="theme-container">
    <Navbar />
    <section class="content">
      <div class="container">
        <span>
          <h1 class="title">
            {{$page.frontmatter.title}}
          </h1>
        </span>
        </span>
        <Content/>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.content__title 
  text-align: center
  font-size: 2.75rem
  font-weight: 600
  padding-bottom: 20px

.header-anchor
  display: none
</style>

<script>
import moment from 'moment'

export default {
  methods: {
    formateDate(date, format = 'YYYY-MM-DD') {
      return moment(date).format(format)
    }
  }
}
</script>