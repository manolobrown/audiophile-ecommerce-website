<script setup>
defineProps({
  buttonText: String,
  buttonUrl: String,
});
</script>
<template>
  <a href="{{buttonUrl}}" class="btn"
    ><strong>{{ buttonText }}</strong>
  </a>
</template>
