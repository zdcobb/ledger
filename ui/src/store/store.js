import { createStore } from 'vuex';

export default new createStore({
    state() {
        return {
            user: undefined
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    }
});
