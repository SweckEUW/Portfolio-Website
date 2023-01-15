<template>
	<div>
		<div class="header">
			<h1>Hey I am Simon</h1>
			<h1>I do Graphics Programming</h1>
		</div>
		<ProjectList/>
	</div>
</template>

<script>
import ProjectList from '@/components/home/ProjectList.vue';

export default {
	components: {ProjectList},
	data: ()=>({
       
    })
};
</script>

<style scoped>
.header{
	height: 85vh;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
}
h1{
	margin: 0;
}
</style>
