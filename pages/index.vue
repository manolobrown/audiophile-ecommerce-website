<script setup>
const buttonText = "See Product";
const buttonUrl = "#";
</script>
<template>
  <div>
    <Hero />
    <NavsCategoryNav class="mb-[84px]" />
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
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <ButtonsButtonTwo :button-text="buttonText" :button-url="buttonUrl" />
      </div>
      <div
        class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-speaker-zx7.jpg')] bg-cover rounded-lg text-center px-[24px] py-[55px] mb-[24px] h-[320px] flex items-start justify-center flex-col"
      >
        <h2
          class="text-black uppercase text-[28px] tracking-[2px] leading-[40px] mb-[32px]"
        >
          <strong>ZX7 SPEAKER</strong>
        </h2>

        <ButtonsButtonFour
          :button-text="buttonText"
          :button-url="buttonUrl"
          class="w-full"
          style="margin-left: 0"
        />
      </div>
      <div>
        <div
          class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-earphones-yx1.jpg')] bg-cover rounded-lg text-center px-[24px] mb-[24px] h-[200px] flex items-start justify-center flex-col"
        ></div>
        <div
          class="bg-[#F1F1F1] rounded-lg text-center px-[24px] mb-[24px] h-[200px] flex items-start justify-center flex-col"
        >
          <h2
            class="text-black uppercase text-[28px] tracking-[2px] leading-[40px] mb-[32px]"
          >
            <strong>YX1 EARPHONES</strong>
          </h2>

          <ButtonsButtonFour
            :button-text="buttonText"
            :button-url="buttonUrl"
            class="w-full"
            style="margin-left: 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
