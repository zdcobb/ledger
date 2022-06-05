<style>
.login-body {
    display: flex;
    flex-flow: column;
    /* justify-content: center;
    align-items: center; */
    margin: 25px auto;
}
.login-box {
    background-color: #F9F9F9;
    box-shadow: 0 0 5px #999;
    padding: 10px 25px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 25px;
}
.login-header {
    margin-top: 10px;
    font-size: 36pt;
    font-family: 'Courgette';
	color: #42a5f5;
}
.login-inputs-group {
    margin: 15px 10px;
    display: flex;
    flex-flow: column;
}
.btn {
    background-color: #42a5f5;
    color: white;
    margin: 20px 0 0 0;
}
.btn:disabled {
    background-color: grey;
}
.help-row {
    display: flex;
    justify-content: space-between;
    margin: 10px;
}
.help-link {
    font-size: 10pt;
    color: darkblue;
    font-weight: 800;
}
.back-link {
    margin: 10px;
}

</style>
<template>
    <div class="login-body">
        <div class="login-box">
            <div class="login-header">
                <span>Ledger</span>
            </div>

            <div v-if="user">
                <p>You're currently logged in as {{user.username}}.</p>
                <button class="btn" type="submit" @click="logoutClicked" :disabled="this.debounced">log out</button>
            </div>

            <template v-if="!user">
                <div class="login-inputs-group">
                    <input class="input" type="text" placeholder="Who are you?" v-model="this.username">
                    <input class="input" type="password" placeholder="password" v-model="this.password">
                    <button class="btn" type="submit" @click="loginClicked" :disabled="this.debounced">log in</button>
                </div>
                <div class="help-row">
                    <span class="help-link">New here?</span>
                    <span class="help-link">Forgot?</span>
                </div>
            </template>
        </div>

        <div class="back-link">
            <span @click="backClicked">go back</span>
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
        backClicked() {
            this.$router.go(-1)
        },
        loginClicked() {
            this.debounce()
            this.postLogin(this.username, this.password)
        },
        logoutClicked() {
            this.$store.commit('setUser', undefined)
        },
        postLogin (username, password) {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
            fetch(`http://${SERVER_URL}:${PORT}/login`, options)
                .then(response => response.json())
                .then(data => {
                    this.$store.commit('setUser', data)
                    this.$router.push({path: '/'})
                });
        },
        debounce () {
            this.debounced = true
            setTimeout(() => {
                this.debounced = false
            }, 5000)
        }
    }
}
</script>
