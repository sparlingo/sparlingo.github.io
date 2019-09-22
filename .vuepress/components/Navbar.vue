<template>
  <section v-if="isHome" class="hero is-link is-fullheight-with-navbar">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              sparlingo.github.io
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <router-link
                v-for="nav of $site.themeConfig.nav"
                :key="nav.text"
                :to="nav.link"
                class="navbar-item"
              >
                {{ nav.text }}
              </router-link>
              <span class="navbar-item">
                <a class="button is-primary is-inverted" href="https://github.com/sparlingo" alt="my github">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>My Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <p class="title">
          My name is Kevin Sparling
        </p>
        <p class="subtitle">This is my stuff</p>
      </div>
    </div>
  </section>
  <section v-else class="hero is-link is-medium-with-navbar">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              sparlingo.github.io
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <router-link
                v-for="nav of $site.themeConfig.nav"
                :key="nav.text"
                :to="nav.link"
                class="navbar-item"
              >
                {{ nav.text }}
              </router-link>
              <span class="navbar-item">
                <a class="button is-primary is-inverted" href="https://github.com/sparlingo" alt="my github">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>My Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <p class="title">
          My name is Kevin Sparling
        </p>
        <p class="subtitle">This is my stuff</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isHome: Boolean
  }
}
 
</script>
