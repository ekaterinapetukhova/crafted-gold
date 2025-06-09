<template>
  <div class="flex gap-x-2.5 items-start">
    <img :src="src" :alt="alt" />
    <a :class="classes" v-if="href" :href="href"><slot /></a>
    <p :class="classes" v-else><slot /></p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    src: string;
    alt: string;
    href?: string;
  }>();

  const classes = "text-white text-xl";
</script>
