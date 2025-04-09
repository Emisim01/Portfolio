<template>

    <div class="illustration">
        <div class="imgContainer illustration4" @click="openLightbox"></div> <!-- Unik klasse -->
    
        <div class="illustrationTextContainer">
          <div class="textContainerIllustration4">
            <p class="text-white font-bold">internationalday!</p>
            <p class="text-white px-10">
              I'm Emilie Stryhn Simonsen, a 21-year-old creative soul from Esbjerg. I have a big passion for design and all things creative,
              and I love expressing myself through my work. My portfolio is a reflection of that passion—and
              I hope you feel inspired and connected as you explore it.
            </p>
          </div>
        </div>
      </div>
    
      <!-- Lightbox -->
      <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
        <img src="@/assets/internationalday.png" alt="international Day Illustration" />
      </div>
    
    <div class="pageNav">
      <ul class="inline-flex -space-x-px text-base h-10">
       
        <li>
          <router-link to="/illustration1" class="pageNavText flex items-center justify-center px-4 h-10  bg-very-bluey rounded-s-lg hover:bg-medium-blueybluey">1</router-link>
        </li>
        <li>
            <router-link to="/illustration2" class="pageNavText flex items-center justify-center px-4 h-10  bg-very-bluey hover:bg-medium-blueybluey">2</router-link>
        </li>
        
        <li>
            <router-link to="/illustration3" class="pageNavText flex items-center justify-center px-4 h-10  bg-very-bluey hover:bg-medium-blueybluey">3</router-link>
        </li>
        <li>
            <router-link to="/illustration4" aria-current="page" class="pageNavText flex items-center justify-center rounded-e-lg px-4 h-10 border border-gray-300 bg-very-bluey hover:bg-medium-blueybluey">4</router-link>
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
    }
    
    
    .pageNavText:hover {
      color: white;
      text-decoration: none;
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
      gap: 70px; /* Tilføjer mellemrum mellem de to containere */
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
    
    .textContainerIllustration4 {
      text-align: center; /* Centrerer teksten inde i blobContainer */
      color: white; /* Sørger for, at teksten er læsbar */
      font-size: 20px;
    }
    

    
    
    </style>