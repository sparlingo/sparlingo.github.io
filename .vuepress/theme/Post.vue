<template>
  <div class="theme-container">
    <Navbar />
    <section class="content">
      <h1>
        {{$page.frontmatter.title}}
      </h1>
      <h3>
        {{formateDate($page.frontmatter.date)}}
      </h3>
      <Content/>
    </section>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.content__title 
  text-align: center
  font-size: 2.75rem
  font-weight: 600
</style>

<script>
import moment from 'moment'
export default {
  methods: {
    formateDate(date, format = 'YYYY-MM-DD') {
      return moment(date).format(format)
    },
  }
}
</script>