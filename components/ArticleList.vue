<template>
    <div class="article-list">
        <article-item v-for="(item, index) in article.list" :key="index" :article="item"/>
    </div>
</template>

<script>
    import ArticleItem from './ArticleItem';

    export default {
        components: {
            ArticleItem
        },
        computed: {
            article() {
                return this.$store.state.article;
            }
        },
        mounted() {
            console.log(this.article);
        }
    };
</script>

<style lang="less">
    .article-list {

    }
</style>
