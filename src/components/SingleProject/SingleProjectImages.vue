<template>
	<div class="SingleProjectImages">

		<h1>[Images]</h1>

		<div id="mySwiper" class="swiper mp-gallery">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(image,i) in project.images" :key="i">
					<img :src="getImage(image)" alt="">
				</div>
			</div>
		</div>

		<div class="swiper-button-prev"/>
		<div class="swiper-button-next"/>
		<div id="swiper-pagination"/>
	</div>
</template>

<script>
import Swiper , { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
	props: ['project'],
	methods: {
		getImage(url){		
			return new URL(`/src/assets/projects/${this.project.folder}/pictures/${url}`, import.meta.url);
		},
	},
	mounted(){
		setTimeout(() => {
            this.swiper = new Swiper('#mySwiper',{
                modules: [Pagination, Navigation],
                spaceBetween: 50,
                direction: 'horizontal',
                clickable: true,
                mousewheel: true,
				loop: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
                observer: true,
                pagination: {
                    el: '#swiper-pagination',
                    clickable: true,
                },
            });
        }, 0); 
	}
};
</script>

<style>
.SingleProjectImages{
	width: 90%;
	margin: auto;
	position: relative;
	margin-bottom: 40px;
}
.SingleProjectImages img{
	width: 100%;
	user-select: none;
}
.swiper{
    max-height: 70vh;
}
.swiper-slide{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
#swiper-pagination{
    width: 100%;
	margin: auto;
	position: absolute;
	bottom: 10px;
	z-index: 1;
	display: flex;
	justify-content: center;
}
.swiper-pagination-bullet{
    width: 16px !important;
    height: 16px !important;
    background: transparent;
    border: 2px solid white;
    opacity: 1;
    transition: background .2s ease, border .2s ease;
	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
}
.swiper-pagination-bullet:first-child{
    margin-left: 0 !important;
}
.swiper-pagination-bullet-active{
    background: white;
}
.swiper-button-prev, .swiper-button-next{
	z-index: 2;
	color: white;
	filter: drop-shadow(0px 0px 10px black);
    font-weight: bolder;
}
.swiper-button-prev{
	left: 10%;
	top: calc(50% + 20px);
}
.swiper-button-next{
	right: 10%;
	top: calc(50% + 20px);
}

/*MOBILE*/
@media (max-device-width: 900px){
	.swiper{
		max-height: none;
	}
	.swiper-button-prev{
		left: -10px;
	}
	.swiper-button-next{
		right: -10px;
	}
	.swiper-pagination-bullet{
		width: 10px !important;
		height: 10px !important;
		border: 2px solid black;
	}
	#swiper-pagination{
		bottom: -15px;
	}
	.swiper-pagination-bullet-active{
		background: black;
	}
 
}
</style>
