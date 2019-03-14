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
    @import "../styles/basic";
</style>
