<script setup>
import { ref, computed, onMounted } from "vue";
import NavCard from "../cards/NavCard.vue";
defineProps({
  dialogActive: Boolean,
});
const navCards = [
  {
    imagePath:
      "/assets/images/shared/desktop/image-category-thumbnail-headphones.png",
    heading: "Headphones",
    cta: {
      text: "Shop",
      url: "/headphones",
    },
  },
  {
    imagePath:
      "/assets/images/shared/desktop/image-category-thumbnail-speakers.png",
    heading: "Speakers",
    cta: {
      text: "Shop",
      url: "/speakers",
    },
  },
  {
    imagePath:
      "/assets/images/shared/desktop/image-category-thumbnail-earphones.png",
    heading: "Earphones",
    cta: {
      text: "Shop",
      url: "/earphones",
    },
  },
];
</script>
<template>
  <div
    class="container bg-white flex flex-col gap-y-16 pt-[70px] rounded-b-lg pb-9 sm:flex-row sm:justify-between sm:gap-x-[10px] xl:gap-x-[30px]"
  >
    <NavCard
      v-for="card in navCards"
      :image-path="card.imagePath"
      :heading="card.heading"
      :cta-text="card.cta.text"
      :cta-url="card.cta.url"
    />
  </div>
</template>
<style></style>
