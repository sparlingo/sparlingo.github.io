<template>
  <div class="theme-container">
    <Navbar/>
    <section class="projects">
      <Projects/>
    </section>
    <Footer/>
  </div>

</template>

<script>

export default {
  
}
</script>

<style lang="sass" scoped>
main
  text-align: center
  margin: 0 auto
.cover-image
  width: 120px
  border-radius: 50%
.page-subtitle
  font-size: 1rem
  font-weight: 200
  margin: -0.4em 0 0.8em 0
.page-title
  font-size: 2rem
  font-weight: 400
.page-links
  margin: .6em 0
.page-links > *
  margin: 0 .2em
.page-content
  text-align: left
.page-content /deep/ h1:first-child
  display: none
.article-preview
  margin: 1rem 0
  text-align: left
.article-preview__tags
  margin: -0.2em 0 0.4em 0
  font-size: 0.8rem
  color: #3f4259
.article-preview__text
  margin: 0
.article-preview__link
  font-size: 0.8rem
  color: #4d565e
</style>