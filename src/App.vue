<template>
  <div class="min-h-full flex flex-col">
    <Header />
    <Main>
      <RouterView />
    </Main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from "./components/header/Header.vue";
  import Footer from "./components/footer/Footer.vue";
  import Main from "./components/common/Main.vue";
</script>
