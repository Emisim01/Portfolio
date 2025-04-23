<template>

    <div class="pictures flex items-center">
        <div class="imgContainer picture1" @click="openLightbox"></div> <!-- Unik klasse -->
    
        <div class="pictureTextContainer flex items-center justify-center">
          <div class="textContainerPicture1 text-white">
            <p class="overskrift text-white font-bold text-3xl text-center">WIGGLES IN THE LEAVES!</p> 
            <p class="mainTexPicture1 text-white px-10 text-center">
              This photo was submitted to a photography competition where only color adjustments were allowed.
              I aimed to capture the dog's expressive eyes and the tiny water droplets clinging to its whiskers. 
              I slightly adjusted the saturation to bring out the autumn tones in the background.

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
      font-family: 'PlusJakartaSans';

    }
    
    
    .pageNavText:hover {
      color: white;
      text-decoration: none;
      font-family: 'PlusJakartaSans';

    }
    
    .picture1 {
      background-image: url('@/assets/Wigglesintheleaves.jpg');
    }

  
    .pictures {
      gap: 70px; 
      margin-bottom: 55px;
      margin-top: 55px;
    
    }
    
    .imgContainer {
      height: 452px;
      width: 331px;
      background-size: cover; /* Sørger for, at billedet fylder hele containeren */
      background-position: center; /* Centrerer billedet i containeren */
      background-repeat: no-repeat;
      margin-left: 240px;
      cursor: pointer; 
    
    }
    
    .pictureTextContainer {
      height: 450px;
      width: 650px;
      background-image: url('@/assets/textboxblob.svg');
      background-size: contain; /* Sørger for, at billedet fylder hele containeren */
      background-position: center; /* Centrerer billedet i containeren */
      background-repeat: no-repeat;
      padding: 20px; 
    }
    
    .textContainerpicture1 {
      font-size: 20px;
      font-family: 'PlusJakartaSans';
    }

    .overskrift {
      padding-bottom: 10px;
      font-family: 'MerriweatherSans';
    }

    .mainTextPicture1 {
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

  .pictures {
    flex-direction: column;
    gap: 20px; 
    margin: 20px 0; 
  }

  .textContainerPicture1 {
    font-size: 16px; 
  }

  .imgContainer {
    margin-left: 0; 
    width: 314px; 
  }

  .pictureTextContainer {
    height: 240px;
    width: 333px;
    padding: 15px; 
    background-size: contain; /* Sørger for, at baggrunden tilpasser sig */
  }

  .mainTexPicture1 {
    font-size: 12px;
    padding: 0 15px;
  }

  .overskrift {
      text-align: center; 
      font-size: 20px;
    }


}

@media (min-width: 768px) and (max-width: 1260px) {
  .pictures {
    flex-direction: column; 
    gap: 20px; 
    margin: 20px 0; 
  }

  .imgContainer {
    margin-left: 0; 
  }

  .pictureTextContainer {
    height: 450px;
    width: 650px;
    padding: 15px; 
    background-size: contain; /* Sørger for, at baggrunden tilpasser sig */
  }


  .mainTexPicture1 {
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