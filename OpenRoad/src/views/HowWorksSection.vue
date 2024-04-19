<script lang="js">
import toolBar from '@/components/toolBar.vue';
import Image from 'primevue/image';
import AnimateOnScroll from 'primevue/animateonscroll';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';
import { ref } from "vue";

const events = ref([
    {title:'Measuring and Scaling ', number: '01', icon: 'pi pi-gauge', color: 'red', img:'../src/assets/backgrounds/Measuring.svg'}, 
    {title:'Design and Sketches', number: '02',  icon: 'pi pi-pencil', color: 'red', img:'../src/assets/backgrounds/Design.svg'},
    {title:'Modification Process', number: '03',  icon: 'pi pi-spin pi-cog', color: 'red',  img:'../src/assets/backgrounds/Modification.svg'}, 
    {title:'Paintjob Process', number: '04',  icon: 'pi pi-palette', color: 'red',  img:'../src/assets/backgrounds/Paint.svg'},
    
]);

export default {
    name: "HowWorksSection",
  data() {
    return {
      image: { backgroundImage: "url(../src/assets/backgrounds/background6.svg)" }, 
      events
    };
  }
};

</script>

<template>
    <main  style="min-height: 10vh; display: flex; justify-content: center; flex-direction: column; align-items: center; gap: 1rem; padding: 2rem;">
        
        <div class="works">
            <h1 class="works-title">
                How it works
            </h1>
            <h2 class="works-subtitle">
                Our Process
            </h2>
        </div>

        <div class="card flex flex-column gap-3" style="width: 90%;">
            <Timeline :value="events" layout="horizontal" align="bottom" class="customized-timeline">
                <template #marker="slotProps">
                    <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ color: slotProps.item.color, fontSize:'1.5rem', margin:'0.6rem' }">
                        {{ slotProps.item.number }}
                    </span>
                </template>
                <template #content="slotProps">
                    <span :style="{fontFamily:'var(--Barlow)', fontStyle:'italic', fontWeight:'700'}">
                        {{ slotProps.item.title }}
                    </span>
                </template>
                <template #opposite="slotProps">
                    <Image :src="`${slotProps.item.img}`" alt="Image" width="250" height="100%" style="filter: grayscale(1);" preview />
                </template>
            </Timeline>
        </div>

    </main>
</template>


<style scoped>

.works{
    width: 90%;
    text-align: end;
}

.works-title{
    font-family: var(--Antonio);
    font-size: 1.5rem;
    color: #D30F20;
}

.works-subtitle{
    font-family: var(--Antonio);
    font-size: 5.5rem;
}

.p-timeline-event{
    width: 288.75px;
    background-color: red;
}


</style>

<style>

</style>