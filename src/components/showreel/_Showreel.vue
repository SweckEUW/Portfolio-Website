<template>
	<div>
		<h1>[Showreel]</h1>
		<VideoWithButton :videoPath="getConfig().showreel" :posterPath="getConfig().posterPath"/>
	</div>
</template>

<script>
import VideoWithButton from '@/components/shared/VideoWithButton.vue';
import { getConfig } from '@/data/SiteConfig.js';

export default {
	components: { VideoWithButton },
	methods: {
		getConfig,
		getMedia(media){
			return new URL(`/src/assets/home/${media}`, import.meta.url);
		},
	},
	async mounted() {
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
