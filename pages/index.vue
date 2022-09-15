<script setup>
import CategoryNav from "~~/components/navs/CategoryNav.vue";
const buttonText = "See Product";
const buttonUrl = "#";
</script>
<template>
  <Hero />
  <CategoryNav class="mb-[84px]" />
  <div class="container">
    <div
      class="bg-[#D87D4A] rounded-lg text-center px-[24px] py-[55px] mb-[24px]"
    >
      <div class="mb-[32px]">
        <img
          class="mx-auto max-h-[207px]"
          src="~/assets/images/home/mobile/image-speaker-zx9.png"
          alt=""
        />
      </div>
      <h2
        class="text-white uppercase text-[40px] tracking-[1.29px] leading-[40px] mb-[24px]"
      >
        <strong><span class="block">ZX9</span> Speaker</strong>
      </h2>
      <p class="text-white text-[15px] leading-[25px] opacity-75 mb-[24px]">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <ButtonsButtonTwo :button-text="buttonText" :button-url="buttonUrl" />
    </div>
  </div>
</template>
