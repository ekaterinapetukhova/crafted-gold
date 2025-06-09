<template>
  <section class="mb-[3.12rem]">
    <div class="custom-container">
      <Title label="What Makes Us Special" class="mb-[3.12rem]" />
      <div class="flex justify-center">
        <ul class="flex gap-x-[8.8rem]">
          <SpecialItem
            v-for="specialItem in specialItems"
            :icon="specialItem.icon"
            :label="specialItem.label"
            :content="specialItem.content"
            :key="specialItem.label"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Title from "../common/Title.vue";
  import SpecialItem from "./SpecialItem.vue";
  import LeafIcon from "../../assets/icons/leaf.svg";
  import BeerIcon from "../../assets/icons/beer.svg";
  import HandsIcon from "../../assets/icons/hands.svg";

  const specialItems = [
    {
      label: "Fresh Ingredients",
      icon: LeafIcon,
      content: "Only the finest hops, malts, and local ingredients go into every brew.",
    },
    {
      label: "Artisan Quality",
      icon: BeerIcon,
      content: "Time-honored techniques meet innovative brewing methods for exceptional flavor.",
    },
    {
      label: "Built for Community",
      icon: HandsIcon,
      content: "We believe great beer brings people together. Our brewery is a hub for connection.",
    },
  ];
</script>
