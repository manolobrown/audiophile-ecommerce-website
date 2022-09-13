<script setup>
import { ref } from "vue";
defineProps({
  url: String,
});
</script>
<template>
  <img :src="url" alt="" />
</template>
<style></style>
