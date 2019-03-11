import articleList from '../config/articles';

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
