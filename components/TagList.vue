<template>
    <div class="article-tag-list clear-fix">
        <span class="tag" v-for="(tag, index) in list" :key="index" :style="`animation-delay: ${getRandomDelay()}ms`">
            {{tag.title}} <i>({{tag.total}})</i>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            list: Array
        },
        methods: {
            getRandomDelay() {
                return Math.floor(1000 + Math.random() * 2000);
            }
        }
    };
</script>

<style lang="less">
    .article-tag-list {
        position: relative;
        .tag {
            float: left;
            background-color: #f7f8fb;
            border: 1px solid #e9e9ee;
            border-radius: 4px;
            padding: 4px 12px;
            font-size: 12px;
            color: #7f828b;
            margin-right: 6px;
            cursor: pointer;
            animation: tag-appear .6s ease both;
            transition: all .2s;
            i {
                font-style: normal;
                font-size: 12px;
            }
            &:hover {
                background-color: #e9f6ff;
                border-color: #2196FF;
                color: #47494e;
            }
        }
    }
</style>
