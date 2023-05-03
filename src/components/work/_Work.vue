<template>
	<div>
		<h1>[My Work]</h1>
		<ProjectList  :projectsSelection="[
			'The City of Light', 'Motile Website', 'Aliaxis Showroom', 'AI Image Editor Toolkit', 'Monopoly Animation', 'Universe Simulation', 'Emberpoint', 
			'OpenFile','Revitalize Website', 'Whacky Contraptions', 'Brush Cleaner', 'Arcade Automat'
		]"/>
	</div>
</template>

<script>
import ProjectList from '@/components/work/ProjectList.vue';

export default {
	components: {ProjectList},
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
};
</script>

<style scoped>

</style>
