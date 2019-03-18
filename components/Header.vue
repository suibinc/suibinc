<template>
    <div class="header">
        <site-nav/>
    </div>
</template>

<script>
    import SiteNav from './SiteNav';

    export default {
        components: {
            SiteNav
        }
    };
</script>

<style lang="less">
    .header {
        width: 100%;
        min-height: 400px;
        background: url("../static/background.jpg") no-repeat center;
        background-size: cover;
    }
</style>
