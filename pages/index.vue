<template>
    <section class="container">
        <div class="posts col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <article-list/>
        </div>
    </section>
</template>

<script>
    import ArticleList from '../components/ArticleList';

    export default {
        layout: 'index',
        components: {
            ArticleList
        }
    }
</script>

<style>
    .container {
        margin: 33px auto;
        min-height: 100vh;
    }
</style>
