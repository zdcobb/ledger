<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.main {
  height: 100%;
}
.navbar {
  display: flex;
  padding: 10px 15px;
  color: #666;
}
.user-group {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.user-group a {
  text-decoration: none;
}
.username {
  margin: 10px;
}
.fa-user-circle {
  font-size: 24pt;
}
.fa-bars {
  font-size: 20pt;
}
</style>
<template>
  <div class="main">
    <div class="navbar">
      <div class="menu">
        <i class="fas fa-bars"></i>
      </div>
      <div class="user-group">
          <div class="username">
            <span v-if="user">{{user.username}}</span>
            <router-link to="/login" v-else>log in</router-link>
          </div>
          <i class="fas fa-user-circle" @click="clickUser('hello')"></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import home from './views/Home';
import login from './views/Login';

export default {
  name: 'App',
  computed: mapState([
    'user'
  ]),
  components: {
    home,
    login
  },
  methods: {
    clickUser(param) {
      console.log(`User clicked: ${param}`)
    }
  }
}
</script>
