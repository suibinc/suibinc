import articleList from '../static/data/articles/1.json';

export const state = () => ({
    article: {
        total: articleList.length,
        list: articleList
    }
});

export const mutations = {
    increment(state) {
        state.article++;
    }
};
