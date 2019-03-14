<template>
    <transition name="__default__"
                enter-active-class=""
                leave-active-class="">
        <div class="article-item">
            <nuxt-link :to="article.route || 'error'">
                <h2 v-text="article.title" class="animated" :style="appearDelay.title"></h2>
            </nuxt-link>
            <p v-text="article.intro" class="animated" :style="appearDelay.intro"></p>
            <!--<div class="tags-wrap animated" v-if="article.tags" :style="appearDelay.tags">-->
            <!--<span class="tags" v-for="(item, index) in article.tags" v-text="item" :key="index"></span>-->
            <!--</div>-->
            <div class="info-wrap animated clear-fix" :style="appearDelay.info">
                <span class="article-date" v-if="article.date">发布于：{{article.date}}</span>
                <span class="article-tips">标签：</span>
                <div class="tag-list clear-fix">
                    <span class="tag" v-for="(item, index) in article.tags" v-text="item" :key="index"></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            datasetIndex: Number,
            article: Object
        },
        computed: {
            appearDelay() {
                let delay = 400;
                return {
                    title: {
                        'animation-delay': `${this.datasetIndex * delay}ms`
                    },
                    intro: {
                        'animation-delay': `${this.datasetIndex * delay + 100}ms`
                    },
                    info: {
                        'animation-delay': `${this.datasetIndex * delay + 300}ms`
                    }
                }
            }
        },
        mounted() {
            console.log(this);
        }
    };
</script>

<style lang="less">
    .article-item {
        margin-bottom: 20px;
        cursor: pointer;
        .animated {
            animation: article-appear .6s ease both;
        }
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
            .article-date {
                float: left;
                color: #7f828b;
            }
            .article-tips {
                float: left;
                color: #47494e;
                margin-left: 10px;
            }
            .tag-list {
                float: left;
                .tag {
                    font-size: 12px;
                    color: #7f828b;
                    margin-right: 6px;
                }
            }
        }
    }
</style>
