<template lang="pug">
    p.pug {{ msg }}
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello, Pug'
        }
    }
}
</script>

<style lang="sass">
.pug
  font-size: 20px
</style>