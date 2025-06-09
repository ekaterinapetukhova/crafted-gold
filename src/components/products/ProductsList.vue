<template>
  <ul class="w-full flex flex-col gap-y-6">
    <ProductsCard v-for="product in products" :product="product" :key="product.title" />
  </ul>
</template>

<script setup lang="ts">
  import ProductsCard from "./ProductsCard.vue";
  import type { Product } from "../../types/types.ts";

  defineProps<{
    products: Product[];
  }>();
</script>
