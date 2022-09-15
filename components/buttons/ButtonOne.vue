<script setup>
defineProps({
  buttonText: String,
  buttonUrl: String,
});
</script>
<template>
  <a
    href="{{buttonUrl}}"
    class="text-[13px] flex items-center mx-auto justify-center uppercase max-w-[160px] h-[48px] text-white bg-[#D87D4A] hover:bg-[#FBAF85]"
    ><strong>{{ buttonText }}</strong>
  </a>
</template>
