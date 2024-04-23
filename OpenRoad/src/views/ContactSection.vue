<script lang="js">
// import 'primeicons/primeicons.css';
import toolBar from '@/components/toolBar.vue';
import Image from 'primevue/image';
import AnimateOnScroll from 'primevue/animateonscroll';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';

export default {
    name: "ContactSection",
  data() {
    return {
      image: { backgroundImage: "url(../src/assets/backgrounds/background8.svg)",backgroundAttachment: 'fixed' }
    };
  }
};

</script>


<template>
    <main style="min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 3rem;">
        <div class="contact">
            <h1 class="contact-title">
                Contact Us
            </h1>
            <h2 class="contact-subtitle">
                Get in Touch
            </h2>
                   
            <div class="contact-us">
                <ul class="contacts">
                    <li class="email">
                        <h1 class="email"><i class="pi pi-envelope" style="font-size: 1.8rem"></i>E-mail</h1>
                        <p>hello@reallygreatsite.com</p>
                    </li>
                    
                    <li class="phone">
                        <h1 class="email"><i class="pi pi-phone" style="font-size: 1.8rem"></i>Phone</h1>
                        <p>+123-456-7890</p>
                    </li>

                    <li class="location">
                        <h1 class="email"><i class="pi pi-map-marker" style="font-size: 1.8rem"></i>Phone</h1>
                        <p>123 Anywhere St., Any City, ST 12345</p>
                    </li>
                </ul>

                <Image class="media-querye-01"  src="../src/assets/map.svg" alt="Image" :width="950" height="100%"  preview />
                <Image class="media-querye-02"  src="../src/assets/map.svg" alt="Image" :width="750" height="100%"  preview />
                <Image class="media-querye-03"  src="../src/assets/map.svg" alt="Image" :width="600" height="100%"  preview />
                <Image class="media-querye-04"  src="../src/assets/map.svg" alt="Image" :width="500" height="100%"  preview />
                <Image class="media-querye-05"  src="../src/assets/map.svg" alt="Image" :width="300" height="100%"  preview />                   
                
                
            </div>
        </div>
        
    </main>
</template>


<style scoped>

.contact-title{
    font-family: var(--Antonio);
    font-size: 1.5rem;
    color: #D30F20;
}

.contact-subtitle{
    font-family: var(--Antonio);
    font-size: 5.5rem;
}

.contact, .contact-us{
    min-width: 40vw;
}

.contact-us{
    display: flex;
}

.contacts{
    list-style: none;
    color: aliceblue;
    background: #D30F20;
    padding: 2rem;
}

.contacts li{
    margin-bottom: 2rem;
}

.contacts li h1{
    font-family: var(--Antonio);
    letter-spacing: 0.1rem;
    font-weight: bold;
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
}

.contacts li p{
    font-family: var(--Barlow);
    font-weight: 400;
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
}

@media screen and (min-width:1380px){
    .media-querye-01{ display: block; }
   
    .media-querye-02{ display: none; }

    .media-querye-03{ display: none; }

    .media-querye-04{ display: none; }

    .media-querye-05{ display: none; }

}

@media screen and (min-width:1170px) and (max-width:1380px){
    .media-querye-01{ display: none; }

    .media-querye-02{ display: block; }

    .media-querye-03{ display: none; }

    .media-querye-04{ display: none; }

    .media-querye-05{ display: none; }

}

@media screen and (min-width:1000px) and (max-width:1170px){
    .media-querye-01{ display: none; }

    .media-querye-02{ display: none; }

    .media-querye-03{ display: block; }

    .media-querye-04{ display: none; }

    .media-querye-05{ display: none; }

}


@media screen and (min-width:620px) and (max-width:1000px){
    .media-querye-01{ display: none; }

    .media-querye-02{ display: none; }

    .media-querye-03{ display: block; }

    .media-querye-04{ display: none; }

    .media-querye-05{ display: none; }

    .contact-us{
        flex-direction: column;
    }
}


@media screen and (min-width:510px) and (max-width:620px){
    .media-querye-01{ display: none; }

    .media-querye-02{ display: none; }

    .media-querye-03{ display: none; }

    .media-querye-04{ display: block; }

    .media-querye-05{ display: none; }

    .contact-us{
        flex-direction: column;
    }
    
    .contacts{
        padding: 1rem;
    }

    .contacts li{
        margin-bottom: 0;
    }
}


@media screen and (min-width:120px) and (max-width:510px){
    .media-querye-01{ display: none; }

    .media-querye-02{ display: none; }

    .media-querye-03{ display: none; }

    .media-querye-04{ display: none; }

    .media-querye-05{ display: block; }

    .contact-us{
        flex-direction: column;
    }
    
    .contacts{
        padding: 1rem;
    }

    .contacts li{
        margin-bottom: 0;
    }
}
</style>