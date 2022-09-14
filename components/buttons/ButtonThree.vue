<script setup>
defineProps({
  ctaText: String,
  ctaUrl: String,
});
</script>
<template>
  <span>
    <a
      href="{{ctaUrl}}"
      class="flex items-center justify-center uppercase gap-x-3 text-[13px] text-[#787878] hover:text-[#D87D4A]"
      ><strong>{{ ctaText }}</strong>
      <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.322 1l5 5-5 5"
          stroke="#D87D4A"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        /></svg
    ></a>
  </span>
</template>
