<template>
	<div class="Home">

		<!-- Loadingscreen -->
		<transition name="fade2">
<<<<<<< HEAD
			<div v-show="loadingscreenVisible" class="inactive-blocker">
				<div class="spinner"/>
			</div>
=======
			<div v-show="loadingscreenVisible" class="spinner"/>
>>>>>>> dev
		</transition>
		
		<!-- Header -->
		<transition name="appearFade" appear>
			<div class="ho-header">
				<div class="ho-container">
					<h1>Simon Weck</h1>
<<<<<<< HEAD
					<h1 class="ho-subheader">Pipeline TD</h1>
				</div>
				
				<video :src="getMedia('header.webm')" muted loop autoplay/>
=======
					<h1 class="ho-subheader">{{ getConfig().subheader }}</h1>
				</div>
				
				<video ref="headerVideo" :src="getMedia(getConfig().headerVideo)" muted loop autoplay/>
>>>>>>> dev
			</div>
		</transition>

		<!-- Showreel -->
<<<<<<< HEAD
		<div class="ho-reel">
			<h1>[Showreel]</h1>
			<VideoWithButton class="ho-video" :videoPath="'home/Reel.webm'" :posterPath="'home/ReelPoster.png'" :id="'homeVideo'"/>
		</div>
=======
		<!-- <div class="ho-reel">
			<h1>[Showreel]</h1>
			<VideoWithButton class="ho-video" :videoPath="getConfig().showreel" :posterPath="getConfig().posterPath" :id="'homeVideo'"/>
		</div> -->
>>>>>>> dev

		<!-- Work -->
		<div class="ho-work">
			<h1>[My Work]</h1>
<<<<<<< HEAD
			<ProjectList :displayFilter="false" :projectsSelection="['Mission Meltdown', 'Seacarus', 'Oriono', 'AI Image Editor Toolkit']"/>
=======
				<ProjectList :displayFilter="false" :projectsSelection="getConfig().homeProjects"/>

			<!-- Button zu weiteren Projekten -->
			<div style="text-align:center; margin-top: 32px;">
				<button @click="$router.push('/work')" class="more-projects-btn">Weitere Projekte ansehen</button>
			</div>
>>>>>>> dev
		</div>
	</div>
</template>

<<<<<<< HEAD
<script>
import VideoWithButton from '@/components/shared/VideoWithButton.vue';
import ProjectList from '@/components/work/ProjectList.vue';

export default {
	components: {ProjectList, VideoWithButton},
	data: ()=>({
        loadingscreenVisible: true
    }),
	methods: {
		getMedia(media){
			return new URL(`/src/assets/home/${media}`, import.meta.url);
		},
	},
	mounted(){
		setTimeout(() => { 
			let video = document.getElementById("homeVideo");
			video.addEventListener('canplaythrough', () => {
				setTimeout(() => {
					this.loadingscreenVisible = false;
				}, 0);
			}, false);
		}, 0);
	}
};
=======
<script setup>
import { ref, onMounted } from 'vue';
import VideoWithButton from '@/components/shared/VideoWithButton.vue';
import ProjectList from '@/components/work/ProjectList.vue';
import { getConfig } from '@/data/SiteConfig.js';

const loadingscreenVisible = ref(true);
const headerVideo = ref(null);

function getMedia(media) {
	return new URL(`/src/assets/${media}`, import.meta.url);
}

onMounted(() => {
	headerVideo.value.addEventListener('canplay', () => {
		loadingscreenVisible.value = false;
	}, { once: true });
});
>>>>>>> dev
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

.appearFade-enter-active, .appearFade-leave-active {
  transition: 1s opacity 0.2s ease;
}
.appearFade-enter-from,.appearFade-leave-to {
  opacity: 0;
}

/* Spinner */
<<<<<<< HEAD
.inactive-blocker{
  position: absolute;
  z-index:99;
  top:0;
  left:0;
  height:100%;
  width:100%;
  background-color:white;
}
.spinner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50%;
  background-color: #6366F1;
=======
.spinner{
  position: fixed;
  z-index: 99;
  bottom: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
>>>>>>> dev
}
.spinner *{
  pointer-events: none;
}
.spinner::before{
	content:'';
	position:absolute;
	top:50%;
	left:50%;
	height:100%;
	width: 100%;
	max-height: 50px; 
	max-width: 50px;
	border-radius: 50%;
	border: 2px solid #000000;
	border-top: 2px solid #ffffff;
	background-color: none;
	animation: spin 2s linear infinite;
}
@keyframes spin{
  0%  {transform: translate(-50%,-50%) rotate(0deg)}
  100%{transform: translate(-50%,-50%) rotate(360deg)}
}
.spinner:hover{
<<<<<<< HEAD
  background-color: #6366F1;
=======
  background-color: #96144d;
}

.more-projects-btn {
    cursor: pointer;
    display: inline-block;
    padding: 20px 30px;
    border: 1px solid white;
    margin-bottom: 20px;
    transition: .2s background ease, .2s color ease;
    color: white;
    font-size: 20px;
    filter: drop-shadow(0px 0px 5px black);
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
}
.more-projects-btn:hover {
	background: black;
    color: white;
>>>>>>> dev
}

@media (width <= 900px){
	.ho-header{
		margin-bottom: 50px;
	}
	.ho-subheader{
		font-size: 24px;
	}
	.ho-video{
		height: 50vh;
		margin-bottom: 50px;
	}
}
</style>
