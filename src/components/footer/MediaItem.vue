<script setup lang="ts">
  defineProps<{
    label: string;
    url: string;
    src: string;
  }>();
</script>

<template>
  <li>
    <a :href="url" class="transition hover:opacity-50" target="_blank">
      <img :src="src" :alt="label" />
    </a>
  </li>
</template>

<style scoped></style>
