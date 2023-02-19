<template>
	<div class="Timeline">

        <div class="tl-element">
            <!-- Bubble -->
            <div class="tl-bubble tl-bubble-first">
                <img :src="getIcon(timeline.icon)" alt="">
            </div>

            <!-- Content -->
            <div class="tl-title">{{ timeline.title }}</div>
        </div>

        <div v-for="point in timeline.points" :key="point.title" class="tl-element">
            <!-- Bubble -->
            <div class="tl-bubble">{{ point.year }}</div>

            <!-- Content -->
            <div class="tl-content">
                <p class="tl-content-title">{{ point.title }}</p>
                <p class="tl-content-place">{{ point.place }}</p>
                <p class="tl-content-description">{{ point.description }}</p>
            </div>
        </div>

        <div class="tl-line"/>
	</div>
</template>

<script>
export default {
    props: ["timeline"],
    methods: {
        getIcon(icon){
			return new URL(`/src/assets/icons/${icon}`, import.meta.url);
		}
    }
};
</script>

<style scoped>
.Timeline{
    position: relative;
}
.tl-title{
    margin-left: 20px;
    font-size: 22px;
    font-weight: bold;
}
.tl-line{
    position: absolute;
    left: 48px; /* Bubble width / 2 */
    top: 0;
    width: 4px;
    height: calc(100% - 110px); /* 100% - tl-content height / 2*/
    background: #EDF1F3;
    z-index: -1;
}
.tl-element{
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}
.tl-bubble{
    min-width: 150px;
    padding: 20px;
    border: 5px solid white;
    background-color: #747474;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    margin-left: -50px;
    white-space: nowrap;
}
.tl-bubble-first{
    border-radius: 50%;
    min-width: auto !important;
    border-color: #EDF1F3;
    width: 50px;
    height: 50px;
    background-color: white;
    margin-left: 0px;
}
.tl-content{
    margin-left: 30px;
    padding: 40px;
    font-size: 22px;
    display: inline-block;
    width: 100%;
    border: 2px solid #EDF1F3;
}
.tl-content p{
    font-size: 20px;
    margin-top: 0;
}
.tl-content-title{
    font-size: 22px !important; 
    font-weight: bold;
    margin-bottom: 5px;
}
.tl-content-place{
    color: #797979;
    margin-bottom: 10px;
}
.tl-content-description{
    margin-bottom: 0px;
    font-size: 16px !important;
}
</style>
