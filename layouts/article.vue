<template>
    <div class="__layout_article__">
        <article-header :config="config"/>
        <b-container>
            <nuxt/>
        </b-container>
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

<style lang="less">
    @import "../styles/basic";
    @import "../styles/article";

    .__layout_article__ {
        .container {
            padding-top: 20px;
        }
    }
</style>
