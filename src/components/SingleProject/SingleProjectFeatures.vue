<template>
	<div class="SingleProjectFeatures">
		
		<VideoWithButton class="spf-video" :videoPath="'projects/' + project.folder + '/videos/Trailer.webm'" :muted="false" :title="project.trailerTitle" v-if="!project.noTrailer"/>

		<div v-for="feature in project.features" :key="feature.media" class="spf-feature">
			<video v-if="feature.media.includes('.webm')  || feature.media.includes('.mp4')" :src="getMedia(feature.media)" class="spf-feature-media" muted autoplay loop/>
			<img v-if="feature.media.includes('.webp')  || feature.media.includes('.jpg') || feature.media.includes('.png')"  :src="getMedia(feature.media)"  class="spf-feature-media" alt="">
			<div class="spf-feature-description">{{ feature.description }}</div>
		</div>
		
		<div class="spf-headerImages">
			<div class="spf-headerImages-container" v-for="image in project.headerImages" :key="image" >
				<img class="spf-headerImages-image" :src="getMedia('pictures/'+image)" alt="" @click="openImage(image)">
			</div>
			
		</div>

		<transition name="fade" mode="out-in">
			<div class="sp-enlarged" v-show="enlargeImage" @click="closeImage()">
				<div class="close" @click="closeImage()"/>
				<img :src="getMedia('pictures/'+enlargedImagePath)" alt="">
			</div>
		</transition>

	</div>
</template>

<script>
import VideoWithButton from '@/components/shared/VideoWithButton.vue';

export default {
	components: {VideoWithButton},
	props: ['project'],
	data: ()=>({
        enlargeImage: false,
		enlargedImagePath: ""
    }),
	methods: {
		getMedia(media){
			return new URL(`/src/assets/projects/${this.project.folder}/${media}`, import.meta.url);
		},
		openImage(image){
			this.enlargedImagePath = image;
			this.enlargeImage = true;

			var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
			document.getElementsByClassName("sp-enlarged")[0].style.top = scrollTop + "px";

			window.onscroll = function () { window.scrollTo(0, scrollTop); };
		},
		closeImage(){
			this.enlargeImage = false;
			window.onscroll = undefined;
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
.spf-headerImages-container{
	width: 33%;
	padding-right: 20px;
	cursor: pointer;
	overflow: hidden;
}
.spf-headerImages-image{
	width: 100%;
	height: 100%;
	transition: .3s transform ease;
	object-fit: cover;
}
.spf-headerImages-image:hover{
	transform: scale(1.02);
}
.spf-headerImages img:last-of-type{
	padding-right: 0px;
}

/* Pop-Up Image */
.sp-enlarged{
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 999;
	left: 0;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	justify-content: center;
    align-items: center;
}
.sp-enlarged img{
	width: 90%; 
	height: 90%; 
	object-fit: contain;
}

.close{
  position: absolute;
  right: 40px;
  top: 40px;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 4px;
  background-color: #a30000;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
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
