<script setup>
defineProps({
  imagePath: String,
  heading: String,
  ctaText: String,
  ctaUrl: String,
});
</script>
<template>
  <div class="card bg-[#F1F1F1] rounded-lg text-center p-5 pt-[60px] relative">
    <img
      class="mx-auto absolute -top-[20%] left-1/2 -translate-x-1/2 max-h-[104px]"
      :src="imagePath"
    />
    <h2 class="mt-5 mb-4">
      {{ heading }}
    </h2>
    <span>
      <a href="{{ctaUrl}}">{{ ctaText }} <span>></span></a>
    </span>
  </div>
</template>
