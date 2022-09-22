<script setup>
defineProps({
  buttonText: String,
  buttonUrl: String,
});
</script>
<template>
  <NuxtLink :to="buttonUrl" class="btn"
    ><strong>{{ buttonText }}</strong>
  </NuxtLink>
</template>
