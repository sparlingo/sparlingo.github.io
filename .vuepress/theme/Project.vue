<template>
  <div class="theme-container">
    <Navbar/>
    <section class="projects">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title"><Content slot-key="title" /></p>
              <p><Content slot-key="headline" /></p>
            </div>
            <div class="tile is-parent box">
              <div class="tile is-child">
                <p class="buzzwords">Buzzwords?</p>
                <ul id="tech">
                  <li v-for="tech in $frontmatter.techs">#{{ tech }}</li>
                </ul>
              </div>
              <div class="tile is-child">
                <p class="buzzwords">TLDR;</p>
                <p>{{$frontmatter.tldr}}</p>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title">Three</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
              <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>

export default {
}
</script>