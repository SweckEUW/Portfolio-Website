<template>
	<div class="SingleProjectFeatures">
		
		<VideoWithButton class="spf-video" :videoPath="'projects/' + project.folder + '/videos/Trailer.webm'" :muted="false" :title="project.trailerTitle" v-if="!project.noTrailer"/>

		<div v-for="feature in project.features" :key="feature.media" class="spf-feature">
			<video v-if="feature.media.includes('.webm')  || feature.media.includes('.mp4')" :src="getMedia(feature.media)" class="spf-feature-media" muted autoplay loop/>
			<img v-if="feature.media.includes('.webp')  || feature.media.includes('.jpg') || feature.media.includes('.png')"  :src="getMedia(feature.media)"  class="spf-feature-media" alt="">
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
.spf-feature:nth-of-type(2){
	flex-direction: row-reverse;
}
.spf-feature-description{
	width: 40%;
	margin: 30px;
	font-size: 20px;
}
.spf-feature-media{
	width: 60%;
	max-height: 60vh;
	object-fit: contain;
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

/*MOBILE*/
@media (width <= 900px){
	.spf-video{
		width: 100%;
		height: 50vh;
		margin-bottom: 60px;
	}
	.spf-feature{
		flex-direction: column !important; 
		margin-bottom: 30px;
	}
	.spf-feature-media{
		width: 100%;
		height: 50vh;
		object-fit: cover;
	}
	.spf-feature-description{
		width: 100%;
		font-size: 18px;
		margin-top: 10px;
	}
	.spf-headerImages{
		flex-direction: column !important;
		margin-bottom: 20px;
	}
	.spf-headerImages img{
		width: 100%;
		height: 50vh;
		margin-bottom: 10px;
	}
}
</style>
