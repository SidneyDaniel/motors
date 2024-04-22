<script lang="js">
import { PhotoService } from '@/services/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayCustom: false,
            image: { backgroundImage: "url(../src/assets/backgrounds/background10.svg)",backgroundAttachment: 'fixed' }, 
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
};

</script>

<template>
    <main :style="image"  style="min-height: 80vh; display: flex; justify-content: center; flex-direction: column; align-items: flex-end; gap: 1rem; padding: 2rem; text-align: end;">
        
        <div class="projects">
            <h1 class="projects-title">
                Projects
            </h1>
            <h2 class="projects-subtitle">
                Our Latest Projects
            </h2>
        </div>

        <div class="gallery-projects">
          <div class="card flex justify-content-center">
              <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
                  containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
                  <template #item="slotProps">
                      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                  </template>
                  <template #thumbnail="slotProps">
                      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                  </template>
              </Galleria>

              <div v-if="images" class="grid justify-content-center" >
                  <div v-for="(image, index) of images" :key="index" class="col-offset-1 col-fixed">
                      <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer; max-width: 400px;" @click="imageClick(index)" />
                  </div>
              </div>
          </div>
        </div>
        

        
    </main>
</template>


<style scoped>

.projects-title{
    font-family: var(--Antonio);
    font-size: 1.5rem;
    color: #D30F20;
}

.projects-subtitle{
    font-family: var(--Antonio);
    font-size: 5.5rem;
}

</style>
<style>

</style>
