<template>
	<div class="SingleProjectInformation">
		<div class="spi-description">
			<h1>Description</h1>
			<div>{{project.description_long}}</div>
			<h1>Tools/Languages</h1>
			<img v-for="tool in project.tools" :key="tool" :title="tool" :src="getImageFromTool(tool)" alt="">
		</div>
		<div class="spi-sideInformation">
			<h1>Role</h1>
			<div v-for="role in project.roles" :key="role">{{role}}</div>
			<h1>Type</h1>
			<div v-for="pType in project.types" :key="pType">{{pType}}</div>
			<h1>Created</h1>
			<div>{{project.created}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project'],
	methods: {
		getImageFromTool(tool){
			return new URL(`/src/assets/icons/${tool}.png`, import.meta.url);
		}
	}
};
</script>

<style scoped>
.SingleProjectInformation{
	display: flex;
	width: 90%;
	margin: auto;
	margin-top: 50px;
}
.spi-description{
	flex: 60%;
	padding-right: 40px;
}
.spi-sideInformation{
	flex: 40%;
}
.spi-description div, .spi-sideInformation div{
	font-size: 22px;
}
h1{
	text-align: left;
	font-size: 30px;
	color: black;
	margin-bottom: 10px;
	margin-top: 20px;
	text-shadow: none;
}
img{
	display: inline-block;
	width: 60px;
	height: 60px;
	object-fit: contain;
	margin: 0 15px;
	filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
}
img:first-of-type{
	margin-left: 0px;
}

/*MOBILE*/
@media (max-device-width: 900px){
    .SingleProjectInformation{
		display: block;
	}
}
</style>
