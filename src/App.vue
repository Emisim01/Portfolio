<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

</script>

<template>
  <header>

    <div class="wrapper">

      <NavBar />
    </div>
  </header>

  <RouterView />
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
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  /* padding: 0 1rem; */
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
