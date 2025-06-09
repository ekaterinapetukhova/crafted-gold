<script setup lang="ts">
  import BeerImg from "../../assets/images/beer.png";

  defineProps<{
    label: string;
    content: string;
  }>();
</script>

<template>
  <li class="w-lg flex flex-col items-center p-5 text-center gap-y-5 mb-10">
    <img :src="BeerImg" alt="Beer" class="h-80" />
    <h3 class="text-yellow text-center text-2xl font-semibold">{{ label }}</h3>
    <p class="text-white">{{ content }}</p>
  </li>
</template>
