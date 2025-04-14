<template>

    <div class="illustration">
        <div class="imgContainer illustration2" @click="openLightbox"></div> <!-- Unik klasse -->
    
        <div class="illustrationTextContainer">
          <div class="textContainerIllustration2">
            <p class="overskrift text-white font-bold text-3xl items-center">RAMEN POSTER!</p> 
            <p class="mainText text-white px-10">
              This is my own project - not a school project. I wanted to create a poster that would be eye-catching and fun.
              I used bright colors and playful typography to achieve this.
              The ramen bowl is a nod to my love of Japanese culture and cuisine. This is one of my first projects on my own.
            </p>
       
          </div>
        </div>
      </div>
    
      <!-- Lightbox -->
      <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
        <img src="@/assets/Ramenposter.png" alt="Ramen Illustration" />
      </div>
    
    <div class="pageNav">
      <ul class="inline-flex -space-x-px text-base h-10">
      
        <li>
            <router-link to="/illustrations" class="pageNavText flex items-center justify-center px-4 h-10  bg-very-bluey rounded-s-lg hover:bg-medium-blueybluey">1</router-link>
        </li>
        <li>
            <router-link to="/illustration2" aria-current="page" class="pageNavText flex items-center justify-center px-4 h-10 border border-gray-300 bg-very-bluey hover:bg-medium-blueybluey">2</router-link>
        </li>
        
        <li>
            <router-link to="/illustration3" class="pageNavText flex items-center justify-center px-4 h-10  bg-very-bluey hover:bg-medium-blueybluey">3</router-link>
        </li>
        <li>
            <router-link to="/illustration4" class="pageNavText flex items-center justify-center px-4 h-10  bg-very-bluey rounded-e-lg hover:bg-medium-blueybluey">4</router-link>
        </li>
      
      </ul>
    </div>
    
    
    
    </template>
    
    <script setup>
    import { ref } from 'vue'
    
    const isLightboxOpen = ref(false)
    
    function openLightbox() {
      isLightboxOpen.value = true
    }
    
    function closeLightbox() {
      isLightboxOpen.value = false
    }
    </script>
    
    <style>
    
    .pageNav {
      display: flex; /* Gør det muligt at centrere indholdet */
      justify-content: center; /* Centrerer horisontalt */
      align-items: center; /* Centrerer vertikalt */
      color: white;
      margin: 55px 0;
      font-family: 'PlusJakartaSans';

    }
    
    
    .pageNavText:hover {
      color: white;
      text-decoration: none;
      font-family: 'PlusJakartaSans';

    }

  

    .illustration1 {
  background-image: url('@/assets/disco.png');
}

.illustration2 {
  background-image: url('@/assets/Ramenposter.png');
}

.illustration3 {
  background-image: url('@/assets/livelaughlove.png');
}
       
.illustration4 {
  background-image: url('@/assets/internationalday.png');
}
    
    .illustration {
      display: flex; /* Placerer imgContainer og blobContainer ved siden af hinanden */
      align-items: center; /* Justerer dem vertikalt */
      gap: 70px;
      margin-bottom: 55px;
      margin-top: 55px;
    
    }
    
    .imgContainer {
  height: 452px;
  width: 331px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-left: 240px;

}
    
    .illustrationTextContainer {
      height: 450px;
      width: 650px;
      background-image: url('@/assets/textboxblob.svg');
      background-size: contain; /* Sørger for, at billedet fylder hele containeren */
      background-position: center; /* Centrerer billedet i containeren */
      background-repeat: no-repeat;
      display: flex; /* Sørger for, at tekst kan placeres inde i blobContainer */
      align-items: center; /* Centrerer teksten vertikalt */
      justify-content: center; /* Centrerer teksten horisontalt */
      padding: 20px; /* Tilføjer lidt indre afstand til teksten */
    }
    
    .textContainerIllustration2 {
      color: white; /* Sørger for, at teksten er læsbar */
      font-size: 20px;
    }

    .overskrift {
      text-align: center;
      padding-bottom: 10px;

    }


    .lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* Mørk baggrund */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Sørger for, at den er øverst */
}

.lightbox img {
  max-width: 90%; /* Sørger for, at billedet ikke fylder hele skærmen */
  max-height: 90%; /* Sørger for, at billedet ikke går uden for skærmen */
  border-radius: 2px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
  cursor: pointer; 
}
    
    @media (max-width: 468px) {
  .pageNav {
    margin: 35px 0; 
  }

  .pageNavText {
    font-size: 14px; 
    padding: 25px;
  }

  .illustration {
    flex-direction: column;
    gap: 20px; 
    margin: 20px 0; 
  }

  .imgContainer {
    margin-left: 0; 
  }

  .illustrationTextContainer {
    height: 289px;
    width: 650px;
    padding: 15px; 
    background-size: contain; /* Sørger for, at baggrunden tilpasser sig */
  }

  .textContainerIllustration2 {
    font-size: 16px; 
    text-align: center; 
  }


  .illustration {
    flex-direction: column; 
    gap: 20px; 
    margin: 20px 0; 
  }

  .imgContainer {
    margin-left: 0; 
  }

  .illustrationTextContainer {
    height: 289px;
    width: 650px;
    padding: 15px; 
    background-size: contain; /* Sørger for, at baggrunden tilpasser sig */
  }

  .mainText {
    font-size: 15px; /* Reducer tekststørrelsen */
    text-align: center; /* Bevar centreret tekst */
    padding: 0 129px;

  }

  .overskrift {
      text-align: center; /* Centrerer teksten inde i blobContainer */
      font-size: 25px;
    }



}

@media (max-width: 1260px){
  .illustration {
    flex-direction: column; 
    gap: 20px; 
    margin: 20px 0; 
  }

  .imgContainer {
    margin-left: 0; 
  }

  .illustrationTextContainer {
    height: 289px;
    width: 650px;
    padding: 15px; 
    background-size: contain; /* Sørger for, at baggrunden tilpasser sig */
  }

  .mainText {
    font-size: 15px; /* Reducer tekststørrelsen */
    text-align: center; /* Bevar centreret tekst */
    padding: 0 130px;

  }

  .overskrift {
      text-align: center; /* Centrerer teksten inde i blobContainer */
      font-size: 25px;
    }


}



    
    
    </style>