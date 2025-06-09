<script setup lang="ts">
  defineProps<{ title: string; subtitle?: string }>();
</script>

<template>
  <h1 class="text-white text-6xl font-bold text-center">{{ title }}</h1>
  <p v-if="subtitle" class="text-white text-xl font-medium text-center mb-5">{{ subtitle }}</p>
</template>
