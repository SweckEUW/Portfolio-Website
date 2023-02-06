<template>
	<div class="ProjectList" @scroll="scroll()">
        
        <h1>[My Work]</h1>

        <router-link tag="div" :to="'/work/' + project.title.replaceAll(' ','-')" v-for="project in projectsFiltered ? projectsFiltered : projects" :key="project.title" class="pl-element">
            <video :src="getTrailer(project.folder)" muted loop class="pl-video"/>
            <div class="pl-overlay">
                <div class="p-overlay-title">{{ project.title }}</div>
                <div class="p-overlay-category">{{ project.category }}</div>
                <div class="p-overlay-shortDescription">{{ project.description_short }}</div>
            </div>
        </router-link>
	</div>
</template>

<script>
import projects from "@/data/projects.js"

export default {
    props: ["projectsSelection"],
	data: ()=>({
        projects: projects
    }),
    computed: {
        projectsFiltered(){
            if(!this.projectsSelection)
                return this.projects;

            return this.projects.filter(project => this.projectsSelection.includes(project.title));
        }
    },
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
            let a = this.checkScrollDirectionIsUp() ? -100 : 100;
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
    height: 70vh;
}

.pl-element *{
    pointer-events: none;
}
.pl-video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    filter: blur(10px) grayscale(100%);
    transition: filter 1s cubic-bezier(.54,.08,.01,.95), width 1s cubic-bezier(.54,.08,.01,.95), height 1s cubic-bezier(.54,.08,.01,.95);
}
.pl-element-active video{
    filter: blur(1px) grayscale(0%);
}
.pl-overlay{
    position: absolute;
    width: 20%;
    height: 10%;
    left: -1px;
    top: 120px;
    background: white;
    font-size: 22px;
    font-weight: bold;
    padding: 0.5rem 1rem;
}
.pl-overlay div{
    color: black;
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
