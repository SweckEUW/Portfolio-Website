<template>
	<div class="About">
		<h1>[About Me]</h1>

		<div class="ab-profile">
			<img :src="'/src/assets/about/me.jpg'" alt="">
			<p>{{ about.description }}</p>
		</div>
		
		<div class="ab-second">
			<div class="ab-timeline">
				<Timeline v-for="timeline in about.timelines" :key="timeline.title" :timeline="timeline"/>
			</div>

			<div class="ab-skills">
				<div class="ab-skills-title">Programming Skills</div>
				<Bar v-for="skill in about.skills.programming" :key="skill.name" :skill="skill"/>
				<div class="ab-skills-title" style="margin-top: 60px;">Production Software</div>
				<Bar v-for="skill in about.skills.software" :key="skill.name" :skill="skill"/>
			</div>
		</div>
	</div>
</template>

<script>
import Timeline from '@/components/about/Timeline.vue';
import Bar from '@/components/about/Bar.vue';

import about from "@/data/about.js"

export default {
	components: {Timeline,Bar},
	data: ()=>({
        about: about
    }),
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
}
</script>

<style scoped>
.About{
	width: 90%;
	margin-left: auto;
	margin-right: auto;
}
.ab-profile{
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 150px;
}
.ab-profile img{
	width: 60%;
	flex: 1;
	margin-right: 50px;
	max-height: 600px;
	object-fit: cover;
}
.ab-profile p{
	width: 40%;
	font-size: 22px;
	white-space: pre-line;
}

.ab-second{
	display: flex;
}
.ab-timeline{
	width: 50%;
	margin-right: 100px;
}
.ab-skills{
	width: 30%;
	margin-bottom: 50px;
	font-size: 18px;
}
.ab-skills-title{
	font-size: 22px;
	margin-bottom: 15px;
	font-weight: bolder;
}


/* Mobile */
@media (width <= 900px){
	.ab-profile{
		flex-direction: column;
		margin-bottom: 20px;
	}
	.ab-profile img{
		margin-right: 0px;
		width: 100%;
	}
	.ab-profile p{
		width: 100%;
		font-size: 18px;
	}
	.ab-second{
		flex-direction: column;
	}
	.ab-timeline{
		display: none;
	}

	.ab-skills{
		width: 90%;
		margin-bottom: 50px;
		font-size: 18px;
	}
}
</style>
