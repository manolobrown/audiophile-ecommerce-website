<script setup>
import ButtonOne from "./buttons/ButtonOne.vue";
const buttonText = "See Product";
const buttonUrl = "#";
</script>
<template>
  <div
    class="text-center bg-black bg-[url('/assets/images/home/mobile/image-header.jpg')] bg-bottom bg-no-repeat bg-cover pt-[108px] pb-[112px] pr-[24px] pl-[24px] h-[510px]"
  >
    <h1 class="uppercase">
      <span
        class="block text-[14px] tracking-[10px] text-white opacity-50 mb-[15px]"
        >New Product</span
      >
      <strong
        class="block text-white text-[36px] leading-[40px] tracking-[1.29px] mb-[24px]"
        >XX99 Mark II <br />
        HeadphoneS</strong
      >
    </h1>
    <p class="text-[#fff] opacity-75 text-[15px] leading-[25px] mb-[28px]">
      Experience natural, lifelike audio and exceptional build quality made for
      the passionate music enthusiast.
    </p>
    <ButtonOne
      button-text="See Product"
      button-url="#"
      class="btn--primary mx-auto"
    />
  </div>
</template>
