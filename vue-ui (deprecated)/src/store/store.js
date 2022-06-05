import { createStore } from 'vuex';
const SERVER_URL = 'localhost';
const PORT = 3000;

export default new createStore({
    state() {
        return {
            user: undefined,
            pages: [],
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        fetchPages(state) {
            state.pages = [
                {
                    id: 1, 
                    name: 'Zach\'s first page', 
                    transactions: []
                }
            ]
            // fetch(`http://${SERVER_URL}:${PORT}/pages/`)
            //     .then(response => response.json())
            //     .then(data => {
            //         this.$store.commit('setUser', data)
            //         this.$router.push({path: '/'})
            //     });
        },
        addPage(state) {
            state.pages.push({
                id: 1,
                name: 'Page 1',
                groups: []
            })
        }
    }
});
