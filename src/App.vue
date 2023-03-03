<template>
	<transition name="fadeStart" appear>
		<div>
			<!-- App header -->
			<AppHeader/>

			<!-- Render active component contents with vue transition -->
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" class="Page"/>
				</transition>
			</router-view>

			<!-- App footer -->
			<AppFooter/>
		</div>
	</transition>
</template>

<script>
import AppHeader from './components/shared/AppHeader.vue';
import AppFooter from './components/shared/AppFooter.vue';

export default {
	components: {AppHeader,AppFooter},
	mounted(){
		let path = localStorage.getItem('path');
		localStorage.setItem('path', path);
		if(path){
			localStorage.removeItem('path');
			this.$router.push(path);
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@100&display=swap');

body{
	font-family: Overpass, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	scrollbar-width: none;
	margin: 0;
	overflow-x: hidden;
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
/*DESKTOP SMALL*/
@media (max-width: 1200px) { 
    h1{
        font-size: 100px;
    }
}
  
/*MOBILE*/
@media (max-device-width: 900px){
    h1{
        font-size: 50px;
    }
}


.fadeStart-enter-active, .fadeStart-leave-active {
  transition: 1s opacity 0s ease;
}

.fadeStart-enter-from,.fadeStart-leave-to {
  opacity: 0;
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
