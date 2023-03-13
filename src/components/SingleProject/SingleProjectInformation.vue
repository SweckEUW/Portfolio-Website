<template>
	<div class="SingleProjectInformation">
		<div class="spi-sideInformation">
			<h1>[Role]</h1>
			<div v-for="role in project.roles" :key="role">{{role}}</div>
			<h1>[Type]</h1>
			<div v-for="pType in project.types" :key="pType">{{pType}}</div>
			<h1>[Created]</h1>
			<div>{{project.created}}</div>
			<h1>[Technology]</h1>
			<div>
				<img v-for="tool in project.tools" :key="tool" :title="tool" :src="'/src/assets/icons/' + tool + '.png'" alt="">
			</div>
			<h1 v-if="project.contents">[Links]</h1>
			<div v-for="content in project.contents" :key="content.url">
				<img class="spi-link" v-if="content.type == 'Code'" :src="'/src/assets/icons/GitHub.png'" alt="" @click="openLink(content.url)">
			</div>
		</div>
		<div class="spi-description">
			<div>{{project.description}}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project'],
	methods: {
		openLink(link){
			window.open(link, '_blank').focus();
		}
	}
};
</script>

<style scoped>
.SingleProjectInformation{
	display: flex;
	width: 70%;
	margin: auto;
	margin-bottom: 100px;
	align-items: center;
	padding-top: 50px;
}
.spi-link{
	transition: .3s transform ease;
	cursor: pointer;
}
.spi-link:hover{
	transform: scale(1.1);
}
.spi-description{
	flex: 65%;
	margin: 50px;
	font-size: 24px !important;
}
.spi-sideInformation{
	flex: 35%;
	font-size: 18px;
}
.spi-sideInformation div{
	margin-left: 20px;
}
h1{
	text-align: left;
	font-size: 26px;
	color: black;
	margin-bottom: 5px;
	margin-top: 20px;
	text-shadow: none;
}
img{
	display: inline-block;
	width: 40px;
	height: 40px;
	object-fit: contain;
	margin: 0 15px;
	filter: grayscale(100%) contrast(0.8) drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
}
img:first-of-type{
	margin-left: 0px;
}

/*MOBILE*/
@media (width <= 900px){
    .SingleProjectInformation{
		flex-direction: column;
		margin: auto;
		width: 90%;
	}
	.spi-description{
		order: 1;
		margin: 0px;
		font-size: 18px !important;
		margin-bottom: 20px;
	}
	.spi-sideInformation{
		order: 2;
		width: 100%;
		margin-bottom: 50px;
	}
}
</style>
