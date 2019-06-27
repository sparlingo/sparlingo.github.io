<template>
    <div>
        <section class="hero is-bold is-link is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $page.frontmatter.title }}</h1>
                    <h2 class="subtitle">This is a pithy subtitle</h2>
                </div>
            </div> 
        </section>

        <section class="projects">
            <div class="columns is-2">
                <div class="card column is-one-third">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="/ruxin.jpg" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">
                            Ruxin
                        </p>
                        <p class="subtitle is-2">
                            @Ruxin 
                        </p>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            
                <div class="card column is-one-third">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">
                            Kimble
                        </p>
                        <p class="subtitle is-2">
                            @Kimble 
                        </p>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            
                <div class="card column is-one-third">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">
                            China.XYZ
                        </p>
                        <p class="subtitle is-2">
                            @ChinaXYZ 
                        </p>
                    </div>
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <Content />
        </section>
        
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                <strong>sparlingo.github.io</strong> by Kevin Sparling</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
                .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date))
        }
    }
}
</script>

<style>

</style>