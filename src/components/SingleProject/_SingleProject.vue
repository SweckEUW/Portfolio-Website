<template>
	<div class="SingleProject">
		<SingleProjectHeader :project="project"/>
		<SingleProjectInformation :project="project"/>
		<SingleProjectFeatures :project="project"/>
	</div>
</template>

<script>
import SingleProjectHeader from '@/components/SingleProject/SingleProjectHeader.vue';
import SingleProjectInformation from '@/components/SingleProject/SingleProjectInformation.vue';
import SingleProjectFeatures from '@/components/SingleProject/SingleProjectFeatures.vue';

import projects from "@/data/projects.js"

export default {
	components: {SingleProjectHeader, SingleProjectInformation, SingleProjectFeatures},
	data: ()=>({
       project: null
    }),
	created(){
		this.project = projects.find(project => project.title === this.$route.params.id.replaceAll("-"," "));
		document.title = "[Simon Weck] - " + this.project.title;
	},
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
};
</script>

<style scoped>
.SingleProject{
	margin-top: 0px;
	background: white;
	overflow-x: hidden;
}
</style>
