<template>
	<div class="SingleProjectHeader">
	<div class="sph-overlay">
		<h1>{{project.title}}</h1>    
		<h2>{{project.category}}</h2>    
	</div>
	<img :src="getHeaderContent()"/>
</div>
</template>

<script>
export default {
	props: ['project'],
	methods: {
		getHeaderContent(){
			return new URL(`/src/assets/projects/${this.project.folder}/pictures/1.webp`, import.meta.url);
		}
	}
};
</script>

<style scoped>
.SingleProjectHeader{
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: -1;
	top: 0;
}
.SingleProjectHeader img{
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(3px) drop-shadow(0 0 20px rgba(0,0,0,0.2));
}
.sph-overlay{
	position: absolute;
	width: 100%;
	color: white;
	z-index: 1;
	bottom: 40px;
	left: 40px;
}
.SingleProjectHeader h1, .SingleProjectHeader h2{
	text-align: left;
	margin: 0px;
}
.SingleProjectHeader h1{
	font-size: 5vw;
	font-weight: bolder;
}
.SingleProjectHeader h2{
	font-size: 3vw;
	font-weight: lighter;
	margin-left: 20px;
	line-height: 30px;
}

/*MOBILE*/
@media (max-device-width: 900px){
    .SingleProjectHeader{
		margin-top: 50px;
		width: 85%;
	}
}
</style>
