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
    class="card bg-[#F1F1F1] rounded-lg text-center p-[27px] pt-[60px] relative flex-grow lg:min-h-[204px] lg:flex lg:flex-col lg:justify-end"
  >
    <img
      class="mx-auto absolute -top-[20%] left-1/2 -translate-x-1/2 max-h-[104px] lg:max-h-[160px] lg:-top-[30%]"
      :src="imagePath"
    />
    <h2 class="mt-5 mb-4 uppercase text-[15px] lg:text-[18px]">
      <strong>{{ heading }}</strong>
    </h2>
    <ButtonsButtonTwo :cta-url="ctaUrl" :cta-text="ctaText" />
  </div>
</template>
