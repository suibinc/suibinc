<template>
    <div class="article-list">
        <article-item v-for="(item, index) in list" :key="index" :article="item" :dataset-index="index"/>
    </div>
</template>

<script>
    import ArticleItem from './ArticleItem';

    export default {
        components: {
            ArticleItem
        },
        props: {
            list: Array
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
