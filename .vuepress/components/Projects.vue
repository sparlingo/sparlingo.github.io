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
                            <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{project.name}}</p>
                            <p class="subtitle">{{project.blurb}}</p>
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
                    "id": 0,
                    "name": "iZhongWhen",
                    "blurb": "language learning app for the OCD",
                    "content": "A free-to-use Nuxt-based web app for managing your amateurish language learning",
                    "tags": "#javascript,#responsive,#vueJS",
                    "image": ""
                },
                {
                    "id": 1,
                    "name": "Munenori",
                    "blurb": "An API for Toronto Blue Jays nerds",
                    "content": "It's very difficult to find APIs for baseball with any type of documentation",
                    "tags": "#web,#feathersJS,#data",
                    "image": ""
                },
                {
                    "id": 2,
                    "name": "Player Hater",
                    "blurb": "An ultimate frisbee stats app",
                    "content": "React Native app for iOS and Android to record and organize Ultimate Frisbee player stats",
                    "tags": "#web,#responsive,#react",
                    "image": ""
                },
                {
                    "id": 3,
                    "name": "BB Barter",
                    "blurb": "A Blue Jays card game",
                    "content": "A React app where you can draft a team and go head-to-head with other teams",
                    "tags": "#web,#responsive,#react"
                }
            ]    
        }
    }
}
</script>

<style scoped>
    
</style>