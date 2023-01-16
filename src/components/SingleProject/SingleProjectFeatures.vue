<template>
	<div class="SingleProjectFeatures">
		
		<h1>[Features]</h1>

		<div class="spf-element" v-for="(feature,i) in project.features" :key="i">
			<h1>{{feature.title}}</h1>
			<video v-if="feature.video" :src="getFeatureVideo(feature.video)" muted loop/>
			<div>{{feature.description}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project'],
	methods: {
		getFeatureVideo(url){
			return new URL(`/src/assets/projects/${this.project.folder}/videos/${url}`, import.meta.url);
		},
		isInViewport(element) {
			const rect = element.getBoundingClientRect();
			return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		}
	},
	mounted(){
		window.onscroll = () => {
            let elements = document.getElementsByClassName("SingleProjectFeatures")[0].getElementsByTagName("video");
            for (let i = 0; elements.length > i; i++)
				this.isInViewport(elements[i]) ? elements[i].play() : elements[i].pause(); 
        };
	}
};
</script>

<style scoped>
.SingleProjectFeatures{
	width: 90%;
	margin: auto;
	margin-top: 40px;
}
.spf-element:first-of-type{
	margin-top: 40px;
}
.spf-element{
	position: relative;
	margin: 100px 0px;
	display: flex;
	flex-direction: column;
}
.spf-element:nth-child(even){
	align-items: flex-end;
}
.spf-element video{
	text-align: left;
	width: 70%;
	object-fit: cover;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 80px;
	margin: 0 100px;
}
.spf-element h1{
	position: absolute;
	top: -40px;
	text-shadow: 0px 0px 5px black, 0px 0px 10px black;
	font-size: 5vw;
	margin: 0 50px;
}
.spf-element div{
	text-align: center;
	margin-top: 10px;
	font-size: 26px;
}
</style>
