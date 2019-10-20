<template>
  <div class="theme-container">
    <Navbar/>
    <section class="content">
      <Content slot-key="title" />
      <Content slot-key="headline" />
      <Content/>
    </section>
    <Footer/>
  </div>
</template>

<style lang="sass" scoped>
.content__title 
  text-align: center
  font-size: 2.75rem
  font-weight: 600
</style>
