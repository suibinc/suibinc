<template>
    <div class="__layout_article__">
        <article-header :config="config"/>
        <nuxt/>
    </div>
</template>

<script>
    import ArticleHeader from '~/components/article/Header.vue';

    export default {
        components: {
            ArticleHeader
        },
        data() {
            return {
                config: {
                    title: ''
                }
            };
        },
        beforeCreate() {
            this.$root.$on('init', config => {
                this.config = config;
                console.log('layout', config);
            });
        },
        beforeDestroy() {
            this.$root.$off('init');
        },
        methods: {
            fetchArticleDetails(data = {}) {
                console.log(this.$route);
                console.log(data);
            }
        }
    };
</script>

<style>
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }
</style>
