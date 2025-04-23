<template>

   
<div class="illustration flex items-center">
        <div class="imgContainer illustration4" @click="openLightbox"></div> <!-- Unik klasse -->
    
        <div class="illustrationTextContainer flex items-center justify-center">
          <div class="textContainerIllustration4 text-white">
            <p class="overskrift text-white font-bold text-3xl text-center">INTERNATIONAL DAY!</p> 
            <p class="mainTextIllustration4 text-white px-10 text-center">
              This was a school project during my first semester – although it wasn't mandatory. 
              The assignment was to create a poster for International Day,
              a celebration that highlights food from students' home countries. 
              There were no specific guidelines, so this is my own interpretation of the task.

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
          <router-link to="/illustrations" class="pageNavText flex items-center justify-center px-4 h-10  bg-very-bluey rounded-s-lg hover:bg-medium-blueybluey">1</router-link>
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
      display: flex;
      justify-content: center;
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
      background-position: center;
      background-repeat: no-repeat;
      padding: 20px; 
      font-family: 'PlusJakartaSans';
    }
    
    .textContainerIllustration4 {
      font-size: 20px;
      font-family: 'PlusJakartaSans';
    }

    .overskrift {
      padding-bottom: 10px;
      font-family: 'MerriweatherSans';
    }

    .mainTextIllustration4 {
      padding-bottom: 10px;
      font-size: 18px;
      font-family: 'PlusJakartaSans';
    }

    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8); 
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000; 
    }

    .lightbox img {
      max-width: 90%; /* Sørger for, at billedet ikke fylder hele skærmen */
      max-height: 90%; /* Sørger for, at billedet ikke går uden for skærmen */
      border-radius: 2px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); 
      cursor: pointer; 
    }
    
      @media (max-width: 768px) {

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

    .textContainerIllustration4 {
      font-size: 16px; 
    }

    .imgContainer {
      margin-left: 0; 
      width: 314px;
    }

    .illustrationTextContainer {
      height: 240px;
      width: 333px;
      padding: 15px; 
      background-size: contain; /* Sørger for, at baggrunden tilpasser sig */
    }

    .mainTextIllustration4 {
      font-size: 12px; 
      padding: 0 7px;
    }

    .overskrift {
      text-align: center; 
      font-size: 20px;
    }


}

      @media (min-width: 768px) and (max-width: 1260px) {

    .illustration {
      flex-direction: column; 
      gap: 20px; 
      margin: 20px 0; 
    }

    .imgContainer {
      margin-left: 0; 
    }

    .illustrationTextContainer {
      height: 450px;
      width: 650px;
      padding: 15px; 
      background-size: contain;
    }


    .mainTextIllustration4 {
      font-size: 18px; 
      text-align: center;
      padding: 0 50px;
    }

    .overskrift {
      text-align: center; 
      font-size: 25px;
    }

}
    
    
    </style>