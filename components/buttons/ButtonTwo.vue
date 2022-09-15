<script setup>
defineProps({
  buttonText: String,
  buttonUrl: String,
});
</script>
<template>
  <a
    href="{{buttonUrl}}"
    class="text-[13px] flex items-center mx-auto justify-center uppercase max-w-[160px] h-[48px] text-white bg-black hover:bg-[#4C4C4C]"
    ><strong>{{ buttonText }}</strong>
  </a>
</template>
