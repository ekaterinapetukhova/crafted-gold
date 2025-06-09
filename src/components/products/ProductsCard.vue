<template>
  <li class="border border-yellow rounded flex justify-between w-full">
    <div class="py-5 pl-6 flex flex-col gap-y-5">
      <h3 class="text-yellow text-2xl font-semibold">{{ product.title }}</h3>
      <p class="text-white text-xl max-w-2xl grow">{{ product.content }}</p>
      <div class="flex gap-x-5 items-center">
        <span class="text-white font-bold text-3xl">${{ product.price }}</span>
        <Button
          label="Buy"
          type="secondary"
          classes="!w-32 !h-10"
          :on-click="
            () => {
              addProduct(product);
            }
          "
        />
      </div>
    </div>
    <img :src="ProductImg" alt="Product" />
  </li>
</template>

<script setup lang="ts">
  import Button from "../common/Button.vue";
  import ProductImg from "../../assets/images/product.jpg";
  import { addProduct } from "../../store/global-store.ts";
  import type { Product } from "../../types/types.ts";

  defineProps<{
    product: Product;
  }>();
</script>
