export const state = () => ({
    article: {
        total: 0,
        list: []
    }
});

export const mutations = {
    increment(state) {
        state.article++;
    }
};
