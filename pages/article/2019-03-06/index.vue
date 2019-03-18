<template>
    <div class="article">
        <pre class="brush:js">
<% include('~/code/2017-12-18/001.code') %>
        </pre>
    </div>
</template>

<script>
    import config from './config';

    export default {
        layout: 'article',
        created() {
            this.$root.$emit('init', config);
        }
    };
</script>

<style lang="less">
    .article {
    }
</style>
