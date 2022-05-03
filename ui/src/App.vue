<style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
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
  display: flex;
  flex-flow: column;
  align-items: stretch;
}
</style>
<template>
<div class="main">
  <navbar></navbar>
  <router-view></router-view>
</div>
</template>

<script>
import { mapState } from 'vuex';
import navbar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    navbar
  },
  computed: mapState([
    'user'
  ]),
  methods: {
    clickUser(param) {
      console.log(`User clicked: ${param}`)
    }
  }
}
</script>
