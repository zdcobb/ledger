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
                    console.log('Response data: ', data);
                    this.$store.commit('setUser', data);
                    console.log(`Welcome, ${this.user.username}! You're all logged in now.`);
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

<template>
    <div class="login-body">
        <div class="login-box">
            <div class="login-header">
                <span>Hey there!</span>
            </div>

            <template v-if="!user">
                <div class="login-inputs-group" v-if="!user">
                    <input class="input" type="text" placeholder="Who are you?" v-model="this.username">
                    <input class="input" type="password" placeholder="password" v-model="this.password">
                </div>
                <button class="btn" type="submit" @click="loginClicked" :disabled="this.debounced">log in</button>
            </template>

            <div v-if="user">
                <p>You're all logged in now as {{user.username}}. Redirecting...</p>
            </div>
        </div>
    </div>
</template>

<style>
.login-body {
    display: flex;
    justify-content: center;
    height: 100%;
}
.login-box {
    /* background-color: #9CB8D1; */
    background-color: #F9F9F9;
    padding: 25px 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
}
.login-header {
    margin: 25px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 25pt;
    font-weight: 1000;
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

</style>
