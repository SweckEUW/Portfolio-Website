<<<<<<< HEAD
<template>
	<div>
		<h1>[My Work]</h1>
		<ProjectList :displayFilter="true" :projectsSelection="[
			'Mission Meltdown', 'Seacarus', 'Oriono', 'AI Image Editor Toolkit',
			
			'Motile Website', 'The City of Light', 'Weck BiPo Open Website', 'Aliaxis Showroom', 
			'CVDesign Website', 'Universe Simulation', 'Emberpoint', 'OpenFile App'
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
=======
<template>
	<div>
		<h1>[My Work]</h1>
		<ProjectList :displayFilter="true" :projectsSelection="getConfig().workProjects"/>
	</div>
</template>

<script>
import ProjectList from '@/components/work/ProjectList.vue';
import { getConfig } from '@/data/SiteConfig.js';

export default {
	components: {ProjectList},
	methods: {
		getConfig,
	},
};
</script>

<style scoped>

</style>
>>>>>>> dev
