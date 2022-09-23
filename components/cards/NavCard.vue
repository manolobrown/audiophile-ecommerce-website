<script setup>
defineProps({
  imagePath: String,
  heading: String,
  ctaText: String,
  ctaUrl: String,
});
</script>
<template>
  <div
    class="card bg-[#F1F1F1] rounded-lg text-center relative h-[165px] lg:h-[204px] text-[#787878] hover:text-[#D87D4A] transition-colors"
  >
    <NuxtLink
      :to="ctaUrl"
      class="p-[22px] flex flex-col justify-end flex-grow h-full"
    >
      <img
        class="mx-auto absolute -top-[22%] left-1/2 -translate-x-1/2 max-h-[104px] lg:max-h-[160px] lg:-top-[30%]"
        :src="imagePath"
      />
      <h2 class="mt-5 mb-4 uppercase text-[15px] lg:text-[18px] text-black">
        <strong>{{ heading }}</strong>
      </h2>
      <span
        class="flex items-center justify-center uppercase gap-x-3 text-[13px]"
      >
        <strong>Shop</strong>
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </span>
    </NuxtLink>
  </div>
</template>
