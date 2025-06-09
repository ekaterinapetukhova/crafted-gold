<template>
  <section class="mb-[3.12rem]">
    <div class="custom-container">
      <Title :label="title" class="mb-[3.12rem]" />
      <div class="flex justify-between flex-col md:flex-row items-center gap-8">
        <p class="text-white max-w-xl text-center">
          {{ text }}
        </p>
        <img :src="HistoryImg" alt="History" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Title from "../common/Title.vue";
  import HistoryImg from "../../assets/images/history.png";

  const title = "Our History";

  const text =
    "It all began in 2000 with a small group of friends and a single brew kettle. Driven by a love for great beer and a passion for craftsmanship, we founded Crafted Gold with one goal: to create unforgettable flavors that bring people together. Over the years, we’ve grown from a humble operation into a thriving brewery, embracing time-honored techniques and experimenting with unique ingredients to craft beers that stand out. Today, we’re proud to be part of the craft beer community, sharing our passion and legacy with every pint we pour.";
</script>
