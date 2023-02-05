<template>
	<div class="Home">

		<!-- Header -->
		<div class="ho-header">
			<div class="ho-container">
				<h1>Simon Weck</h1>
				<h1 class="ho-subheader">Pipeline TD & Graphics Programmer</h1>
			</div>
			<video :src="getHeaderVideo()" muted loop autoplay/>
		</div>

		<!-- Work -->
		<ProjectList/>
	</div>
</template>

<script>
import ProjectList from '@/components/shared/ProjectList.vue';

export default {
	components: {ProjectList},
	methods: {
		getHeaderVideo(){
			return new URL(`/src/assets/home/header.mp4`, import.meta.url);
		}
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
	margin-bottom: 200px;
}
video{
	margin-left: -1%;
	width: 101%;
	height: 101%;
	object-fit: cover;
	filter: blur(3px);
	z-index: -1;
	user-select: none;
}
.ho-container{
	position: absolute;
	top: 45%;
	width: 100%;
}
.ho-subheader{
	font-size: 2vw;
}
</style>
