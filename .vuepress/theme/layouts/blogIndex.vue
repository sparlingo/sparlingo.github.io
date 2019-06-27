<template>
    <navbar>
    <div class="articles">
        <article class="post section" v-for="post in posts">
            <h2 class="subtitle is-4">{{ post.title }}</h2>
            <p>{{ post.frontmatter.description }}</p>
            <a :href="post.path">Read More →</a>
        </article>
    </div>
</template>