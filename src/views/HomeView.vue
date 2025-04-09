<script setup>
import { ref } from 'vue'

const marqueeText = ref(' EMILIE STRYHN SIMONSEN ')

const marqueeText2 = ref(' PORTFOLIO ')

// fucntion that repeats the text as a news marquee without space between each element, so it repeast itself  

</script>
<template>
  <main class="hero-wrapper">
    <div class="hero">

  
    <p class="marquee pb-5">
      <span class="text-white text-6xl font-bold pb-5 rolltextOne">
        {{ marqueeText }}
      </span>
      <span class="text-white text-6xl font-bold pb-5 rolltextOne">
        {{ marqueeText }}
      </span>
      <span class="text-white text-6xl font-bold pb-5 rolltextOne">
        {{ marqueeText }}
      </span>
      <span class="text-white text-6xl font-bold pb-5 rolltextOne">
        {{ marqueeText }}
      </span>
    </p>
    <p class="marquee marquee2">
      <span class="text-white text-6xl font-bold rolltextTwo">
        {{ marqueeText2 }} 
      </span>
      <span class="text-white text-6xl font-bold rolltextTwo">
        {{ marqueeText2 }} 
      </span>
      <span class="text-white text-6xl font-bold rolltextTwo">
        {{ marqueeText2 }} 
      </span>
      <span class="text-white text-6xl font-bold rolltextTwo">
        {{ marqueeText2 }} 
      </span>
      <span class="text-white text-6xl font-bold rolltextTwo">
        {{ marqueeText2 }} 
      </span>
    </p>
  </div>
  </main>

  <section class="card-section">
    <p class="section-title text-very-bluey font-bold uppercase pt-15 ">Projects</p>
  <div class="blob-row">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>

  <div class="blob-row">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>

  </section>

  <section class="about-section">

    <p class="section-abouttitle text-very-bluey font-bold uppercase pt-15 ">About me</p>
  
    <div class="about-content">
    <div class="imgContainer"></div>

    <div class="blobContainer">
      <div class="textContainer">
        <p class=" text-white font-bold">
                HI!        </p>
        <p class=" text-white px-10">
          I'm Emilie Stryhn Simonsen, a 21-year-old creative soul from Esbjerg. I have a big passion for design and all things creative,
          and I love expressing myself through my work. My portfolio is a reflection of that passion—and
          I hope you feel inspired and connected as you explore it.
        </p>
      </div>
    </div>
  </div>
    <div class="lineonly"></div>

</section>

<section class="video-section">
<div class="vidCV"></div>

<div class="lineonly"></div>
</section>

</template>

<style scoped>



.rolltextOne {
  border-right: 4px solid #fff;
  padding: 0 10px;
}

.rolltextTwo {
  border-right: 4px solid #fff;
  padding: 0 10px;
}

.hero-wrapper {
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.hero {
  width: 100vw;
  height: 750px;
  background-image: url('@/assets/hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.marquee span {
  display: inline-block;
  animation: marquee 10s linear infinite;
  white-space: nowrap;
  margin-top: 300px;
}

.marquee2 span {
  animation-delay: 0s;
  margin-top: 0;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* ------------------------------------------- PROJECT SECTION --------------------------------------------*/

.section-title {
  font-size: 54px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 55px;
  border-bottom: 3px solid var(--color-white);
  width: 85%;

}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrerer indholdet horisontalt */
  gap: 20px; /* Tilføjer mellemrum mellem overskriften og blobs */
}

.blob-row {
  display: flex; /* Placerer blobs på en række */
  justify-content: center; /* Centrerer blobs horisontalt */
  gap: 20px; /* Tilføjer mellemrum mellem blobs */
}

.blob {
  height: 361px; /* Juster størrelsen på blobs */
  width: 351px;
  background-image: url('@/assets/blob.svg');
  background-size: cover; /* Sørger for, at billedet fylder hele containeren */
  background-position: center; /* Centrerer billedet */
  background-repeat: no-repeat;
}

/* ------------------------------------------- ABOUT SECTION --------------------------------------------*/


.section-abouttitle {
  font-size: 54px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 55px;
  border-bottom: 3px solid var(--color-white);
  width: 85%;
}

.about-content {
  display: flex; /* Placerer imgContainer og blobContainer ved siden af hinanden */
  align-items: center; /* Justerer dem vertikalt */
  gap: 70px; /* Tilføjer mellemrum mellem de to containere */
  margin-bottom: 55px;
}

.imgContainer {
  height: 452px;
  width: 331px;
  background-image: url('@/assets/pictureOfMe.jpg');
  background-size: cover; /* Sørger for, at billedet fylder hele containeren */
  background-position: center; /* Centrerer billedet i containeren */
  background-repeat: no-repeat;
  margin-left: 240px;
}

.blobContainer {
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

.textContainer {
  text-align: center; /* Centrerer teksten inde i blobContainer */
  color: white; /* Sørger for, at teksten er læsbar */
  font-size: 20px;
}

/* ------------------------------------------- CV AND BUSINESS CARD SECTION --------------------------------------------*/


.lineonly {
  border-bottom: 3px solid var(--color-white);
  width: 85%; 
  margin: 0 auto; /* Centrerer stregen horisontalt */
  margin-bottom: 55px;
}


</style>