<template>
	<div class="SingleProjectHeader">
		<h1>{{project.title}}</h1>            
		<video :src="headerVideo" autoplay muted loop/>
	</div>
</template>

<script>
export default {
	props: ['project'],
    data: ()=>({
		headerVideo: null
    }),
	mounted(){
		this.headerVideo = new URL(`/src/assets/projects/${this.project.title}/videos/header.webm`, import.meta.url);
	}
};
</script>

<style scoped>
.SingleProjectHeader video{
	width: calc(100% + 20px);
	max-height: 300px;
	min-height: 250px;
	object-fit: cover;
	filter: blur(2px);
	margin-left: -10px;
}
.SingleProjectHeader h1{
	position: absolute;
	width: 100%;
	text-align: center;
	font-size: 20px;
	color: white;
	z-index: 1;
}
</style>
