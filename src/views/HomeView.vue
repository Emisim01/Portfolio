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
    <p class="section-title text-6xl text-very-blue font-bold uppercase pt-15 ">Projects</p>


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

.section-title {
  text-align: center;
  margin-left: 120px;
  margin-bottom: 70px;
  border-bottom: 3px solid var(--color-white);
  width: 100%

}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>