<template>
    <div class="article-item">
        <nuxt-link to="article/2017-12-19">
            <h2 v-text="article.title"></h2>
        </nuxt-link>
        <p v-text="article.desc"></p>
        <div class="tags-wrap" v-if="article.tags">
            <span class="tags" v-for="(item, index) in article.tags" v-text="item" :key="index"></span>
        </div>
        <div class="info-wrap">
            <span class="article-date" v-if="article.date">发布于：{{article.date}}</span>
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
    .article-item {
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
            h2 {
                color: #2196FF;
            }
            p {
                color: #333;
            }
        }
        h2 {
            line-height: 24px;
            font-size: 20px;
            color: #333;
            font-weight: normal;
            transition: all .2s;
        }
        p {
            font-size: 14px;
            color: #666;
            margin: 0;
            padding-bottom: 6px;
            transition: all .2s;
        }
        .tags-wrap {
            .tags {
                background-color: #f7f8fb;
                border: 1px solid #e9e9ee;
                border-radius: 12px;
                padding: 4px 12px;
                font-size: 12px;
                color: #7f828b;
                margin-right: 6px;
                transition: all .2s;
                &:hover {
                    background-color: #e9f6ff;
                    border-color: #2196FF;
                    color: #47494e;
                }
            }
        }
        .info-wrap {
            font-size: 12px;
            padding-top: 6px;
            .article-date {
                color: #7f828b;
            }
        }
    }
</style>
