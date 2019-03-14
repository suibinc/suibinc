<template>
    <div class="article-header">
        <div class="article-layer">
            <h1 class="article-title" v-text="config.title"></h1>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            config: Object
        }
    };
</script>

<style lang="less">
    .article-header {
        position: relative;
        width: 100%;
        min-height: 300px;
        background: url("../../static/background.jpg") no-repeat center;
        background-size: cover;
        .article-layer {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .6);
            h1 {
                font-size: 36px;
                text-align: center;
                color: #fff;
                line-height: 300px;
            }
        }
    }
</style>
