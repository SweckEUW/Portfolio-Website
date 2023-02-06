<template>
	<div class="AppFooter">

		<div class="af-socials">
			<img :src="getIcon('LinkedIn')" titl="LinkedIn" @click="openLink('https://www.linkedin.com/in/sweck/')" alt="">
			<img :src="getIcon('GitHub')" titl="GitHub" @click="openLink('https://github.com/SweckEUW/')" alt="">
		</div>
		
		<div class="af-imprint">
			<p>@2023 Simon Weck</p>
			<p>|</p>
			<p class="af-link" @click="$router.push('/Imprint')">Imprint/Privacy Policy</p>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		getIcon(icon){
			return new URL(`/src/assets/icons/${icon}.png`, import.meta.url);
		},
		openLink(link){
			window.open(link, '_blank').focus();
		}
	}
};
</script>

<style scoped>
.AppFooter{
	width: 100%;
	background: rgba(0, 0, 0, 0.3);
	text-align: center;
	color: white;
	padding: 20px;
	font-size: 18px;
}

.af-socials{
	margin-bottom: 20px;
}
img{
	width: 40px;
	height: 40px;
	object-fit: contain;
	filter: brightness(0%) invert(1);
	margin: 0px 12px;
	cursor: pointer;
	transition: .3s filter ease;
}
img:hover{
	filter: brightness(0%) invert(0.9);
}



.af-imprint{
	display: flex;
	justify-content: center;
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
