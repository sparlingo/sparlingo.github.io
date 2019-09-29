<template>
    <div class="container">
        <div id="projectList" class="columns">
            <div v-for="project in projects" class="card column is-3">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <!-- <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image">
                            </figure> -->
                        </div>
                        <div class="media-content">
                            <router-link
                                :key="project.name"
                                :to="project.link"
                                class="page-link"
                            >
                                <p class="title is-4">{{project.name}}</p>
                                <p class="subtitle">{{project.blurb}}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="content">
                        {{project.content}}
                        <a href="#">{{project.tags}}</a>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "iZhongWhen",
                    blurb: "Language learning app for OCD people",
                    content: "A free-to-use Nuxt-based web app for managing your amateurish language learning",
                    tags: "#javascript,#responsive,#vueJS",
                    ghLink: "https://github.com/sparlingo/iZhongWhen.git",
                    image: "",
                    link: "/projects/izhongwhen"
                },
                {
                    name: "Munenori",
                    blurb: "An API for Toronto Blue Jays nerds",
                    content: "It's very difficult to find APIs for baseball with any type of documentation",
                    tags: "#web,#javascript,#data",
                    ghLink: "https://github.com/sparlingo/munenori.git",
                    image: "",
                    link: "/projects/munenori"
                },
                {
                    name: "Player Hater",
                    blurb: "An ultimate frisbee stats app",
                    content: "React Native app for iOS and Android to record and organize Ultimate Frisbee player stats",
                    tags: "#web,#responsive,#react",
                    ghLink: "https://github.com/sparlingo/playerHater.git",
                    image: "",
                    link: "/projects/playerhater"
                },
                {
                    name: "Blue Bird Barter",
                    blurb: "A Blue Jays card game",
                    content: "A GatsbyJS app where you can draft a Toronto Blue Jays dream team and go head-to-head with others",
                    tags: "#web,#responsive,#react",
                    ghLink: "https://github.com/sparlingo/BBB.git",
                    image: "",
                    link: "/projects/BBB"
                }
            ]
        }
    }
}
</script>

<style scoped>
    
</style>