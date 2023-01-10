<template>
	<div>
		<ProjectList/>
	</div>
</template>

<script>
import ProjectList from '@/components/home/ProjectList.vue';

export default {
	components: {ProjectList},
	data: ()=>({
       
    }),
	mounted(){
		setTimeout(() => {
			scroll(0,0);
		}, 0);
	}
};
</script>

<style scoped>

</style>
