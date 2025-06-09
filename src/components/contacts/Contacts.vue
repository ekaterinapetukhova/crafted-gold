<template>
  <section class="relative mb-[3.12rem]">
    <div class="custom-container flex flex-col gap-y-5 items-center">
      <MainTitle
        title="Contact Us"
        subtitle="We’d love to hear from you! Whether you have questions about our beers, feedback to share, or just want to say
        hello, we’re here to help."
      />
      <div class="flex justify-between w-full h-[21.25rem]">
        <div class="flex flex-col gap-y-5">
          <h3 class="text-yellow font-semibold text-2xl">Visit Us</h3>
          <ContactsItem :src="MapIcon" alt="Map Icon">123 Craft Lane, Beer City, USA</ContactsItem>
          <ContactsItem :src="ClockIcon" alt="Clock Icon">
            Monday–Thursday: 3 PM – 10 PM
            <br />
            Friday–Saturday: 12 PM – 11 PM
            <br />
            Sunday: 12 PM – 8 PM
          </ContactsItem>
          <h3 class="text-yellow font-semibold text-2xl">Reach Out</h3>
          <ContactsItem :src="PhoneIcon" alt="Phone Icon" href="tel:12344567890">+1 (234) 456-7890</ContactsItem>
          <ContactsItem :src="MailIcon" alt="Mail Icon" href="mailto:contact@craftedgolden.com">
            contact@craftedgolden.com
          </ContactsItem>
          <div></div>
        </div>
        <div class="rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.9007888391999!2d18.985437382671318!3d50.23102770455728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ceed47f894d9%3A0x1d04d07680c66e6a!2sHigher%20Technical%20School%20in%20Katowice!5e0!3m2!1sru!2spl!4v1748360843025!5m2!1sru!2spl"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import MainTitle from "../common/MainTitle.vue";
  import ContactsItem from "./ContactsItem.vue";
  import MapIcon from "../../assets/icons/map.svg";
  import ClockIcon from "../../assets/icons/clock.svg";
  import PhoneIcon from "../../assets/icons/phone.svg";
  import MailIcon from "../../assets/icons/mail.svg";
</script>
