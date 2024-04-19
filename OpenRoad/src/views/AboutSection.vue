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
     
     <div class="banner" >
       <h1 class="banner-title">
          Unique 
          <br> 
          <span class="banner-title-span">And</span>
          <br> 
          Powerful 
       </h1>

       <div class="banner-card">
          <hgroup>
            <h1 class="banner-card-text">80+</h1>
            <p class="banner-card-text-p">Projects done</p>
          </hgroup>

          <hgroup>
            <h1 class="banner-card-text">60+</h1>
            <p class="banner-card-text-p">Satisfieds Clients</p>
          </hgroup>
       </div>
     </div>

      <div class="about">
        <h1 class="title">A STORY ABOUT US</h1>
        <p class="aboutText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quae, ullam vitae pariatur consequuntur exercitationem dolores excepturi, ratione dolorem eaque accusamus! Laboriosam suscipit deleniti numquam doloremque quos vitae rem non.</p>

        <div class="fieldSets">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center pl-2">
                    <span class="font-bold"> <i class="pi pi-eye" style="color: #D30F20;"></i>Vision</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                
            </p>
        </Fieldset>
  
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center pl-2">
                    <span class="font-bold"> <i class="pi pi-bullseye" style="color: #D30F20;"></i>Mission</span>
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

/* .banner{
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  transform: translateZ(0);
} */

.banner{
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  gap: 7rem;
  z-index: 1;
}

.banner::after{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('../src/assets/backgrounds/backgroundHello2.svg');
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  transform: translateZ(0);
  filter: brightness(0.5);

}

.banner-title{
  font-size: clamp(2.8em, 5vw, 5.3rem);
  font-family: var(--Major);
  position: relative;
  font-weight: bolder;
  z-index: 2;
}

.banner-title-span{
  font-family: inherit;
  font-variant: small-caps;
  font-weight: inherit;
}


.banner-card{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  align-self: baseline;
  width: 28rem;
  height: 10.5rem;
  background:  rgba(0, 0, 0, 0.67);
  border-left: 10px solid #ed0000;;
  z-index: 2;
}

.banner-card hgroup{
  width: 50%;
}

.banner-card-text{
  font-family: var(--Antonio);
  font-size: 4rem;
}

.banner-card-text-p{
  font-family: var(--Rubik);
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
  font-size: clamp(2.8em, 5vw, 3.5rem);
  border-top: 1px solid #ed0000;
  width: max-content;
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


.p-fieldset .p-fieldset-legend span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.p-fieldset .p-fieldset-legend span .pi{
  font-size: 1.3rem;
}

</style>