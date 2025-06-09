<script setup lang="ts">
  defineProps<{
    label: string;
  }>();
</script>

<template>
  <h2 class="text-white text-[2.5rem] font-bold text-center pt-6">{{ label }}</h2>
</template>

<style scoped></style>
