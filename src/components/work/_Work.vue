<template>
	<div>
		<h1>[My Work]</h1>
		<ProjectList  :projectsSelection="[
			'Motile Website', 'The City of Light', 'Weck BiPo Open Website', 'Aliaxis Showroom', 'AI Image Editor Toolkit', 
			'Monopoly Animation', 'CVDesign Website', 'Universe Simulation', 'Emberpoint', 'OpenFile','Revitalize Website', 
			'Whacky Contraptions', 'Brush Cleaner', 'Arcade Automat'
		]"/>
	</div>
</template>

<script>
import ProjectList from '@/components/work/ProjectList.vue';

export default {
	components: {ProjectList}
};
</script>

<style scoped>

</style>
