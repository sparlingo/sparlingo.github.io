<template>
  <div class="wrapper">
    <Navbar/>
    <section class="content">
      <Content slot-key="title" />
      <Content slot-key="headline" />
      <Content/>
    </section>
    <Footer/>
  </div>
</template>

<style lang="stylus">
  @import './styles/theme.styl';
</style>
