<template>
  <div>
    <label
      :for="id"
      :class="{
        'flex justify-center items-center text-2xl font-semibold w-48 h-14 cursor-pointer border transition': true,
        'text-black bg-yellow': checked,
        'text-yellow border-yellow hover:text-black hover:bg-yellow': !checked,
      }"
    >
      {{ label }}
    </label>
    <input class="h-0" type="radio" :id="id" name="products-radio" :value="value" v-model="radio" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps<{
    label: string;
    value: string;
  }>();

  const id = `${props.label.toLowerCase()}-input`;

  const radio = defineModel("radio");

  const checked = computed(() => radio.value === props.value);
</script>
