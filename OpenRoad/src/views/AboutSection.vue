<script lang="js">
import toolBar from '@/components/toolBar.vue';
import Image from 'primevue/image';
import AnimateOnScroll from 'primevue/animateonscroll';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';

export default {
    name: "AboutSection",
  data() {
    return {
      image: { backgroundImage: "url(../src/assets/backgrounds/backgroundHello2.svg)" }
    };
  }
};

</script>

<template>
    <main style="min-height: 100vh; display: flex; flex-direction: row;">
     
     <div class="banner" :style="image">

     </div>

      <div class="about">
        <h1 class="title">A STORY ABOUT US</h1>
        <p class="aboutText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quae, ullam vitae pariatur consequuntur exercitationem dolores excepturi, ratione dolorem eaque accusamus! Laboriosam suscipit deleniti numquam doloremque quos vitae rem non.</p>

        <div class="fieldSets">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center pl-2">
                    <span class="font-bold">Vision</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
            </p>
        </Fieldset>
  
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center pl-2">
                    <span class="font-bold">Mission</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
            </p>
        </Fieldset>
        </div>
     </div>
    </main>
</template>


<style scoped>
.title{
  font-family: var(--Antonio);
  font-style: italic;
  font-weight: 800;
}

.about, .banner{
  min-height: 100vh;
  width: 50%;
}

.about{
  gap: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
}

.title{
  font-size: clamp(2.8em, 5vw, 2.5rem);
}

.aboutText{
  width: 24rem;
}
</style>

<style>

.fieldSets{
  display: flex;
  width: 50rem;
  gap: 1rem;
}

/* .p-card{
  background: none;
  background: none;
  color: inherit;
  box-shadow: none;
  border-radius: none;
} */

.p-fieldset {
    border: none;
    border-top: 1px solid #e2e8f0;
    background: none;
    color: inherit;
    border-radius: 0px;
}


.p-fieldset .p-fieldset-legend {
  font-size: 1.2rem;
    padding: none;
    border: none;
    color: inherit;
    background: none;
    font-weight: 600;
    border-radius: 6px;
}


</style>