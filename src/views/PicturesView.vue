<template>

    <div class="pictures">
        <div class="imgContainer picture1" @click="openLightbox"></div> <!-- Unik klasse -->
    
        <div class="pictureTextContainer">
          <div class="textContainerpicture1">
            <p class="text-white font-bold">HI!</p>
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
        <img src="@/assets/Wigglesintheleaves.jpg" alt="Dog picture" />
      </div>
    
    <div class="pageNav">
      <ul class="inline-flex -space-x-px text-base h-10">

        <li>
            <router-link to="/pictures" aria-current="page" class="pageNavText flex items-center justify-center px-4 h-10 border border-gray-300 rounded-s-lg rounded-e-lg bg-very-bluey hover:bg-medium-blueybluey">1</router-link>
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
    
    .picture1 {
      background-image: url('@/assets/Wigglesintheleaves.jpg');
    }

  
    .pictures {
      display: flex; /* Placerer imgContainer og blobContainer ved siden af hinanden */
      align-items: center; /* Justerer dem vertikalt */
      gap: 70px; /* Tilføjer mellemrum mellem de to containere */
      margin-bottom: 55px;
      margin-top: 55px;
    
    }
    
    .imgContainer {
      height: 452px;
      width: 331px;
      background-image: url('@/assets/Wigglesintheleaves.jpg');
      background-size: cover; /* Sørger for, at billedet fylder hele containeren */
      background-position: center; /* Centrerer billedet i containeren */
      background-repeat: no-repeat;
      margin-left: 240px;
      cursor: pointer; /* Gør det tydeligt, at billedet kan klikkes */
    
    }
    
    .pictureTextContainer {
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
    
    .textContainerpicture1 {
      text-align: center; /* Centrerer teksten inde i blobContainer */
      color: white; /* Sørger for, at teksten er læsbar */
      font-size: 20px;
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
      cursor: pointer; /* Gør det tydeligt, at billedet kan klikkes */
    }
    
    
    </style>