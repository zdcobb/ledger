<style>
.login-body {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
}
.login-box {
    background-color: #F9F9F9;
    padding: 10px 20px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
}
.login-header {
    font-size: 36pt;
    color: #48A8FD;
}
.login-inputs-group {
    margin: 10px;
    display: flex;
    flex-flow: column;
}
.btn {
    background-color: #48A8FD;
    color: white;
}
.btn:disabled {
    background-color: grey;
}
.back-link {
    margin: 10px;
}

</style>
<template>
    <div class="login-body">
        <div class="login-box">
            <div class="login-header">
                <span>Welcome!</span>
            </div>

            <div v-if="user">
                <p>You're currently logged in as {{user.username}}.</p>
                <button class="btn" type="submit" @click="logoutClicked" :disabled="this.debounced">log out</button>
            </div>

            <template v-if="!user">
                <div class="login-inputs-group">
                    <input class="input" type="text" placeholder="Who are you?" v-model="this.username">
                    <input class="input" type="password" placeholder="password" v-model="this.password">
                </div>
                <button class="btn" type="submit" @click="loginClicked" :disabled="this.debounced">log in</button>
            </template>
        </div>

        <div class="back-link">
            <router-link to="/">back</router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
const SERVER_URL = 'localhost';
const PORT = 3000;

export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
            debounced: false
        }
    },
    computed: mapState([
        'user',
        'setUser'
    ]),
    methods: {
        loginClicked() {
            this.debounce();
            this.postLogin(this.username, this.password);
        },
        logoutClicked() {
            this.$store.commit('setUser', undefined);
        },
        postLogin () {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            };
            fetch(`http://${SERVER_URL}:${PORT}/login`, options)
                .then(response => response.json())
                .then(data => {
                    this.$store.commit('setUser', data);
                    this.$router.push({path: '/'});
                });
        },
        debounce () {
            this.debounced = true;
            setTimeout(() => {
                this.debounced = false;
            }, 5000);
        }
    }
}
</script>
