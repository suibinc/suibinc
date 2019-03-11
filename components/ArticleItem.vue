<template>
    <div class="article-item">
        <h2 v-text="article.title"></h2>
        <p v-text="article.desc"></p>
        <div class="tags-wrap" v-if="article.tags">
            <span class="tags" v-for="(item, index) in article.tags" v-text="item" :key="index"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            article: Object
        }
    };
</script>

<style lang="less">
    .article-list {
        h2 {
            font-size: 20px;
            color: #333;
            font-weight: normal;
        }
        p {
            font-size: 14px;
            color: #666;
            margin: 0;
            padding-bottom: 6px;
        }
        .tags-wrap {
            .tags {
                background-color: #f7f8fb;
                border: 1px solid #e9e9ee;
                border-radius: 12px;
                padding: 4px 12px;
                font-size: 12px;
                color: #7f828b;
            }
        }
    }
</style>
