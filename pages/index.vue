<script setup></script>
<template>
  <div>
    <Hero class="sm:mb-[64px]" />
    <NavsCategoryNav class="mb-[64px]" />
    <div class="container">
      <div
        class="bg-[#D87D4A] bg-[url('/assets/images/home/desktop/pattern-circles.svg')] bg-cover bg-no-repeat bg-[center_-135px] rounded-xl text-center px-[24px] py-[55px] mb-[24px] md:h-[720px] md:flex md:items-center md:justify-center md:flex-col md:bg-auto md:bg-[center_-300px] md:mb-8 xl:flex-row xl:overflow-hidden xl:justify-around xl:text-left xl:h-[560px] xl:bg-[position:-190px_-50px] xl:mb-12"
      >
        <div class="mb-[32px] md:mb-[64px] xl:self-end xl:-mb-[70px]">
          <picture>
            <source
              srcset="~/assets/images/home/desktop/image-speaker-zx9.png"
              media="(min-width:1280px)"
            />
            <source
              srcset="~/assets/images/home/tablet/image-speaker-zx9.png"
              media="(min-width:768px)"
            />
            <img
              class="mx-auto max-h-[207px] xl:max-h-[493px]"
              src="~/assets/images/home/mobile/image-speaker-zx9.png"
              alt=""
            />
          </picture>
        </div>
        <div class="xl:self-start xl:mt-[45px]">
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
            class="btn--secondary mx-auto xl:mx-0"
          />
        </div>
      </div>
      <!-- new card -->
      <div
        class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-speaker-zx7.jpg')] bg-cover rounded-xl text-center px-[24px] py-[55px] mb-[24px] h-[320px] flex items-start justify-center flex-col md:px-[62px] md:bg-[url('/assets/images/home/tablet/image-speaker-zx7.jpg')] md:mb-8 xl:bg-[url('/assets/images/home/desktop/image-speaker-zx7.jpg')] xl:px-[95px] xl:mb-12"
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
        class="mb-[120px] md:mb-[72px] md:grid md:grid-cols-2 md:gap-x-[10px] xl:mb-[200px]"
      >
        <div
          class="bg-[#F1F1F1] bg-[url('/assets/images/home/mobile/image-earphones-yx1.jpg')] bg-cover rounded-xl text-center px-[24px] mb-[24px] h-[200px] flex items-start justify-center flex-col md:bg-[url('/assets/images/home/tablet/image-earphones-yx1.jpg')] md:h-[320px] xl:bg-[url('/assets/images/home/desktop/image-earphones-yx1.jpg')]"
        ></div>
        <div
          class="bg-[#F1F1F1] rounded-xl text-center px-[24px] h-[200px] flex items-start justify-center flex-col md:h-[320px] md:px-[40px] xl:px-[95px]"
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
    </div>
  </div>
</template>
