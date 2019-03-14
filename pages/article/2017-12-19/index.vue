<template>
    <div class="article"></div>
</template>

<script>
    import ArticleHeader from '~/components/article/Header.vue';
    import config from './config';

    export default {
        layout: 'article',
        components: {
            ArticleHeader
        },
        data() {
            return {
                config: config
            }
        },
        created() {
            console.log('12/19', this.$parent.$parent);
            // this.$parent.fetchArticleDetails({ a: 1 });
            this.$root.$emit('init', config);
        }
    };
</script>

<style lang="less">
    .article {
    }
</style>
