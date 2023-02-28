<template>
	<div class="SingleProjectFeatures">
		
		<div class="spf-video">
			<video :src="getMedia('videos/trailer.webm')" muted autoplay loop/>
		</div>

		<div v-for="(feature,index) in project.features" :key="feature.media" class="spf-feature" :style="{'flexDirection' : index % 2 == 0 ? 'row-reverse' : ''}">
			<video v-if="feature.media.includes('.webm')" :src="getMedia(feature.media)" class="spf-feature-media" muted autoplay loop/>
			<img v-if="feature.media.includes('.webp')"  :src="getMedia(feature.media)"  class="spf-feature-media" alt="">
			<div class="spf-feature-description">{{ feature.description }}</div>
		</div>
		
		<div class="spf-headerImages">
			<img v-for="image in project.headerImages" :src="getMedia('pictures/'+image)" alt="">
		</div>

	</div>
</template>

<script>
export default {
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
.spf-video{
	width: 80%;
	margin: auto;
}
.spf-video video{
	width: 100%;
	margin-bottom: 100px;
}
.spf-headerImages{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
}
.spf-headerImages img{
	width: 33%;
	padding-right: 20px;
}
.spf-headerImages img:last-of-type{
	padding-right: 0px;
}

.spf-feature{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
}
.spf-feature-description{
	width: 40%;
	margin: 10px;
	font-size: 20px;
}
.spf-feature-media{
	width: 60%;
	margin: 10px;
}
</style>
