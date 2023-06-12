<template>
	<!-- App header -->
	<AppHeader/>

	<!-- Render active component contents with vue transition -->
	<router-view v-slot="{ Component }">
		<transition :name="firstTime ? '' : 'fade'" mode="out-in">
			<component :is="Component" class="Page"/>
		</transition>
	</router-view>

	<!-- App footer -->
	<AppFooter/>
</template>

<script>
import AppHeader from './components/shared/AppHeader.vue';
import AppFooter from './components/shared/AppFooter.vue';

export default {
	components: {AppHeader,AppFooter},
	data: ()=>({
        firstTime: true
    }),
	mounted(){
		let path = localStorage.getItem('path');
		if(path){
			localStorage.removeItem('path');
			this.$router.push(path);
		}

		setTimeout(() => {
			this.firstTime = false;
		}, 0);
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100&display=swap');

html{
	scroll-behavior: smooth;
}

body{
	font-family: Overpass, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	scrollbar-width: none;
	margin: 0;
}
.Page{
	margin-top: 200px;
	padding-bottom: 100px;
	min-height: calc(100vh - 300px - 80px);
}
h1{
    text-align: center;
    color: white;
    font-size: 5vw;
    text-shadow: 0px 0px 5px rgba(0,0,0,0.6);
	margin: 0;
	margin-bottom: 50px;
}
a{
	text-decoration: none;
	color: white;
}


/* Transition Animations */
.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}
.fade-leave-active {
	animation: going 0.4s;
}
@keyframes going {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}
	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
.fade2-enter-active, .fade2-leave-active {
  transition: opacity 0.5s ease;
}

.fade2-enter-from, .fade2-leave-to {
  opacity: 0;
}

/*DESKTOP SMALL*/
@media (width <= 1200px) { 
    h1{
        font-size: 100px;
    }
}

/*MOBILE*/
@media (width <= 900px){
	.Page{
		margin-top: 130px;
		padding-bottom: 30px;
	}
	h1{
		font-size: 50px;
		margin-bottom: 20px;
	}
}
</style>
