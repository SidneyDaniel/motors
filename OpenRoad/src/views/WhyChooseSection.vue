<script lang="js">
import 'primeicons/primeicons.css'
import toolBar from '@/components/toolBar.vue';
import Image from 'primevue/image';
import AnimateOnScroll from 'primevue/animateonscroll';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';

export default {
    name: "WhyChooseSection",
  data() {
    return {
      image: { backgroundImage: "url(../src/assets/backgrounds/background10.svg)" }
    };
  }
};

</script>

<template>
    <main :style="image" style="min-height: 100vh; display: flex; justify-content: center; align-items: center;">
        <div class="reason">
          <h1 class="reason-title">Why should you <br> <span>CHOOSE US?</span></h1>

          <p class="reason-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam pariatur, molestiae rerum praesentium minima autem qui eveniet. Nemo unde corrupti rem natus ex maiores! Quas beatae asperiores ipsum sapiente! Tempore.</p>

          <ul class="reason-list">
            <li class="reasons">
              <i class="pi pi-check-circle" style="color: #D30F20;"></i>
              Fully insured motorcycle
            </li>
            <li class="reasons">
              <i class="pi pi-check-circle" style="color: #D30F20;"></i>
              Different types of motorcycle
            </li>
            <li class="reasons">
              <i class="pi pi-check-circle" style="color: #D30F20;"></i>
              Designed for modern world
            </li>
            <li class="reasons">
              <i class="pi pi-check-circle" style="color: #D30F20;"></i>
              Smart mobility for clients
            </li>
          </ul>

        </div>

        <div class="banner">
          <Image class="banner-img" src="../src/assets/backgrounds/background8.svg" alt="Image" width="700" />
          <Image class="banner-img" src="../src/assets/backgrounds/background9.svg" alt="Image" width="700" />
        </div>

    </main>
</template>


<style scoped>

.reason, .banner{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}


.reason{
  text-align: justify;
  font-size: larger;
  gap: 1rem;
}

/* .reason::after{
  content: " ";
  min-height: 100vh;
  width: 50%;
  position: absolute;
  background-color: #000;
} */

.reason-title{
  font-size: clamp(2.8em, 5vw, 4.3rem);
  font-family: var(--Antonio);
  position: relative;
  font-weight: bolder;
  z-index: 2;
}

.reason-title span{
  font-weight: 800;
  font-family: var(--Barlow);
  color: #D30F20;
}

.reason-p{
  font-family: var(--Barlow);
  width: 36rem
}

.reason-list{
  list-style: none;
  padding: 0;
}

.reason-list .reasons{
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--Barlow);
  font-size: x-large;
}

.pi {
    font-size: 1.5rem;
}


.banner-img{
  filter: drop-shadow(-40px 15px 0px #D30F20);
}

.banner-img:nth-child(1){
  transform: translateY(5rem)
}

</style>