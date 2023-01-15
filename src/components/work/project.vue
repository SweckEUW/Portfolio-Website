<template>
	<div>
		<div v-for="project in projects" :key="project.title">
			{{ project.title }}
		</div>
	</div>
</template>

<script>
import projects from "@/data/projects.js"

export default {
    data: ()=>({
        projects: projects
    }),
};
</script>

<style scoped>

</style>
