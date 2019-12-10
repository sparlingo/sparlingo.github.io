<template>
  <Layout>
    <template slot="page-top">
      {{post.frontmatter.title}}
    </template>
  </Layout>
</template>

<script>
import Layout from "@theme/layouts/Post.vue";

export default {
  components: { Layout }
};
</script>
