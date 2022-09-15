<script setup>
defineProps({
  buttonText: String,
  buttonUrl: String,
});
</script>
<template>
  <a
    href="{{buttonUrl}}"
    class="text-[13px] flex items-center mx-auto justify-center uppercase max-w-[160px] h-[48px] text-black bg-transparent hover:bg-black hover:text-white"
    ><strong>{{ buttonText }}</strong>
  </a>
</template>
