<template>
	<div>
		<h1>[Showreel]</h1>
		<VideoWithButton :videoPath="'home/Reel.webm'" :posterPath="'ReelPoster.png'"/>
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
