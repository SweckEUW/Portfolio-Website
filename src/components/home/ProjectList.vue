<template>
	<div class="ProjectList" @scroll="scroll()">
		<div v-for="project in projects" :key="project.title" class="pl-element">
            <video :src="getTrailer(project.title)" muted loop class="pl-video"/>
            <div class="pl-overlay">
                <div class="p-overlay-title">{{ project.title }}</div>
                <div class="p-overlay-category">{{ project.category }}</div>
                <div class="p-overlay-shortDescription">{{ project.description_short }}</div>
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
        },
        playVideo(element){
            let video = element.getElementsByTagName("video")[0];
            video.classList.add("pl-video-active");
            video.play();
        },
        closeVideo(element){
            let video = element.getElementsByTagName("video")[0];
            video.classList.remove("pl-video-active");
            video.pause();
        },
        isElementInViewport(el){
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
            );
        }
    },
    mounted(){
        // let test = await fetch("https://api.storyblok.com/v2/cdn/stories?token=FL4I5ToKxfYVjeC803C6dgtt").then(response => response.json());
        // this.projects = test.stories;
        // console.log(this.projects);

        window.addEventListener("scroll", () => {
            console.log("scroll");
            let elements = document.getElementsByClassName("ProjectList")[0].getElementsByClassName("pl-element");
            for (let i = 0; elements.length > i; i++){
                if(this.isElementInViewport(elements[i]))
                    this.playVideo(elements[i]);                
                else         
                    this.closeVideo(elements[i]);    
            }  
        });
    }
};
</script>

<style scoped>
.pl-element{
    display: flex;
    align-content: center;
    position: relative;
    margin: auto;
    margin-bottom: 100px;
    margin-top: 100px;
    cursor: pointer;
    will-change: transform, filter;
    justify-content: center;
}
.pl-element *{
    pointer-events: none;
}
.pl-video{
    width: 90%;
    height: 500px;
    object-fit: cover;
    filter: blur(10px) grayscale(100%);
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
    transition: filter 1s cubic-bezier(.54,.08,.01,.95), width 1s cubic-bezier(.54,.08,.01,.95), height 1s cubic-bezier(.54,.08,.01,.95);
}
.pl-video-active{
    filter: blur(0px);
    width: 100%;
    height: 130vh;
}
.pl-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
}
.pl-overlay div{
    color: white;
}
.p-overlay-title{
    
}
.p-overlay-category{
    
}
.p-overlay-shortDescription{
    
}
</style>
