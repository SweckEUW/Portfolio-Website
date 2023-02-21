<template>
	<div class="About">
		<h1>[About Me]</h1>

		<div class="ab-profile">
			<!-- <img :src="getImage('me.jpg')" alt="" class="ab-profile"> -->
			<p>{{ about.description }}</p>
		</div>
		
		<div class="ab-skills">
			<div class="ab-skills-title">Coding Skills</div>
			<p>Experienced</p>
			<span>{{ about.skills.coding.experienced }}</span>
			<p>Knolwedge in</p> 
			<span>{{ about.skills.coding.knowledge }}</span>

			<div class="ab-skills-title">Production Software</div>
			<p>Experienced</p>
			<span>{{ about.skills.tools.experienced }}</span>
			<p>Knolwedge in</p>
			<span>{{ about.skills.tools.knowledge }}</span>
		</div>

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
    },
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
}
</script>

<style scoped>
.About{
	width: 70%;
	margin-left: auto;
	margin-right: auto;
}
.ab-profile{
	width: 100%;
}
.ab-skills{
	margin-bottom: 50px;
}
.ab-skills-title{
	font-size: 22px;
	margin-bottom: 15px;
	font-weight: bolder;
}
.ab-skills-title:nth-of-type(2){
	margin-top: 30px;
}
.ab-skills p{
	margin-bottom: 5px;
}
</style>
