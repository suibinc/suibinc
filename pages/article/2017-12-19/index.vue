<template>
    <div class="article">
        <p>因业务调整，部分前端业务使用了node ssr来优化用户体验，在这期间也踩了一些坑；比如说，内存泄露、服务抖动等等，所以这里记录一下SSR重构前期遇到的一个慢内存泄露事件；</p>
        <p>
            新页面上线后几个小时，收到了报警（服务内存达到设定的阈值后会自动重启，并报警告知业务方）。查看监控后发现，短时间来看内存相对稳定，并无大幅上升趋势，但是放大到几个小时的维度。发现内存是非常缓慢上升的，怀疑有小量的内存泄露，因为测试环境访问量少，未能及时发现；</p>
        <p>本地调试服务，并使用 <b>Easy-Monitor</b> 进行分析，得到如下结果：</p>
        <p><img src="~assets/article/2017-12-19/1.png" alt=""></p>
        <p>从这里可以看出，应该是_installedPlugins函数的锅（有背锅的了），初步分析应该是Vue.use函数的问题；</p>
        <p>进一步查看代码执行过程，怀疑是 <b>Vue.use</b> 函数多次 <b>push</b>
            了组件（或指令）对象导致 <b>installedPlugins</b> 爆炸，通过console（debug）发现，每次刷新页面下面的代码都会被执行
            <b class="col-code">plugin.install.apply(plugin, args)</b>
            然后对象被 <b>push</b> 至 <b>installedPlugins</b> 数组内（因此也导致了内存泄露，访问页面100W次，<b>installedPlugins</b>
            数组内则会有100W*N个对象），下图为 <b>Vue.use</b> 源码：
        </p>
        <p><img src="~assets/article/2017-12-19/2.png" alt=""></p>
        <p>
            在上面的源码中有一个疑问点：Vue有判断 <b class="col-code">if (installedPlugins.indexOf(plugin) > -1)</b>，
            对象存在则直接 return this，为什么实际运行中没有预期返回呢？难道每次import文件时都创建了一个新的对象？
        </p>
        <p>
            验证上面的想法，随便建了一个test.js，内容为：
        </p>
        <pre class="brush:js">
<% include('~/code/2017-12-18/001.code') %>
        </pre>
        <p>
            执行代码，理论上import同一个文件（如刚刚建立的test.js文件）肯定不会重复创建新的对象，但是实际上每次刷新页面import确实会输出 <b>"running"</b> 字符串（理论上 <b>"running"</b>
            应该只输出一次）。那么肯定有哪个地方出现了问题，既然是服务端渲染，那么就尝试从入口函数 <b class="col-code">renderToString</b> 查找问题来源，是否可能在 <b
            class="col-code">VueServerRenderer.createBundleRenderer.renderToString</b>
            中出现了问题？
        </p>
        <p>查看 <b class="col-code">VueServerRenderer.createBundleRenderer</b> 源码，逐步分析：</p>
        <pre class="brush:js">
<% include('~/code/2017-12-18/002.code') %>
        </pre>
        <p>
            这段代码中发现每次 <b class="col-code">renderToString</b> 时会执行 <b class="col-code">createBundleRunner</b>，继续查看 <b
            class="col-code">createBundleRunner</b> 函数执行情况：
        </p>
        <pre class="brush:js">
var evaluate = compileModule(files, basedir, runInNewContext);
......
runner = evaluate(entry, sandbox); // 这里解析入口并执行代码
        </pre>
        <p>继续查看 <b class="col-code">compileModule</b> 函数：</p>
        <pre class="brush:js">
<% include('~/code/2017-12-18/003.code') %>
        </pre>
        <p>发现在解析执行时，对于vue、vuex、lru-cache等公共模块都是通过 <b class="col-code">require(file)</b>
            执行，而其它的模块则是直接执行一次并且创建一个新的对象，并且缓存在compiledScripts对象中（第N+1次的import则正常的不会执行console了）</p>
        <p>因此，对于vue
            ssr中的import非dependencies中的模块引入都会创建一个新的对象，而dependencies中的模块则不会，因此对于所有的往单例对象添加import自定义文件的对象的操作都会引起内存泄露。</p>
    </div>
</template>

<script>
    import ArticleHeader from '~/components/article/Header.vue';
    import config from './config';
    import { insertScript, insertStyleLink } from '../../../utils';

    export default {
        layout: 'article',
        components: {
            ArticleHeader
        },
        data() {
            return {
                config: config
            }
        },
        created() {
            this.$root.$emit('init', config);
        },
        mounted() {
            insertStyleLink([
                'https://cdn.bootcss.com/SyntaxHighlighter/3.0.83/styles/shCore.css',
                'https://cdn.bootcss.com/SyntaxHighlighter/3.0.83/styles/shCoreDefault.css'
            ]);
            insertScript('https://cdn.bootcss.com/SyntaxHighlighter/3.0.83/scripts/shCore.js', () => {
                if (!window.SyntaxHighlighter) {
                    return false;
                }
                window.SyntaxHighlighter.defaults['toolbar'] = false;
                window.SyntaxHighlighter.config.bloggerMode = true;
                window.SyntaxHighlighter.config.stripBrs = true;
                insertScript('https://cdn.bootcss.com/SyntaxHighlighter/3.0.83/scripts/shBrushJScript.js', () => {
                    console.log('done.');
                    window.SyntaxHighlighter.highlight();
                });
            });
        }
    };
</script>

<style lang="less">
    .article {
    }
</style>
