<style>
.home {
    margin: auto;
}
header {
    font-size: 48pt;
}
footer {
    font-size: 14px;
    text-align: center;
    position: absolute;
    bottom: 0;
    margin: auto;
    width: 100%;
    padding: 5px 0;
}
</style>
<template>
    <div class="home">
        <header>Ledger</header>
        <router-link to="/page">Start a new page</router-link>
        <footer>An app created by Zachary Cobb</footer>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Home',
        computed: mapState([
            'user'
        ])
    };
</script>
