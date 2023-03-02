<template>
	<div>
		<h1>[Showreel]</h1>
        <video :src="getMedia('Reel.webm')" :poster="getMedia('ReelPoster.png')" controls/>
	</div>
</template>

<script>
export default {
    methods: {
		getMedia(media){
			return new URL(`/src/assets/home/${media}`, import.meta.url);
		}
    },
	mounted(){
		setTimeout(() => { window.scrollTo(0, 0);}, 0);
	}
};
</script>

<style scoped>
div{
    display: flex;
    align-items: center;
    flex-direction: column;
}
video{
    width: 90%;
}
</style>
