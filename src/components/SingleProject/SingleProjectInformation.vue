<template>
	<div class="SingleProjectInformation">
		<div class="spi-description">
			<h1>Description</h1>
			<div>{{project.description_long}}</div>
			<h1>Tools</h1>
		</div>
		<div class="spi-sideInformation">
			<h1>Role</h1>
			<div v-for="role in project.roles" :key="role">{{role}}</div>
			<h1>Type</h1>
			<div v-for="type in project.types" :key="type">{{type}}</div>
			<h1>Created</h1>
			<div>{{project.created}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project'],
    data: ()=>({
		
    }),
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

/*MOBILE*/
@media (max-device-width: 900px){
    .SingleProjectInformation{
		display: block;
	}
}
</style>
