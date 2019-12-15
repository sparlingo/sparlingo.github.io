<template>
  <div class="theme-container">
    <Navbar/>
    <section class="projects">
      <ProjectIndex />
    </section>
    <Footer/>
  </div>
</template>

<script>
import ProjectIndex from '../components/ProjectIndex.vue'

export default {
  components: { ProjectIndex }
}
</script>