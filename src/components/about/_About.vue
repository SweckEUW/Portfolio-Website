<template>
	<div class="About">
		<h1>[About Me]</h1>

		<img :src="getImage('me.jpg')" alt="" class="ab-profile">
		<p>
			Hi, my name is Tim. I’m a Technical Director and Pipeline Developer with a passion for software engineering and the art of animation. 
			I have a background in computer science and always seek to advance creative technology to suit the needs of filmmakers. I recently graduated from Filmakademie Baden-Wuerttemberg with my diploma in Technical Directing.
			You’ll find my newest projects on here and I’ll regularly update this blog with new things I learned. If you have any questions, requests or just want to have a beer with me, feel free to get in touch.
		</p>

		<Timeline v-for="timeline in about.timelines" :key="timeline.title" :timeline="timeline"/>
	</div>
</template>

<script>
import Timeline from '@/components/about/Timeline.vue';

import about from "@/data/about.js"

export default {
	components: {Timeline},
	data: ()=>({
        about: about
    }),
	methods: {
        getImage(image){
			return new URL(`/src/assets/about/${image}`, import.meta.url);
		}
    }
}
</script>

<style scoped>
.About{
	width: 50%;
	margin-left: auto;
	margin-right: auto;
}
.ab-profile{
	width: 100%;
}
</style>
