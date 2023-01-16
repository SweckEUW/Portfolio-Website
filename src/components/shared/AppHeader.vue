<template>
	<div class="AppHeader">

		<div class="ap-left">
			<h1 @click="goToHome()">[Simon Weck]</h1>
		</div>
		
		<div class="ap-right">
			<h1 @click="$router.push('/Work')">[Work]</h1>
			<h1 @click="$router.push('/About')">[About Me]</h1>
			<h1 @click="$router.push('/Contact')">[Contact]</h1>
		</div>
		
	</div>
</template>

<script>
export default {
	methods:{
		goToHome(){
			if(this.$route.path == "/"){
				document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
				setTimeout(() => {window.scrollTo(0, 0); }, 0);
				setTimeout(() => { document.getElementsByTagName("html")[0].style.scrollBehavior = ""; }, 1000);
			}else{
				this.$router.push('/');
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
h1{
	display: inline-block;
	font-size: 26px;
	margin: 0 15px;
	cursor: pointer;
}
h1:first-child{
	margin-left: 0;
}
h1:last-child{
	margin-right: 0;
}
</style>
