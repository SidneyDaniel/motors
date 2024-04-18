<script lang="js">
import toolBar from '@/components/toolBar.vue';
import Image from 'primevue/image';
import AnimateOnScroll from 'primevue/animateonscroll';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';

export default {
    name: "WhatWeDoSection",
  data() {
    return {
      image: { backgroundImage: "url(../src/assets/backgrounds/background6.svg)" }
    };
  }
};

</script>

<template>
    <main :style="image" style="min-height: 100vh; display: flex; justify-content: center; flex-direction: column; gap: 6rem;">
        <div class="services">
            <h1 class="services-first-title">Our Services</h1>

            <h2 class="services-second-title">What we do</h2>

            <p class="services-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur illum debitis ab repellat accusamus, quas eligendi, et architecto nisi, iste mollitia quae. Fugit, incidunt a? Doloribus in debitis harum.</p>
        </div>

        <ul class="cards">
            <li class="card">
                <Image src="../src/assets/Icons/Icon01.svg" alt="Image" width="150" />
                <h1 class="card-title">Handmade Custom <br> Accessories</h1>
                <p class="card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li class="card">
                <Image src="../src/assets/Icons/Icon02.svg" alt="Image" width="150" />
                <h1 class="card-title">Creating Bespoke <br> Motorcycles</h1>
                <p class="card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li class="card">
                <Image src="../src/assets/Icons/Icon03.svg" alt="Image" width="150" />
                <h1 class="card-title">Build Exceptional Bikes</h1>
                <p class="card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            
        </ul>
        

    </main>
</template>


<style scoped>
/* animation-delay: calc(.2s * var(--i)); */


.services{
    padding: 4rem;
}

.services-first-title{
    font-family: var(--Antonio);
    font-size: 1.5rem;
    color: #D30F20;
}

.services-second-title{
    font-family: var(--Antonio);
    font-size: 5.5rem;
}

.cards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    list-style: none;
}

.card{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #D30F20;
    color: #fff;
    height: 350px;
    width: 400px;

}

.card-title{
    font-family: var(--Antonio);
    font-weight: bold;
    /* font-variant-caps: small-caps;
    font-size: xx-large; */
    letter-spacing: 1px;

}

.card-p{
    font-family: var(--Barlow);

}

</style>