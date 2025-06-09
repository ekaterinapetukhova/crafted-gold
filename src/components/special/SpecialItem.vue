<template>
  <li class="flex flex-col w-56 justify-center text-center gap-y-5">
    <img :src="icon" :alt="label.toLowerCase()" class="h-20" />
    <h3 class="text-white">{{ label }}</h3>
    <p class="text-white">{{ content }}</p>
  </li>
</template>

<script setup lang="ts">
  defineProps<{
    label: string;
    icon: string;
    content: string;
  }>();
</script>
