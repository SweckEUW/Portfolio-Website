<template>
	<div class="ProjectList" @scroll="scroll()">

        <div class="dropdown">
            <span>{{filter ? filter : 'Filter'}}</span>
            <div class="dropdown-content">
                <p @click="selectFilter('Web')" :class="{'pl-filter-selected' : filter == 'Web'}">Web</p>
                <p @click="selectFilter('3D')" :class="{'pl-filter-selected' : filter == '3D'}" style="margin-bottom: 0px;">3D</p>
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <div :key="filter">
                <router-link :to="'/Work/' + project.title.replaceAll(' ','-')" v-for="project in projectsFiltered ? projectsFiltered : projects" :key="project.title" class="pl-element">
                    <video :src="getTrailer(project.folder)" muted loop class="pl-video"/>
                    <div class="pl-overlay">
                        <div class="pl-overlay-title">{{ project.title }}</div>
                        <div class="pl-overlay-category">{{ project.category }}</div>
                    </div>
                </router-link>
            </div>
        </transition>
	</div>
</template>

<script>
import projects from "@/data/projects.js"

export default {
    props: ["projectsSelection"],
	data: ()=>({
        projects: projects,
        filter: null,
    }),
    computed: {
        projectsFiltered(){
            if(!this.projectsSelection)
                return this.projects;
            
            let sortedList = [];
            this.projectsSelection.forEach(project => {
                let foundProject = this.projects.find(projectThis => projectThis.title == project);
                if(foundProject)
                    sortedList.push(foundProject);
            });

            if(this.filter)
                sortedList = sortedList.filter(projectThis => projectThis.categories.find(category => category == this.filter));

            return sortedList;
        }
    },
    methods: {
        selectFilter(filter){
            if(this.filter == filter)
                this.filter = null;
            else
                this.filter = filter;
        },
        getTrailer(folder){
            return new URL(`/src/assets/projects/${folder}/videos/ProjectList.webm`, import.meta.url);
        },
        playVideo(element){
            let video = element.getElementsByTagName("video")[0];
            // element.classList.add("pl-element-active");
            video.play();
        },
        closeVideo(element){
            let video = element.getElementsByTagName("video")[0];
            // element.classList.remove("pl-element-active");
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
        let searchParams = new URLSearchParams(window.location.search);
        let param = searchParams.get('filter');
        if(param){  
            this.filter = param;
            searchParams.delete("filter");
        }

        window.onscroll = () => {
            let a = this.checkScrollDirectionIsUp() ? -100 : 100;
            let projectList = document.getElementsByClassName("ProjectList")[0];
            let elements = projectList ? projectList.getElementsByClassName("pl-element") : null;
            if(elements){
                for (let i = 0; elements.length > i; i++){
                    if(elements[i] == document.elementFromPoint(window.innerWidth/2, window.innerHeight/2 + a))
                        this.playVideo(elements[i]);                
                    else         
                        this.closeVideo(elements[i]);    
                }  
            }
        };
    }
};
</script>

<style scoped>
.dropdown {
    display: inline-block;
    text-align: center;

    position: sticky;
    top: 43px;
    z-index: 99;
    left: calc(50% - 90px);
}
.dropdown span{
    cursor: pointer;
    display: inline-block;
    padding: 10px 30px;
    border: 1px solid white;
    margin-bottom: 20px;
    transition: .2s background ease, .2s color ease;
    width: 100px;
    color: white;
    font-size: 20px;
    filter: drop-shadow(0px 0px 5px black);
}
.dropdown span:hover{
    background: black;
    color: white;
}
.dropdown-content{
    top: 50px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 5px;
    left: -27px;
}
.pl-filter-selected{
    background: black;
    color: white;
}

.dropdown:hover .dropdown-content{
    display: block;
}
.dropdown-content p{
    padding: 12px 16px;
    cursor: pointer;
    transition: .2s background ease, .2s color ease;
    margin: 0px;
    margin-bottom: 5px;
}
.dropdown-content p:hover{
    background: black;
    color: white;
}

.pl-element{
    display: flex;
    align-content: center;
    position: relative;
    margin: auto;
    padding-bottom: 50px;
    padding-top: 50px;
    cursor: pointer;
    will-change: transform, filter;
    justify-content: center;
    width: 90%;
    height: 70vh;
}

.pl-element:first-of-type{
    padding-top: 0px;
}

.pl-element *{
    pointer-events: none;
}
.pl-video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: filter 1s cubic-bezier(.54,.08,.01,.95), width 1s cubic-bezier(.54,.08,.01,.95), height 1s cubic-bezier(.54,.08,.01,.95);
}
.pl-overlay{
    position: absolute;
    left: -20px;
    top: 100px;
    background: rgba(255, 255, 255, 1);
    font-weight: bold;
    padding: 2rem 2rem;
    padding-right: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    filter: drop-shadow(22px 0px 10px rgba(0, 0, 0, 0.1));
}
.pl-overlay-title{
    color: black;
    font-size: 36px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.4));
}
.pl-overlay-category{
    color: rgb(73, 73, 73);
    font-size: 22px;
    margin-left: 30px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
}


/*MOBILE*/
@media (width <= 900px){
    .ProjectList{
        margin-bottom: 0px;
        margin-top: 0px;
    }
    .pl-element-active{
        height: 500px;
    }
    .pl-overlay{
        width: 85%;
        padding: 20px 30px;
        padding-left: 30px;
        padding-right: 0px;
        top: 60px;
    }
    .pl-element{
        padding-bottom: 40px;
        padding-top: 40px;
        height: 50vh;
    }
    .pl-overlay-title{
        font-size: 24px;
    }
    .pl-overlay-category{
        font-size: 18px;
        margin-left: 5px;
    }
}
</style>
