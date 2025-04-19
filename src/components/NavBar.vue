<template>
  <nav class="p-4 uppercase font-bold flex justify-center items-center gap-4">
    <div class="hidden md:flex gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/#projects">Projects</RouterLink>
      <RouterLink to="/#about">About</RouterLink>
      <RouterLink to="/#contact">Contact</RouterLink>
    </div>

    <!-- Mobil knap -->
    <button class="md:hidden text-2xl" @click="toggleMenu">☰</button>
  </nav>

  <!-- Mobil menu dropdown -->
  <div v-if="showMenu" class="hamburgerMobile flex flex-col gap-2 p-4 md:hidden">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/#projects">Projects</RouterLink>
    <RouterLink to="/#about">About</RouterLink>
    <RouterLink to="/#contact">Contact</RouterLink>
  </div>
</template>

  
  <script setup>
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue'

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style>

nav {
  font-size: 25px;
  align-items: center;
  background-color: #132E8E;
  height: 90px;
  font-family: 'MerriweatherSans';

}

button {
  color: white; /* Gør hamburger-ikonet hvidt */
  font-size: 40px; /* Gør ikonet lidt større */
  cursor: pointer;
}

</style>