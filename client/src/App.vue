<script setup>
import NavBar from './components/NavBar.vue';
import { useStore } from 'vuex';
import { computed, onBeforeMount, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Get our store
const store = useStore();
const router = useRouter();
// use store.commit to run any mutation. Below we are running the loadStore mutation


</script>

<template>
  <div id="app">

    <NavBar />
    <main class="pt-14">
      <router-view />
    </main>
  </div>
</template>

<style></style>
