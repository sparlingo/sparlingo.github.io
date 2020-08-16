<template>
  <div class="theme-container">
    <Navbar isHome />
    <section class="projects">
      <ProjectIndex />
    </section>
    <Footer/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isHome: true
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>