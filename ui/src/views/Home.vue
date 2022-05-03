<style>
.home {
    margin: 0 auto;
    padding: 0 15px;
    min-width: 50%;
}
header {
    font-family: 'Courgette';
    font-size: 36pt;
	color: #42a5f5;
}
ul {
    list-style: none;
    padding: 10px 0;
}
footer {
    font-size: 14px;
    text-align: center;
    position: absolute;
    bottom: 0;
    margin: auto;
    padding: 5px 0;
}
.pages-header, 
.page {
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin: 10px;
    text-align: center;
}
.pages-header {
    padding: 5px 20px;
}
.page {
    background-color: #c3c3c3;
    border-radius: 15px;
    padding: 15px 20px;
}
.left {
    text-align: left;
}
.right {
    text-align: right;
}
.add-page {
    margin: 20px;
}
</style>

<template>
<div class="home">
    <header>Pages</header>
    <div class="pages">
        <ul class="pages-list">
            <li class="pages-header">
                <span class="page-prop left">id</span>
                <span class="page-prop">name</span>
                <span class="page-prop right">transactions</span>
            </li>
            <li class="page" v-for="page in pages" :key="page.id">
                <span class="page-prop left">{{ page.id }}</span>
                <span class="page-prop">{{ page.name }}</span>
                <span class="page-prop right">{{page.transactions.length}}</span>
            </li>
            <li class="page" v-if="pages.length < 1">
                <span>You don't have any pages yet</span>
            </li>
            <div class="add-page">
                <router-link to="/page">Start a new one</router-link>
            </div>
        </ul>
    </div>
    <footer>An app created by Zachary Cobb</footer>
</div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'Home',
        computed: mapState([
            'user',
            'pages'
        ]),
        created() {
            console.log('Fetching pages...')
            this.$store.commit('fetchPages');
            console.log(this.pages);
        },
        methods: {
            addPage() {
                this.$store.commit('addPage')
            }
        }
    };
</script>
