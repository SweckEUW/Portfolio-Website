<template>
	<div class="Bar">
		<div>{{ skill.name }}</div>
		<div class="bar-border">
			<div class="bar-grey" :style="{'width': skill.bar + '%'}"></div>
		</div>
	</div>
</template>

<script>
export default {
    props: ["skill"]
};
</script>

<style scoped>
.bar-border{
	margin-bottom: 20px;
	background-color: rgb(240, 240, 240);
}
.bar-grey{
	height: 5px;
	background-color: rgb(150, 150, 150);
	filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));
}
</style>
