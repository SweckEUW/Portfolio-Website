<template>
	<div>
		<h1>[My Work]</h1>
		<ProjectList :displayFilter="true" :projectsSelection="getConfig().workProjects"/>
	</div>
</template>

<script>
import ProjectList from '@/components/work/ProjectList.vue';
import { getConfig } from '@/data/SiteConfig.js';

export default {
	components: {ProjectList},
	methods: {
		getConfig,
	},
};
</script>

<style scoped>

</style>
