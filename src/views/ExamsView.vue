<template>

    <div class="exam flex items-center">
        <div class="imgContainer exam1" @click="openLightbox"></div> <!-- Unik klasse -->
    
        <div class="examTextContainer flex items-center justify-center">
          <div class="textContainerExam1 text-white">
            <p class="overskrift text-white font-bold text-3xl text-center uppercase">Our first exam project</p>
            <p class="mainText gradeText text-white px-10 font-bold text-center"> Grade: 12</p>
            <p class="mainText mainTextExam text-white px-10 text-center"> This exam project was created in a group of four.
              Our task was to design a website encouraging people to sign the Global Plastic Treaty.
              I was responsible for a significant part of both the coding and the design.</p>
              <p class="mainText wayToWeb text-white px-10 font-bold ">  You can check out the website by clicking the link below. </p>
            <a href="https://lunadamm.github.io/plastic-webpage/" class="blob-text uppercase" target="_blank" >https://plastic-webpage/</a>
        </div>
        </div>
      </div>

      
    
      <!-- Lightbox -->
      <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
        <img src="@/assets/website.png" alt="First exam project" />
      </div>
    
    <div class="pageNav">
      <ul class="inline-flex -space-x-px text-base h-10">
        
        <li>
            <router-link to="/exams" aria-current="page" class="pageNavText flex items-center justify-center px-4 h-10 border border-gray-300 rounded-s-lg rounded-e-lg bg-very-bluey hover:bg-medium-blueybluey">1</router-link>
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
  align-items: center; 
  color: white;
  margin: 55px 0;
  font-family: 'PlusJakartaSans';    
}
    
.pageNavText:hover {
  color: white;
  text-decoration: none;
  font-family: 'PlusJakartaSans'; 
}
    
.exam1 {
  background-image: url('@/assets/website.png');
}
        
.exam {
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
  margin-left: 240px;
  cursor: pointer;
}
    
.examTextContainer {
  height: 450px;
  width: 650px;
  background-image: url('@/assets/textboxblob.svg');
  background-size: contain; /* Sørger for, at billedet fylder hele containeren */
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
}
    
.textContainerExam1 {
  font-size: 20px;
  font-family: 'PlusJakartaSans';
}

.overskrift {
  padding-bottom: 10px;
  font-family: 'MerriweatherSans';
}

.mainText {
  padding-bottom: 10px;
  font-size: 18px;
  font-family: 'PlusJakartaSans';
}

.mainTextExam {
  padding-bottom: 10px;
  font-size: 18px;
  font-family: 'PlusJakartaSans';
}

.blob-text {
  display: block;
  text-align: center;
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

.exam {
  flex-direction: column;
  gap: 20px; 
  margin: 20px 0; 
}

.textContainerExam1 {
  font-size: 16px; 
}

.imgContainer {
  margin-left: 0; 
  width: 314px;
}

.examTextContainer {
  height: 240px;
  width: 333px;
  padding: 15px; 
  background-size: contain; 
}

.mainTextExam {
  font-size: 12px; 
  padding: 0 12px;
}

.overskrift {
  text-align: center;
  font-size: 20px;
}

.wayToWeb {
  display: none;
}

.blob-text{
  display: block;
  font-size: 12px;
  padding: 0 21px;
  text-align: center;
  margin-top: 10px;
}

.gradeText {
  display: none;
}


}

    @media (min-width: 768px) and (max-width: 1260px) {
.exam {
  flex-direction: column; 
  gap: 20px; 
  margin: 20px 0; 
}

.imgContainer {
  margin-left: 0; 
}

.examTextContainer {
  height: 450px;
  width: 650px;
  padding: 15px; 
  background-size: contain;
}

.mainText {
  font-size: 18px; 
  padding: 0 61px;
  padding-bottom: 10px;
}

.mainTextExam {
  font-size: 18px; 
  text-align: center; 
  padding: 0 37px;
}

.blob-text{
  font-size: 19px; 
  padding: 0 80px;
  text-align: center;
}

.overskrift {
  text-align: center;
  font-size: 25px;
}

}


</style>