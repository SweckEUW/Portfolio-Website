<template>
	<div class="SingleProjectHeader" >
		<div class="sph-image" :style="{backgroundImage: 'url(' + getHeaderContent() + ')' }"/>
		<transition name="appearFade" appear>
			<div class="sph-overlay">
				<h1>{{project.title}}</h1>    
				<h2>{{project.category}}</h2>    
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: ['project'],
	methods: {
		getHeaderContent(){
			return new URL(`/src/assets/projects/${this.project.folder}/pictures/${this.project.headerImage}`, import.meta.url);
		}
	}
};
</script>

<style scoped>
.SingleProjectHeader{
	width: 100vw;
	height: 100vh;
}
.sph-image{
	width: 100%;
	height: 100%;
	filter: blur(3px) drop-shadow(0 0 20px rgba(0,0,0,0.2)) brightness(0.7);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.sph-overlay{
	position: absolute;
	color: white;
	z-index: 1;
	bottom: 40px;
	left: 40px;
	filter: none;
}
.SingleProjectHeader h1, .SingleProjectHeader h2{
	text-align: left;
	margin: 0px;
}
.SingleProjectHeader h1{
	font-size: 5vw;
	font-weight: bolder;
}
.SingleProjectHeader h2{
	font-size: 3vw;
	font-weight: lighter;
	margin-left: 20px;
	line-height: 30px;
	filter: drop-shadow(0 0 5px rgba(0,0,0,0.4));
}

.appearFade-enter-active, .appearFade-leave-active {
  transition: 1s opacity .5s ease;
}

.appearFade-enter-from,.appearFade-leave-to {
  opacity: 0;
}

/*MOBILE*/
@media (width <= 900px){
	.sph-overlay{
		left: 10px;
		width: 90%;
	}
	.SingleProjectHeader h1{
		font-size: 32px;
	}
	.SingleProjectHeader h2{
		font-size: 25px;
		margin-left: 10px;
	}
}
</style>
