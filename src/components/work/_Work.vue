<template>
	<div>
		<h1>[My Work]</h1>
		<ProjectList  :projectsSelection="[
			'Weck BiPo Open Website', 'The City of Light', 'Motile Website', 'Aliaxis Showroom', 'AI Image Editor Toolkit', 'Monopoly Animation', 'CVDesign Website', 'Universe Simulation', 'Emberpoint', 
			'OpenFile','Revitalize Website', 'Whacky Contraptions', 'Brush Cleaner', 'Arcade Automat'
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
