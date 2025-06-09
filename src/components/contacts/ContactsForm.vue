<template>
  <section>
    <div class="custom-container flex flex-col items-center gap-y-10">
      <Title label="Feedback & Inquiries" />
      <form @click.prevent class="flex flex-col gap-y-5 w-md">
        <ContactsFormField placeholder="Name" />
        <ContactsFormField placeholder="Email" />
        <ContactsFormField placeholder="Message" :is-text="true" />
        <div class="flex gap-x-5">
          <Button label="Attach File" type="primary" />
          <Button label="Send" type="secondary" />
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Title from "../common/Title.vue";
  import ContactsFormField from "./ContactsFormField.vue";
  import Button from "../common/Button.vue";
</script>
