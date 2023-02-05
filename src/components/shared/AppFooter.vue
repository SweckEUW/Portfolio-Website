<template>
	<div class="AppFooter">
		<p>@2023 Simon Weck</p>
		<p>|</p>
		<p class="af-link" @click="$router.push('/Imprint')">Imprint/Privacy Policy</p>
	</div>
</template>

<script>
export default {
	data: ()=>({
       
    }),
};
</script>

<style scoped>
.AppFooter{
	width: 100%;
	background: rgba(0, 0, 0, 0.3);
	text-align: center;
	color: white;
	height: 80px;
	display: flex;
	justify-content: center;
	font-size: 18px;
}
p{
	display: inline-block;
	margin: auto 4px;
}
.af-link{
	cursor: pointer;
	transition: .3s color ease;
}
.af-link:hover{
	color: rgb(211, 211, 211);
}
</style>
