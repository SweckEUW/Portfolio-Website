<template>
	<div class="ProjectList" @scroll="scroll()">
        
        <h1>[My Work]</h1>

		<div v-for="project in projects" :key="project.title" class="pl-element" @click="$router.push('/work/' + project.title.replaceAll(' ','-'))">
            <video :src="getTrailer(project.folder)" muted loop class="pl-video"/>
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
        getTrailer(folder){
            return new URL(`/src/assets/projects/${folder}/videos/trailer.webm`, import.meta.url);
        },
        playVideo(element){
            let video = element.getElementsByTagName("video")[0];
            element.classList.add("pl-element-active");
            video.play();
        },
        closeVideo(element){
            let video = element.getElementsByTagName("video")[0];
            element.classList.remove("pl-element-active");
            video.pause();
        },
        checkScrollDirectionIsUp(){
            var st = window.pageYOffset || document.documentElement.scrollTop;
            let scrollTop = st > this.lastScrollTop;
            this.lastScrollTop = st <= 0 ? 0 : st;
            return scrollTop;
        },
        isElementInViewport(el){
            var rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        }
    },
    mounted(){
        // let test = await fetch("https://api.storyblok.com/v2/cdn/stories?token=FL4I5ToKxfYVjeC803C6dgtt").then(response => response.json());
        // this.projects = test.stories;
        this.playVideo(document.getElementsByClassName("ProjectList")[0].getElementsByClassName("pl-element")[0]);
        
        window.onscroll = () => {
            let a = this.checkScrollDirectionIsUp() ? 100 : -100;
            let elements = document.getElementsByClassName("ProjectList")[0].getElementsByClassName("pl-element");
            for (let i = 0; elements.length > i; i++){
                if(elements[i] == document.elementFromPoint(window.innerWidth/2, window.innerHeight/2 + a))
                    this.playVideo(elements[i]);                
                else         
                    this.closeVideo(elements[i]);    
            }  
        };
    }
};
</script>

<style scoped>
.ProjectList{
    margin-bottom: 200px;
    margin-top: 200px;
}
.pl-element{
    display: flex;
    align-content: center;
    position: relative;
    margin: auto;
    padding-bottom: 80px;
    padding-top: 80px;
    cursor: pointer;
    will-change: transform, filter;
    justify-content: center;
    width: 90%;
    height: 250px;
    transition: filter 1s cubic-bezier(.54,.08,.01,.95), width 1s cubic-bezier(.54,.08,.01,.95), height 1s cubic-bezier(.54,.08,.01,.95);
    filter: blur(10px) grayscale(100%);
}
.pl-element-active{
    filter: blur(1px);
    height: 900px;
}
.pl-element *{
    pointer-events: none;
}
.pl-video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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


/*MOBILE*/
@media (max-device-width: 900px){
    .ProjectList{
        margin-bottom: 150px;
        margin-top: 100px;
    }
    .pl-element-active{
        height: 500px;
    }
    .pl-element{
        padding-bottom: 40px;
        padding-top: 40px;
    }
}
</style>
