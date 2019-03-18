const fs = require('fs');

const allTags = [];
const articleMap = {};
const articleAll = [
    require('./pages/article/2017-12-19/config.json'),
    require('./pages/article/2019-03-06/config.json'),
];

articleAll.forEach(article => {
    if (article.tags instanceof Array) {
        article.tags.forEach(tag => {
            let index = allTags.indexOf(tag);
            let tagKey = '';
            if (index < 0) {
                allTags.push(tag);
                tagKey = `${allTags.length}`;
                articleMap[tagKey] = {
                    total: 0,
                    list: []
                };
            } else {
                tagKey = `${index + 1}`;
            }

            articleMap[tagKey].total++;
            articleMap[tagKey].list.push(article);
        });
    }
});

let cacheArr = [];
allTags.forEach((tag, index) => {
    cacheArr.push({
        id: index + 1,
        title: tag,
        total: articleMap[`${index + 1}`].total
    })
});
fs.writeFile(`${__dirname}/static/data/tags.json`, JSON.stringify(cacheArr), function () {
    console.log('已重建标签索引；', 0);
});

for (let key in articleMap) {
    if (articleMap.hasOwnProperty(key)) {
        fs.writeFile(`${__dirname}/static/data/tags/${key}.json`, JSON.stringify(articleMap[key]), function () {
            console.log('已重建标签分类；', key);
        });
    }
}

function saveArticles(page = 0, list) {
    if (list.length < 1) return;
    fs.writeFile(`${__dirname}/static/data/articles/${page}.json`, JSON.stringify(list), function () {
        console.log('已重建文章列表；', page);
    });
}

cacheArr = [];
let page = 1;
articleAll.forEach(article => {
    cacheArr.push(article);
    if (cacheArr.length >= 10) {
        saveArticles(page++, cacheArr);
        cacheArr = [];
    }
});
saveArticles(page, cacheArr);
