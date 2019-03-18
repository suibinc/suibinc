<template>
    <section class="container">
        <b-container>
            <b-row>
                <b-col :cols="12" :sm="12" :md="8" :lg="8">
                    <article-list :list="list"/>
                </b-col>
                <b-col :cols="12" :sm="12" :md="4" :lg="4">
                    <tag-list :list="tags"/>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import ArticleList from '../components/ArticleList';
    import TagList from '../components/TagList';

    export default {
        layout: 'index',
        components: {
            ArticleList, TagList
        },
        data() {
            return {
                list: [],
                tags: []
            };
        },
        head() {
            return {
                title: 'suibinc blog.',
                meta: {
                    script: [
                        {
                            src: 'https://cdn.bootcss.com/velocity/2.0.5/velocity.min.js'
                        }
                    ]
                }
            };
        },
        mounted() {
            this.fetchArticles();
            this.fetchAllTags();
        },
        methods: {
            fetchArticles(page = 1) {
                this.$axios.$get(`/data/articles/${page}.json`).then(data => {
                    if (data instanceof Array) {
                        this.list = data;
                        console.log(data);
                    }
                });
            },
            fetchAllTags() {
                this.$axios.$get('/data/tags.json').then(data => {
                    this.tags = data;
                    console.log(data);
                });
            }
        }
    }
</script>

<style>
    @import "../styles/transition.less";

    .container {
        margin: 33px auto;
        min-height: 100vh;
    }
</style>
