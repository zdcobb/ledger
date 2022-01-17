import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'

const store = new createStore({
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

const app = createApp(App)
    .use(store)
    .mount('#app');
