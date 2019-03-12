<template>
    <div class="__layout_index__">
        <sui-header/>
        <nuxt/>
    </div>
</template>

<script>
    import SuiHeader from '~/components/Header.vue';

    export default {
        components: {
            SuiHeader
        }
    };
</script>

<style lang="less">
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
        a {
            outline: none;
            &:hover {
                color: #2196FF;
                text-decoration: none;
            }
        }
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>
