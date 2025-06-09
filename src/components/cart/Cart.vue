<template>
  <section>
    <div class="custom-container flex flex-col gap-y-5">
      <MainTitle title="Cart" subtitle="Review your items before checkout. Get ready to enjoy the finest brews!" />
      <ul class="flex flex-col gap-y-3">
        <CartCard
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          :title="cartItem.title"
          :quantity="cartItem.quantity"
          :price="cartItem.price"
          :id="cartItem.id"
        />
      </ul>
      <div class="flex justify-end gap-x-5">
        <span :class="totalPriceClasses">Total price:</span>
        <span :class="totalPriceClasses">${{ totalPrice }}</span>
      </div>
      <Button type="primary" label="Buy" classes="!w-24 !h-12 ml-auto" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import MainTitle from "../common/MainTitle.vue";
  import { computed } from "vue";
  import Button from "../common/Button.vue";
  import CartCard from "./CartCard.vue";
  import { store } from "../../store/global-store.ts";

  const cartItems = computed(() => {
    return [...store.items.values()].map((item) => {
      return {
        id: item.product.slug,
        title: item.product.title,
        quantity: item.quantity,
        price: item.product.price * item.quantity,
      };
    });
  });

  const totalPrice = computed(() => {
    return cartItems.value.reduce((acc, item) => acc + item.price, 0);
  });

  const totalPriceClasses = "text-white text-3xl font-semibold";
</script>
