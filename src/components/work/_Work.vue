<template>
	<div>
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

</style>
