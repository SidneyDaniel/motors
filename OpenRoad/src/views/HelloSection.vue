<script lang="js">
import toolBar from '@/components/toolBar.vue';
import Image from 'primevue/image';

export default {
  data() {
    return {
      image: { backgroundImage: "url(../src/assets/backgrounds/backgroundHello.svg)" }
    };
  },components:{toolBar,Image}
};

</script>

<template>
  <main>
    <toolBar/>

    <div class="hello">
      
        <div class="text">
          <h1 class="title">OpenRoad</h1>
          <h2 class="presentationText">Custom <br> Motorcycle <br> Garage</h2>
          <p class="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ipsam saepe ratione recusandae. Et amet dignissimos sint totam laborum quisquam aspernatur voluptates quas perferendis, recusandae atque laudantium illum, at dicta.</p>
        </div>

        <div :style="image" style="width:80%;" class="banner">
          <div class="cardBanner">
            <h3>Build your <br> dream <br> motorcycle</h3>
            <Image src="../src/assets/backgrounds/backgroundHello3.svg" alt="Image" width="250" height="100%" preview />
          </div>
        </div>
        
    </div>
  
  </main>
</template>

<style scoped>
main{
  background-size: cover;
  background-attachment: fixed;
  height: 90vh;
  /* padding: 2rem; */
}

.text{
  background: #000;
  width: 20%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.title{
  font-family: var(--Antonio);
  /* font-size: clamp(3.8em, 9vw, 9.5rem); */
  /* font-size: clamp(1.8em, 2vw, 11.5rem);
  font-weight: 600;
  font-style: italic; */
  z-index: 3;
  padding-left: 3rem;

}

.presentationText{
  font-family: var(--Barlow);
  font-size: clamp(3.8em, 10vw, 7.5rem);
  font-weight: 700;
  font-style: italic; 
  line-height: clamp(0.9em, 3vw, 2.5rem);
  border-left: 10px solid #ed0000;
  text-transform: uppercase;
  padding-left: 2rem;


}

.paragraph{
  text-align: justify;
  padding-left: 3rem;

}


.hello{
  display: flex;
}

.hello{
  /* height: 80vh; */
  min-height: 100vh;
}





.banner{
  z-index: 1;
  width: 80%;
}

.banner{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.cardBanner{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.67);
  width: 500px;
  height: 160px;
  border-right: 20px solid #ed0000;;
}

.cardBanner h3{
  align-content: center;
  padding-left: 3rem;
  font-family: var(--Antonio);
  text-align: right;
  font-size: clamp(0.9em, 3vw, 1.5rem);

}

@media screen and (max-width: 565px) {
.presentationText{ 
  line-height: 3.2rem;
  
}
}

</style>
