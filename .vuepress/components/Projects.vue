<template>
    <div class="container">
        <div id="projectList" class="columns is-3">

            <div v-for="project in projects" class="card column is-4">
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
                    "blurb": "it's a language learning app for the OCD",
                    "content": "A free-to-use Nuxt-based web app for managing your amateurish language learning",
                    "tags": "#javascript,#web,#responsive,#vueJS",
                    "image": ""
                },
                {
                    "id": 1,
                    "name": "Munenori",
                    "blurb": "A web app for Toronto Blue Jays superfans",
                    "content": "Pick your all time favorite Toronto Blue Jays lineup, face off against other Blue Jays nerds",
                    "tags": "#web,#responsive,#ios,#android",
                    "image": ""
                },
                {
                    "id": 2,
                    "name": "Player Hater",
                    "blurb": "A multi-platform ultimate frisbee stats app",
                    "content": "React Native app for iOS and Android to record and organize Ultimate Frisbee player stats",
                    "tags": "#web,#responsive,#react",
                    "image": ""
                }
            ]    
        }
    }
}
</script>

<style scoped>
    
</style>