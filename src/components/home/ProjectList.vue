<template>
	<div class="ProjectList">
		<div v-for="project in projects" :key="project.title" class="pl-element">
            <video :src="getTrailer(project.title)" autoplay muted loop/>
            <div class="pl-overlay">
                <div>{{ project.title }}</div>
                <div>{{ project.category }}</div>
                <div>{{ project.tools }}</div>
            </div>
        </div>
	</div>
</template>

<script>
import projects from "@/data/projects.js"

export default {
	data: ()=>({
        projects: projects
    }),
    methods: {
        getTrailer(title){
            return new URL(`/src/assets/projects/${title}/videos/trailer.webm`, import.meta.url);
        }
    },
    async mounted(){
        // let test = await fetch("https://api.storyblok.com/v2/cdn/stories?token=FL4I5ToKxfYVjeC803C6dgtt").then(response => response.json());
        // this.projects = test.stories;
        // console.log(this.projects);
    }
};
</script>

<style scoped>
.pl-element{
    position: relative;
}
.ProjectList video{
    width: 100%;
    height: 600px;
    object-fit: cover;
    /* filter: blur(40px); */
}
.pl-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    color: white;
}
</style>
