<template>
	<div class="AppFooter">

		<div class="af-socials">
			<!-- LinkedIn -->
			<a href="https://www.linkedin.com/in/sweck/" target="_blank">
				<img :src="getIcon('LinkedIn')" titl="LinkedIn" alt="">
			</a>

			<!-- GitHub -->
			<a href="https://github.com/SweckEUW/" target="_blank">
				<img :src="getIcon('GitHub')" titl="GitHub" alt="">
			</a>
		</div>
		
		<div class="af-imprint">
			<p>@2023 Simon Weck</p>
			<p>|</p>
			<router-link tag="p" to="/Imprint" class="af-link">Imprint/Privacy Policy</router-link>
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
	background: #B2B2B2;
	text-align: center;
	color: white;
	padding: 20px;
}

.af-socials{
	margin-bottom: 10px;
}
img{
	width: 30px;
	height: 30px;
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
p, .af-imprint a{
	display: inline-block;
	margin: auto 4px;
	font-size: 16px;
}
.af-link{
	cursor: pointer;
	transition: .3s color ease;
}
.af-link:hover{
	color: rgb(211, 211, 211);
}
</style>
