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
header {
  width: 100vw;

}

.wrapper{
  margin: 0;
  padding: 0;
  width: 100%;
}


nav {
  font-size: 25px;
  text-align: center;
  background-color: #132E8E;
  height: 90px;
  font-family: 'MerriweatherSans';

}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-family: 'MerriweatherSans';

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  font-family: 'MerriweatherSans';

}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
  font-family: 'MerriweatherSans';

}

nav a:first-of-type {
  border: 0;
}

/* Skærme under 768px (tablets og mindre) */
@media (max-width: 768px) {
  nav {
    font-size: 20px; /* Reducer fontstørrelsen */
    height: auto; /* Fjern fast højde */
  }

  nav a {
    display: block; /* Placer links i en kolonne */
    padding: 10px 0; /* Tilføj mellemrum mellem links */
    border: 0; /* Fjern venstre kant */
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
    font-weight: bold; /* Fremhæv det aktive link */
  }
}


</style>
