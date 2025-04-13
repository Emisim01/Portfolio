<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <header>

    <div class="wrapper">

      <NavBar />
    </div>
  </header>

  <RouterView />
  <Footer />
</template>

<style scoped>


nav {
  font-size: 25px;
  text-align: center;
  background-color: #132E8E;
  height: 90px;
  font-family: 'MerriweatherSans';

}





/* Skærme under 768px (tablets og mindre) */
 
  @media (max-width: 768px) {
 
    nav {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 12px 0;
  }


}




</style>
