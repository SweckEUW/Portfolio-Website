<template>
	<div class="SingleProjectHeader">
		<h1>[{{project.title}}]</h1>            
		<video :src="getHeaderVideo()" autoplay muted loop/>
	</div>
</template>

<script>
export default {
	props: ['project'],
	methods: {
		getHeaderVideo(){
			return new URL(`/src/assets/projects/${this.project.folder}/videos/header.webm`, import.meta.url);
		}
	}
};
</script>

<style scoped>
.SingleProjectHeader{
	width: 90%;
	margin: auto;
	margin-top: 140px;
	position: relative;
}
.SingleProjectHeader video{
	width: calc(100% + 20px);
	margin-left: -10px;
	max-height: 300px;
	min-height: 250px;
	object-fit: cover;
	filter: blur(3px) drop-shadow(0 0 20px rgba(0,0,0,0.2));
}
.SingleProjectHeader h1{
	position: absolute;
	width: 100%;
	text-align: center;
	font-size: 5vw;
	color: white;
	z-index: 1;
	bottom: 50px;
}
</style>
