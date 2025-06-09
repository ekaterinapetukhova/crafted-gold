<template>
  <section class="h-[50rem] relative mb-[3.12rem]">
    <div class="w-full absolute h-full -z-10">
      <div class="h-full w-full bg-black/75 absolute top-0 left-0"></div>
      <img class="w-full h-full object-cover absolute top-0 left-0 -z-10" :src="BgImage" alt="Background image" />
    </div>
    <div class="custom-container flex flex-col justify-center items-center gap-y-5 h-full">
      <MainTitle :title="title" />
      <p class="text-white text-center max-w-2xl text-xl">{{ text }}</p>
      <LinkTo
        url="/products"
        classes="text-xl font-semibold w-56 h-14 flex justify-center items-center bg-gradient-to-b from-[#F6D365] to-[#DDA82A] hover:from-[#ffe69a] hover:to-[#e3b334] transition"
        :label="buttonLabel"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import LinkTo from "../common/LinkTo.vue";
  import BgImage from "../../assets/images/bg.jpg";
  import MainTitle from "../common/MainTitle.vue";

  const title = "Real Craft Beer";
  const text =
    "Brewed with passion, crafted to perfection. From carefully selected hops to time-honored brewing techniques, our beers deliver a rich and unforgettable flavor experience. Discover the art of true craft beer.";
  const buttonLabel = "Explore Our Beers";
</script>
