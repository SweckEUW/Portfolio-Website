<template>
	<div class="AppHeader">
		
		<div class="ah-container">
			<h1>
				<RouterLink to="/">[Simon Weck]</RouterLink>
			</h1>

		<div class="ah-nav">
			<div>
				<RouterLink to="/Work">[Work]</RouterLink>
			</div>
			<div>
				<RouterLink to="/About">[About Me]</RouterLink>
			</div>
			<div>
				<RouterLink to="/Contact">[Contact]</RouterLink>
			</div>
		</div>
		</div>
		

	</div>
</template>

<script>
export default {
	data: ()=>({
       
    }),
};
</script>

<style scoped>
.AppHeader{
	margin-top: 300px;
}
.ah-container{
	width: 100%;
	z-index: 99;
	padding: 20px 0px;
	background: white;
	position: fixed;
	top: 0;
	filter: drop-shadow(0px 0px 100px rgba(255, 255, 255, 0.295));
}
.ah-nav{
	width: 100%;
	display: flex;
	justify-content: center;
}
.ah-nav div{
	display: inline-block;
	color: white;
    font-size: 30px;
	margin: 20px;
    text-shadow: 0px 0px 5px rgba(0,0,0,0.8);
}
</style>
