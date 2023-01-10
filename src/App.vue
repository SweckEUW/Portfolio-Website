<template>
	<div>
		<!-- App header -->
		<AppHeader/>

		<!-- Render active component contents with vue transition -->
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>

		<!-- App footer -->
		<!-- <AppFooter/> -->
	</div>
</template>

<script>
import AppHeader from './components/shared/AppHeader.vue';
import AppFooter from './components/shared/AppFooter.vue';

export default {
	components: {AppHeader,AppFooter},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100&display=swap');

html {
  scroll-behavior: smooth;
}

body {
	font-family: Overpass, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	scrollbar-width: none;
	margin: 0;
	overflow-x: hidden;
}

h1{
	margin: 0;
    text-align: center;
    color: white;
    font-size: 5vw;
    text-shadow: 0px 0px 5px rgba(0,0,0,0.6);
}

a{
	text-decoration: none;
	color: white;
}
/*DESKTOP SMALL*/
@media (max-width: 1200px) { 
    h1{
        font-size: 100px;
    }
}
  
/*MOBILE*/
@media (max-device-width: 900px){
    h1{
        font-size: 70px;
    }
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
</style>
