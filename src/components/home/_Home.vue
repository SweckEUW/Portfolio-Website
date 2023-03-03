<template>
	<div class="Home">

		<!-- Header -->
		<div class="ho-header">
			<transition name="appearFade" appear>
				<div class="ho-container">
					<h1>Simon Weck</h1>
					<h1 class="ho-subheader">Technical Director</h1>
				</div>
			</transition>
			
			<video :src="getMedia('header.webm')" muted loop autoplay/>
		</div>

		<!-- Showreel -->
		<div class="ho-reel">
			<h1>[Showreel]</h1>
			<VideoWithButton :videoPath="'/src/assets/home/Reel.webm'" :posterPath="'/src/assets/home/ReelPoster.png'"/>
		</div>

		<!-- Work -->
		<div class="ho-work">
			<h1>[My Work]</h1>
			<ProjectList :projectsSelection="['Monopoly Animation', 'AI Image Editor Toolkit', 'Universe Simulation', 'Emberpoint', 'Motile']"/>
		</div>
	</div>
</template>

<script>
import VideoWithButton from '@/components/shared/VideoWithButton.vue';
import ProjectList from '@/components/work/ProjectList.vue';

export default {
	components: {ProjectList, VideoWithButton},
	methods: {
		getMedia(media){
			return new URL(`/src/assets/home/${media}`, import.meta.url);
		},
	},
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
};
</script>

<style scoped>
.Home{
	margin-top: 0px;
}
.ho-header{
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	box-shadow: inset 0 0 1000px rgba(0, 0, 0, 0.5);
	margin-bottom: 100px;
}
.ho-header video{
	margin-left: -1%;
	width: 101%;
	height: 101%;
	object-fit: cover;
	filter: blur(3px);
	z-index: -1;
	user-select: none;
	opacity: 0.8;
}
.ho-container{
	position: absolute;
	top: 45%;
	width: 100%;
}
.ho-subheader{
	font-size: 2vw;
}
.ho-header h1{
	margin-bottom: 0;
}

/* Showreel */
.ho-reel{
	margin-bottom: 100px;
	width: 90%;
	display: block;
	margin: auto;
}

/* Work */
.ho-work h1{
	margin-bottom: 0px;
}

.appearFade-enter-active, .appearFade-leave-active {
  transition: 1s opacity .5s ease;
}

.appearFade-enter-from,.appearFade-leave-to {
  opacity: 0;
}
</style>
