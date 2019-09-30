<template>
  <div class="theme-container">
    <Navbar/>
    <section class="content">
      <Content slot-key="title" />
      <Content/>
    </section>
    <Footer/>
  </div>
</template>

<style lang="sass" scoped>
.content__title 
  text-align: center
  font-size: 3rem
  font-weight: 600
</style>
