<template>
    <div class="__layout_default__">
        <nuxt @init2="fetchArticleDetails"/>
    </div>
</template>

<script>
    export default {
        methods: {
            fetchArticleDetails(data = {}) {
                console.log(this.$route);
                console.log(data);
            }
        }
    };
</script>

<style lang="less">
    @import "../styles/basic";
</style>
