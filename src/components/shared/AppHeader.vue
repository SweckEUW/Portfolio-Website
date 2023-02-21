<template>
	<div class="AppHeader">

		<div class="ap-left">
			<router-link to="/" @click="scrollToTop()">[Simon Weck]</router-link>
		</div>
		
		<div class="ap-right">
			<router-link to="/Work">[Work]</router-link>
			<router-link to="/About">[About Me]</router-link>
			<router-link to="/Contact">[Contact]</router-link>
		</div>
		
	</div>
</template>

<script>
export default {
	methods:{
		scrollToTop(){
			if(this.$route.path == "/"){
				document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
				setTimeout(() => {window.scrollTo(0, 0); }, 0);
				setTimeout(() => { document.getElementsByTagName("html")[0].style.scrollBehavior = ""; }, 1000);
			}
		}
	}
};
</script>

<style scoped>
.AppHeader{
	width: 90%;
	z-index: 99;
	padding: 20px 0px;
	position: fixed;
	top: 30px;
	filter: drop-shadow(0px 0px 100px rgba(255, 255, 255, 0.295));
	margin: 0 5%;
}
.ap-left{
	float: left;
}
.ap-right{
	float: right;
}
a{
	display: inline-block;
	font-size: 26px;
	cursor: pointer;
	transition: .3s color ease;
	text-align: center;
    color: white;
    text-shadow: 0px 0px 10px rgba(0,0,0,0.6), 0px 0px 5px rgba(0,0,0,0.6);
	margin: 0;
	margin-bottom: 50px;
	margin: 0 15px;
}
a:first-child{
	margin-left: 0;
}
a:last-child{
	margin-right: 0;
}
a:hover{
	color: rgb(160, 160, 160);
}

/*MOBILE*/
@media (max-device-width: 900px){
    a{
		font-size: 14px;
	}
	.AppHeader{
		top: 4px;
	}
}
</style>
