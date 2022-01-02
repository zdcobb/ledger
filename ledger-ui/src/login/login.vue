<script>

let _ = require('lodash');

export default {
    name: 'login',
    data() {
        return {
            user: '',
            password: ''
        }
    },
    methods: {
        loginClicked: _.debounce(function() {
            console.log(`I've been clicked at ${Date.now()}! Current user is ${this.user}`);
        }, 500)
    }
}
</script>

<template>
    <div class="login-body">
        <div class="login-box">
            <div class="login-header">
                <span>Hey there!</span>
            </div>

            <div class="login-inputs">
                <input class="input" type="text" placeholder="Who are you?" v-model="this.user">
                <input class="input" type="password" v-model="this.password">
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
    background-color: #CCC;
    padding: 25px 50px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
}
.login-header {
    margin: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 25pt;
}
.login-inputs {
    margin: 25px;
    display: flex;
    flex-flow: column;
}


</style>