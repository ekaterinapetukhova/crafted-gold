<script setup lang="ts">
  import { RouterLink } from "vue-router";

  defineProps<{
    url: string;
    label?: string;
    classes?: string;
    src?: string;
  }>();
</script>

<template>
  <RouterLink :to="url" :class="classes">
    <img v-if="src" :src="src" :alt="label" />
    <span v-else>{{ label }}</span>
  </RouterLink>
</template>
