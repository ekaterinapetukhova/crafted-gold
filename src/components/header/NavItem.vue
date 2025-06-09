<template>
  <li>
    <LinkTo :label="label" :url="url" classes="text-white text-xl hover:text-yellow transition" />
  </li>
</template>

<script setup lang="ts">
  import LinkTo from "../common/LinkTo.vue";

  defineProps<{
    label: string;
    url: string;
  }>();
</script>
