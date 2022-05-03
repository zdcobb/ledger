<style>
.navbar {
    display: flex;
	justify-content: space-between;
	align-items: center;
    padding: 10px;
    color: #666;
}
.logo {
	margin-left: 5px;
    font-family: 'Courgette';
	font-size: 28pt;
	color: #42a5f5;
	/* position: fixed; */
}
i {
    padding: 10px;
    font-size: 20pt;
}
.dropdown {
    display: flex;
    flex-flow: column;
    color: #666;
    overflow: hidden;
	padding: 0 10px;
	position: fixed;
}
.dropdown-group {
	display: flex;
	align-items: center;
}
.user-group a {
    text-decoration: none;
}
.username {
    margin: 10px;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

</style>

<template>
<div>
    <div class="navbar">
        <div class="menu">
            <i class="fas fa-bars" @click="clickMenu"></i>
        </div>
        <!-- <div class="logo">
            <span>Ledger</span>
        </div> -->
		<div class="user-group">
			<i class="fas fa-user-circle" @click="clickUser" v-bind:title="this.user ? this.user.username : 'login'"></i>
		</div>
    </div>
    <!-- <div class="dropdown">
        <transition name="slide">
            <div class="dropdown-items" v-if="menuOpen">
                <div class="dropdown-group">
                    <i class="fas fa-user-circle" @click="clickUser" v-bind:title="this.user ? this.user.username : 'login'"></i>
                </div>
            </div>
        </transition>
    </div> -->
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'App',
    computed: mapState([
        'user'
    ]),
    data () {
        return {
            menuOpen: false
        }
    },
    methods: {
        clickMenu() {
            console.log('Menu clicked!');
            this.menuOpen = !this.menuOpen;
            console.log(this.menuOpen);
        },
        clickUser() {
            console.log('User clicked!');
            if (!this.user) this.$router.push({path: '/login'});
        }
    }
}
</script>
