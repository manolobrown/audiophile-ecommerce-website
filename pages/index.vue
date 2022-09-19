<script setup></script>
<template>
  <div>
    <Hero class="sm:mb-[84px]" />
    <NavsCategoryNav class="mb-[84px]" />
    <div class="container">
      <div
        class="bg-[#D87D4A] bg-[url('/assets/images/home/desktop/pattern-circles.svg')] bg-cover bg-no-repeat bg-[center_top_-135px] rounded-lg text-center px-[24px] py-[55px] mb-[24px] md:h-[720px] md:flex md:items-center md:justify-center md:flex-col md:bg-auto md:bg-[center_top_-300px]"
      >
        <div class="mb-[32px] md:mb-[64px]">
          <img
            class="mx-auto max-h-[207px]"
            src="~/assets/images/home/mobile/image-speaker-zx9.png"
            alt=""
          />
        </div>
        <h2
          class="text-white uppercase text-[40px] tracking-[1.29px] leading-[40px] mb-[24px] md:text-[56px] md:leading-[50px] md:tracking-[2px]"
        >
          <strong><span class="block">ZX9</span> Speaker</strong>
        </h2>
        <p
          class="text-white text-[15px] leading-[25px] opacity-75 mb-[24px] max-w-[349px] mx-auto md:mb-[40px]"
        >
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
        class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-speaker-zx7.jpg')] bg-cover rounded-lg text-center px-[24px] py-[55px] mb-[24px] h-[320px] flex items-start justify-center flex-col md:px-[62px] md:bg-[url('/assets/images/home/tablet/image-speaker-zx7.jpg')]"
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
      <div
        class="mb-[120px] md:mb-[72px] md:grid md:grid-cols-2 md:gap-x-[10px]"
      >
        <div
          class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-earphones-yx1.jpg')] bg-cover rounded-lg text-center px-[24px] mb-[24px] h-[200px] flex items-start justify-center flex-col md:bg-[url('/assets/images/home/tablet/image-earphones-yx1.jpg')] md:h-[320px]"
        ></div>
        <div
          class="bg-[#F1F1F1] rounded-lg text-center px-[24px] h-[200px] flex items-start justify-center flex-col md:h-[320px] md:px-[40px]"
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
          <picture>
            <source
              srcset="~/assets/images/shared/desktop/image-best-gear.jpg"
              media="(min-width:1200px)"
            />
            <source
              srcset="~/assets/images/shared/tablet/image-best-gear.jpg"
              media="(min-width:768px)"
            />
            <img
              class="mx-auto rounded-lg"
              src="~/assets/images/shared/mobile/image-best-gear.jpg"
              alt=""
            />
          </picture>
        </div>
        <h2
          class="text-black uppercase text-[28px] tracking-[1px] mb-[32px] md:text-[40px] md:tracking-[1.43px]md:leading-[44px] max-w-[573px] mx-auto"
        >
          <strong
            >Bringing you the <span class="text-[#D87D4A]">best</span> audio
            gear</strong
          >
        </h2>
        <p
          class="text-black text-[15px] leading-[25px] opacity-50 mb-[24px] max-w-[573px] mx-auto md:mx-2"
        >
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
