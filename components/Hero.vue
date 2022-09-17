<script setup>
import ButtonOne from "./buttons/ButtonOne.vue";
</script>
<template>
  <div class="mt-[-90px] z-0 relative bg-[#191919]">
    <div class="flex flex-col items-center justify-center">
      <picture>
        <source
          srcset="/assets/images/home/desktop/image-hero.jpg"
          media="(min-width:1200px)"
        />
        <source
          srcset="/assets/images/home/tablet/image-header.jpg"
          media="(min-width:768px)"
        />
        <img src="/assets/images/home/mobile/image-header.jpg" alt="" />
      </picture>
      <div
        class="max-w-[255px] mx-auto absolute text-center inset-0 flex flex-col items-center justify-end mb-[30%] sm:max-w-[379px] md:mb-[22%]"
      >
        <h1 class="uppercase">
          <span
            class="block text-[14px] tracking-[10px] text-white opacity-50 mb-[15px]"
            >New Product</span
          >
          <strong
            class="block text-white text-[36px] leading-[40px] tracking-[1.29px] mb-[24px] sm:text-[56px] sm:leading-[58px] sm:tracking-[2]"
            >XX99 Mark II <br />
            HeadphoneS</strong
          >
        </h1>
        <p
          class="text-[#fff] opacity-75 text-[15px] leading-[25px] mb-[28px] sm:w-[349px]"
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonOne
          button-text="See Product"
          button-url="#"
          class="btn--primary mx-auto"
        />
      </div>
    </div>
  </div>
</template>
