<template>
    <nav class="__nav__ fixed">
        <div class="nav-wrap clear-fix">
            <div class="w-left">
                <ul class="nav-list">
                    <li class="i-nav">首页</li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {};
</script>


<style lang="less">
    .__nav__ {
        width: 100%;
        height: 52px;
        background-color: rgba(255, 255, 255, 0.6);
        &.fixed {
            position: fixed;
            left: 0;
            top: 0;
        }
        .nav-wrap {
            width: 1000px;
            margin: 0 auto;
            .w-left {
                float: left;
            }
            .nav-list {
                list-style: none;
                .i-nav {
                    height: 52px;
                    line-height: 52px;
                    padding: 0 10px;
                }
            }
        }
    }
</style>
