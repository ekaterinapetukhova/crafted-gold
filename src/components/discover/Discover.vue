<template>
  <section>
    <div class="custom-container">
      <Title :label="title" class="mb-5" />
      <p class="text-white text-center mb-[3.12rem]">{{ subTitle }}</p>

      <Swiper
        :modules="[Navigation, Pagination]"
        navigation
        :pagination="{ clickable: true }"
        :slides-per-view="1"
        :centered-slides="true"
        :loop="true"
        class="relative"
      >
        <SwiperSlide v-for="discoverItem in discoverItems">
          <DiscoverItem :label="discoverItem.label" :content="discoverItem.content" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination } from "swiper/modules";
  import DiscoverItem from "./DiscoverItem.vue";
  import Title from "../common/Title.vue";

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  const title = "Discover Our Beers";
  const subTitle = "Crafted for every taste, explore the flavors we’re known for.";

  const discoverItems = [
    {
      label: "Golden Harvest Wheat Ale",
      content: "A crisp, refreshing wheat beer with hints of citrus and honey.",
    },
    { label: "Artisan Quality", content: "A crisp, refreshing wheat beer with hints of citrus and honey." },
    {
      label: "Ironclad Stout",
      content: "A crisp, refreshing wheat beer with hints of citrus and honey.",
    },
  ];
</script>

<style>
  .swiper-slide-active {
    display: flex !important;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 4.6875rem;
    height: 4.6875rem;
    color: transparent;
    cursor: pointer;
    position: absolute;
    top: 25%;
    z-index: 10;
    transition: all 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }

  .swiper-button-prev {
    background-image: url("../../assets/icons/arrow-left.svg");
  }

  .swiper-button-next {
    background-image: url("../../assets/icons/arrow-right.svg");
    right: 0;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    width: 30px;
    height: 4px;
    background: #444;
    opacity: 1;
    border-radius: 2px;
    margin: 0 4px;
    transition: background 0.3s;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    background: #f9c74f;
  }
</style>
