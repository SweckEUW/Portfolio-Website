<template>
	<div class="SingleProjectFeatures">
		
		<VideoWithButton class="spf-video" :videoPath="'/src/assets/projects/' + this.project.folder + '/videos/Trailer.webm'" :muted="false" v-if="!project.noTrailer"/>

		<div v-for="(feature,index) in project.features" :key="feature.media" class="spf-feature" :style="{'flexDirection' : index % 2 == 0 ? 'row-reverse' : ''}">
			<video v-if="feature.media.includes('.webm')" :src="getMedia(feature.media)" class="spf-feature-media" muted autoplay loop/>
			<img v-if="feature.media.includes('.webp')"  :src="getMedia(feature.media)"  class="spf-feature-media" alt="">
			<div class="spf-feature-description">{{ feature.description }}</div>
		</div>
		
		<div class="spf-headerImages">
			<img v-for="image in project.headerImages" :key="image" :src="getMedia('pictures/'+image)" alt="">
		</div>

	</div>
</template>

<script>
import VideoWithButton from '@/components/shared/VideoWithButton.vue';

export default {
	components: {VideoWithButton},
	props: ['project'],
	methods: {
		getMedia(media){
			return new URL(`/src/assets/projects/${this.project.folder}/${media}`, import.meta.url);
		}
	}
};
</script>

<style scoped>
.SingleProjectFeatures{
	width: 90%;
	margin: auto;
}

/* Main Video */
.spf-video{
	width: 80%;
}

/* Picture/Video Features */
.spf-feature{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
}
.spf-feature-description{
	width: 40%;
	margin: 30px;
	font-size: 20px;
}
.spf-feature-media{
	width: 60%;
	max-height: 60vh;
	object-fit: cover;
}

/* 3 Images */
.spf-headerImages{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
}
.spf-headerImages img{
	width: 33%;
	padding-right: 20px;
	object-fit: cover;
}
.spf-headerImages img:last-of-type{
	padding-right: 0px;
}
</style>
