<template>
  <header class="custom-container mx-auto pt-6 w-full">
    <div class="flex items-center justify-between">
      <LinkTo :with-img="true" :src="LogoIcon" url="/" />
      <nav>
        <ul class="flex gap-x-9">
          <NavItem v-for="navItem in navItems" :key="navItem.label" :label="navItem.label" :url="navItem.url" />
        </ul>
      </nav>
      <div class="relative">
        <LinkTo classes="cursor-pointer" url="/cart" label="Cart" :src="CartIcon"></LinkTo>
        <span
          v-if="totalQuantity"
          class="text-[0.625rem] text-white font-bold bg-yellow rounded-full w-4 h-4 absolute -top-1 -right-1 flex justify-center items-center"
        >
          {{ totalQuantity }}
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import LogoIcon from "../../assets/icons/logo.svg";
  import CartIcon from "../../assets/icons/cart.svg";
  import LinkTo from "../common/LinkTo.vue";
  import NavItem from "./NavItem.vue";
  import { computed } from "vue";
  import { store } from "../../store/global-store.ts";

  const navItems = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "Contacts", url: "/contacts" },
  ];

  const totalQuantity = computed(() => [...store.items.values()].reduce((acc, item) => acc + item.quantity, 0));
</script>
