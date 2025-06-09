<template>
  <div>
    <textarea v-if="isText" :class="`${classes} resize-none h-32`" :placeholder="placeholder" />
    <input v-else :placeholder="placeholder" :class="classes" type="text" />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    placeholder: string;
    isText?: boolean;
  }>();

  const classes = "border-b border-yellow text-yellow text-xl py-1.5 pl-1.5 outline-none w-full";
</script>
