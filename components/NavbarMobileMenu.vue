<script setup>
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
      url: "#",
    },
  },
  {
    imagePath:
      "/assets/images/shared/desktop/image-category-thumbnail-speakers.png",
    heading: "Speakers",
    cta: {
      text: "Shop",
      url: "#",
    },
  },
  {
    imagePath:
      "/assets/images/shared/desktop/image-category-thumbnail-earphones.png",
    heading: "Earphones",
    cta: {
      text: "Shop",
      url: "#",
    },
  },
];
//TODO use native dialog api
</script>
<template>
  <dialog class="open:bg-black/40 h-screen w-full p-0" :open="dialogActive">
    <div
      class="container bg-white flex flex-col gap-y-16 pt-[70px] rounded-b-lg p-9"
    >
      <NavbarCard
        v-for="card in navCards"
        :image-path="card.imagePath"
        :heading="card.heading"
        :cta-text="card.cta.text"
        :cta-url="card.cta.url"
      />
    </div>
  </dialog>
</template>
<style></style>
