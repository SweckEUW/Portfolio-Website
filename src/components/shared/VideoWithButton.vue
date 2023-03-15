<template>
	<div class="spf-video">
		<div v-if="title && !videoStarted" class="spf-title">{{ title }}</div>
		<div v-if="!videoStarted" @click="playVideo()" class="spf-video-background"/>
		<img v-if="!videoStarted" @click="playVideo()" :src="getIcon()" alt="" class="spf-video-button">
		<video :src="getMedia(videoPath)" :poster="posterPath ? getMedia(posterPath) : ''" ref="trailer" :muted="muted"/>
	</div>
</template>

<script>
export default {
	props: ['videoPath','posterPath','muted','title'],
	data: ()=>({
       videoStarted: false
    }),
	methods: {
		getIcon(){
			return new URL(`/src/assets/icons/play.svg`, import.meta.url);
		},
		getMedia(media){
			return new URL(`/src/assets/${media}`, import.meta.url);
		},
		playVideo(){
			this.videoStarted = true;
			setTimeout(() => {
				this.$refs.trailer.play();
				this.$refs.trailer.setAttribute("controls","controls");
			}, 0);
		}
	}
};
</script>

<style scoped>
.spf-video{
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: auto;
	position: relative;
	margin-bottom: 100px;
}
.spf-title{
	position: absolute;
	pointer-events: none;
	font-size: 50px;
	color: white;
	top: 30%;
	width: 100%;
	text-align: center;
	text-shadow: 0px 0px 5px rgba(0,0,0,0.6);
	z-index: 3;
	font-weight: bold;
}
.spf-video-button{
	position: absolute;
	cursor: pointer;
	transition: .3s transform ease;
	z-index: 3;
	width: 100px;
	height: 100px;
	left: calc(50% - 50px);
	top: calc(50% - 50px);
	filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
}
.spf-video-background:hover + .spf-video-button, .spf-video-button:hover{
	transform: scale(1.2);
}
.spf-video-background{
	z-index: 2;
	position: absolute;
	width: 100%;
	height: calc(100% - 5px);
	background: rgba(0, 0, 0, 0.5);
	cursor: pointer;
}
.spf-video video{
	width: 100%;
	height: 100%;
	object-fit: cover;
	cursor: pointer;
}

/*MOBILE*/
@media (width <= 900px){
	.spf-title{
		display: none;
	}
}

</style>
