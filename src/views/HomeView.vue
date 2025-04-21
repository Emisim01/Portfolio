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
    <p class="marquee2">
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

  <section id="projects" class="card-section">
    <p class="section-title text-very-bluey font-bold uppercase pt-7 ">Projects</p>
  <div class="blob-row">
    <div class="blob">
      <router-link to="/illustrations" class="blob-text1 uppercase">Illustrations</router-link>
    </div>
    <div class="blob">
      <router-link to="/pictures" class="blob-text uppercase">Pictures</router-link>
    </div>
    <div class="blob">
      <router-link to="/ux" class="blob-text uppercase">UX</router-link>
    </div>
    </div>

  <div class="blob-row">
    <div class="blob">
      <router-link to="/frontend development" class="blob-text1 uppercase">Frontend development</router-link>
    </div>
    <div class="blob">
      <router-link to="/exams" class="blob-text uppercase">Exams</router-link>
    </div>
    <div class="blob">
      <router-link to="/production" class="blob-text uppercase">Production</router-link>
    </div>
  </div>

  </section>

  <section  id="about" class="about-section">

    <p class="section-abouttitle text-very-bluey font-bold uppercase ">About me</p>
  
    <div class="about-content">
    <div class="imgContainer "></div>

    <div class="blobContainer ">
      <div class="textContainer">
        <p class=" text-white font-bold"> HI!</p>
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
  <div class="vidCV">
    <iframe 
      src="https://www.youtube.com/embed/n8zP014DeQE" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
  <div class="lineonly"></div>
</section>

<section id="contact" class="contact-section">
  <div class="blob-row">
    <div class="blob">
      <a href="/assets/pdf/MyCV.pdf" class="blob-text uppercase">Download: CV</a>

    </div>
    <div class="blob">
      <a href="/assets/pdf/businessKort.pdf" class="blob-text uppercase">Download: Business card</a>

    </div>
  </div>
  
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
  width: 100%;
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
  font-family: 'MerriweatherSans';

}

.marquee2 {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  font-family: 'MerriweatherSans';

}

.marquee span {
  display: inline-block;
  animation: marquee 10s linear infinite;
  white-space: nowrap;
  margin-top: 300px;
  font-family: 'MerriweatherSans';

}

.marquee2 span {
  display: inline-block;
  animation: marquee 10s linear infinite;
  white-space: nowrap;
  font-family: 'MerriweatherSans';

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
  font-family: 'MerriweatherSans';
}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 
}

.blob-row {
  display: flex; 
  justify-content: center; /* Centrerer blobs horisontalt */
  gap: 27px; 
}

.blob {
  height: 361px; 
  width: 351px;
  background-image: url('@/assets/blob.svg');
  background-size: cover; /* Sørger for, at billedet fylder hele containeren */
  background-position: center;
  background-repeat: no-repeat;
  display: flex; 
  justify-content: center; /* Centrerer teksten horisontalt */
  align-items: center; /* Centrerer teksten vertikalt */
  text-align: center; 
  color: white; 
  font-size: 16px;
  font-weight: bold; 
  margin-bottom: 55px;
}

.blob-text {
  text-decoration: none;
  color: white; 
  font-weight: bold;
  font-size: 23px;
  font-family: 'PlusJakartaSans';
}

.blob-text:hover {
  font-size: 28px;
  font-family: 'PlusJakartaSans';

}

.blob-text1 {
  text-decoration: none; 
  color: white; 
  font-weight: bold;
  font-size: 23px;
  padding-right: 75px;
  font-family: 'PlusJakartaSans';

}

.blob-text1:hover {
  font-size: 28px;
  font-family: 'PlusJakartaSans';

}
/* ------------------------------------------- ABOUT SECTION --------------------------------------------*/


.section-abouttitle {
  font-size: 54px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 55px;
  border-bottom: 3px solid var(--color-white);
  width: 85%;
  font-family: 'MerriweatherSans';

}

.about-content {
  display: flex; 
  align-items: center;
  gap: 70px; 
  margin-bottom: 55px;
}

.imgContainer {
  height: 452px;
  width: 331px;
  background-image: url('@/assets/pictureOfMe.png');
  background-size: contain; /* Sørger for, at billedet fylder hele containeren */
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
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding: 20px;
}

.textContainer {
  text-align: center; 
  color: white; 
  font-size: 20px;
  font-family: 'PlusJakartaSans';

}

/* ------------------------------------------- VIDEO CV --------------------------------------------*/


.vidCV {
  max-width: 1000px; 
  aspect-ratio: 16 / 9; 
  margin: 0 auto; /* Centrerer videoen horisontalt */
  border-radius: 5px; 
  margin-bottom: 55px;
  border: 3px solid var(--color-white);
 
}

.vidCV iframe {
  width: 100%;
  height: 100%; 
}

/* ------------------------------------------- CV AND BUSINESS CARD SECTION --------------------------------------------*/


.lineonly {
  border-bottom: 3px solid var(--color-white);
  width: 85%; 
  margin: 0 auto; /* Centrerer stregen horisontalt */
  margin-bottom: 55px;
}


@media (max-width: 768px) {
  .hero {
    height: 350px;
  }

  .marquee {
    position: absolute;
    top: 38%;
  }

  .marquee2 {
    position: absolute;
    top: 50%;
  }

  .marquee span {
    font-size: 30px;
    margin-top: 0px;
  }

  .marquee2 span {
    font-size: 30px;
    margin-top: 1px;

  }

  .blob-row {
    flex-direction: column;
    align-items: center;
  }

  .blob {
    height: 300px; 
    width: 290px; 
  }

  .blob-text, .blob-text1 {
    font-size: 20px; 
  }

  .blob-text:hover, .blob-text1:hover {
    font-size: 25px; 
  }

  .section-title {
    font-size: 45px; 
  }

  .section-abouttitle {
    font-size: 45px; 
  }

  .about-content {
    flex-direction: column; 
    gap: 20px;
  }

  .imgContainer {
 display:none;
  }

  .blobContainer {
    width: 354px; 
    height: 254px; 
  }

  .textContainer {
    font-size: 13px; 
    padding: 3px 0;
  }
}

@media (min-width: 768px) and (max-width: 1260px) {

  .about-content {
    flex-direction: column;
  }


  .imgContainer {
 display:none;
  }

  .blob-row {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
  }

  .blobContainer {
    height: 450px;
    width: 650px;
  }

  .textContainer {
    font-size: 20px;
    padding: 3px 0;
  }
} 





</style>