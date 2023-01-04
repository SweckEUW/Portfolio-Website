<template>
	<div v-if="project != null">
		<SingleProjectHeader :project="project"/>
	</div>
</template>

<script>
import SingleProjectHeader from '@/components/SingleProject/SingleProjectHeader.vue';

import projects from "@/data/projects.js"

export default {
	components: {SingleProjectHeader},
	data: ()=>({
       project: null
    }),
	created(){
		this.project = projects.find(project => project.title.replaceAll(" ","-") === this.$route.params.id);
	}
};
</script>

<style scoped>

</style>
