<template>
  <li class="grid grid-cols-4 items-center border-b border-b-yellow py-8 last:border-0">
    <h3 class="text-white text-2xl font-semibold">{{ title }}</h3>
    <img class="h-28 mx-auto" :src="BeerImage" alt="Beer" />
    <div class="flex gap-x-5 mx-auto">
      <Button type="secondary" label="-" :classes="buttonClasses" @click="decreaseQuantity(id)" />
      <span class="text-white text-3xl font-semibold">{{ quantity }}</span>
      <Button type="secondary" label="+" :classes="buttonClasses" @click="increaseQuantity(id)" />
    </div>
    <span class="text-white text-3xl font-semibold text-end">$ {{ price }}</span>
  </li>
</template>

<script setup lang="ts">
  import Button from "../common/Button.vue";
  import BeerImage from "../../assets/images/beer.png";
  import { decreaseQuantity, increaseQuantity } from "../../store/global-store.ts";

  defineProps<{
    title: string;
    quantity: number;
    price: number;
    id: string;
  }>();

  const buttonClasses = "!w-10 !h-10";
</script>
