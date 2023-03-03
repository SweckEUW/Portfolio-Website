<template>
	<div>
		<h1>[Showreel]</h1>
		<VideoWithButton :videoPath="'/src/assets/home/Reel.webm'" :posterPath="'/src/assets/home/ReelPoster.png'"/>
	</div>
</template>

<script>
import VideoWithButton from '@/components/shared/VideoWithButton.vue';

export default {
	components: {VideoWithButton},
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
};
</script>

<style scoped>
div{
    margin: auto;
	margin-top: 100px;
	width: 90%;
}
</style>
