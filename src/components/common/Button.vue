<script setup lang="ts">
  defineProps<{
    type: "primary" | "secondary";
    label: string;
    classes?: string;
    onClick?: () => void;
  }>();
</script>

<template>
  <button
    :class="`${type === 'primary' ? 'bg-yellow text-black hover:bg-transparent hover:text-yellow hover:border-yellow' : 'border-yellow text-yellow hover:bg-yellow hover:text-black'} ${classes ?? ''} border text-xl font-semibold w-56 h-14 flex justify-center items-center cursor-pointer transition`"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
