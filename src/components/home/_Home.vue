<template>
	<div class="Home">
		<div class="ho-header">
			<h1 class="ho-header-main">Hey I my Name is Simon Weck</h1>
			<h1 class="ho-header-second">I do Graphics Programming</h1>
		</div>
		<ProjectList/>
	</div>
</template>

<script>
import ProjectList from '@/components/shared/ProjectList.vue';

export default {
	components: {ProjectList},
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
};
</script>

<style scoped>
.ho-header{
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
}
h1{
	margin: 0;
}
.ho-header-second{
	font-size: 50px;
	color: rgb(235, 235, 235);
}
</style>
