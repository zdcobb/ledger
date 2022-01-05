<script>
let _ = require('lodash');
const SERVER_URL = 'localhost';
const PORT = 3000;

export default {
    name: 'login',
    data() {
        return {
            user: '',
            password: '',
            logged: false
        }
    },
    methods: {
        loginClicked: _.debounce(function() {
            // remove before merge
            console.log(`I've been clicked at ${Date.now()}! Current user is ${this.user}`);
            this.postLogin(this.user, this.password);
        }, 500),
        postLogin () {
            // remove before merge
            console.log('POSTING LOGGIN INFO');

            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: this.user,
                    password: this.password
                })
                // body: JSON.stringify({ title: "Vue POST Request Example" })
            };
            fetch(`http://${SERVER_URL}:${PORT}/login`, options)
                .then(response => response.json())
                .then(data => {
                    console.log('Response data: ', data);
                    console.log(`Welcome, ${this.user}! You're all logged in now.`);
                    this.logged = true;
                });
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

            <div class="login-inputs-group">
                <input class="input" type="text" placeholder="Who are you?" v-model="this.user">
                <input class="input" type="password" placeholder="password" v-model="this.password">
            </div>

            <button class="btn" type="submit" @click="loginClicked">log in</button>
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

</style>
