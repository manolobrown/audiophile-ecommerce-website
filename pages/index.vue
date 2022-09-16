<script setup></script>
<template>
  <div>
    <Hero />
    <NavsCategoryNav class="mb-[84px]" />
    <div class="container">
      <div
        class="bg-[#D87D4A] bg-[url('/assets/images/home/desktop/pattern-circles.svg')] bg-cover bg-no-repeat bg-[center_top_-135px] rounded-lg text-center px-[24px] py-[55px] mb-[24px]"
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
        <ButtonsButtonOne
          button-text="See Product"
          button-url="#"
          class="btn--secondary mx-auto"
        />
      </div>
      <!-- new card -->
      <div
        class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-speaker-zx7.jpg')] bg-cover rounded-lg text-center px-[24px] py-[55px] mb-[24px] h-[320px] flex items-start justify-center flex-col"
      >
        <h2
          class="text-black uppercase text-[28px] tracking-[2px] leading-[40px] mb-[32px]"
        >
          <strong>ZX7 SPEAKER</strong>
        </h2>

        <ButtonsButtonOne
          button-text="See Product"
          button-url="#"
          class="btn--outline"
        />
      </div>
      <!-- new card -->
      <div>
        <div
          class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-earphones-yx1.jpg')] bg-cover rounded-lg text-center px-[24px] mb-[24px] h-[200px] flex items-start justify-center flex-col"
        ></div>
        <div
          class="bg-[#F1F1F1] rounded-lg text-center px-[24px] mb-[120px] h-[200px] flex items-start justify-center flex-col"
        >
          <h2
            class="text-black uppercase text-[28px] tracking-[2px] leading-[40px] mb-[32px]"
          >
            <strong>YX1 EARPHONES</strong>
          </h2>

          <ButtonsButtonOne
            button-text="See Product"
            button-url="#"
            class="btn--outline"
          />
        </div>
      </div>
      <!-- new card -->
      <div class="text-center mb-[120px]">
        <div class="mb-[40px]">
          <img
            class="mx-auto rounded-lg"
            src="~/assets/images/shared/mobile/image-best-gear.jpg"
            alt=""
          />
        </div>
        <h2 class="text-black uppercase text-[28px] tracking-[1px] mb-[32px]">
          <strong
            >Bringing you the <span class="text-[#D87D4A]">best</span> audio
            gear</strong
          >
        </h2>
        <p class="text-black text-[15px] leading-[25px] opacity-50 mb-[24px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  </div>
</template>
