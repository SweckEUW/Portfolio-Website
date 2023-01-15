<template>
	<div v-if="project != null">
		<SingleProjectHeader :project="project"/>
		<SingleProjectInformation :project="project"/>
	</div>
</template>

<script>
import SingleProjectHeader from '@/components/SingleProject/SingleProjectHeader.vue';
import SingleProjectInformation from '@/components/SingleProject/SingleProjectInformation.vue';

import projects from "@/data/projects.js"

export default {
	components: {SingleProjectHeader,SingleProjectInformation},
	data: ()=>({
       project: null
    }),
	created(){
		this.project = projects.find(project => project.title === this.$route.params.id.replaceAll("-"," "));
		document.title = "[Simon Weck] - " + this.project.title;
	}
};
</script>

<style scoped>

</style>
