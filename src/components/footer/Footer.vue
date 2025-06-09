<script setup lang="ts">
  import MediaItem from "./MediaItem.vue";
  import InstagramImg from "../../assets/icons/instagram.svg";
  import FacebookImg from "../../assets/icons/facebook.svg";
  import TwitterImg from "../../assets/icons/twitter.svg";

  const text = "2025 © All Rights Reserved";

  const mediaItems = [
    { label: "instagram", url: "https://www.instagram.com", src: InstagramImg },
    { label: "facebook", url: "https://www.facebook.com/", src: FacebookImg },
    { label: "twitter", url: "https://x.com/", src: TwitterImg },
  ];
</script>

<template>
  <footer class="py-5 bg-yellow">
    <div class="custom-container flex flex-col items-center gap-y-5">
      <ul class="flex items-center gap-x-8">
        <MediaItem
          v-for="mediaItem in mediaItems"
          :label="mediaItem.label"
          :src="mediaItem.src"
          :url="mediaItem.url"
          :key="mediaItem.label"
        />
      </ul>
      <p>{{ text }}</p>
    </div>
  </footer>
</template>
