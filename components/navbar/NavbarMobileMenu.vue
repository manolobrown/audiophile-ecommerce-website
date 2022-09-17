<script setup>
import { ref, computed, onMounted } from "vue";
import CategoryNav from "../navs/CategoryNav.vue";
defineProps({
  dialogActive: Boolean,
});

//TODO use native dialog api
</script>
<template>
  <dialog
    class="open:bg-black/40 h-screen w-full p-0 z-[1]"
    :open="dialogActive"
  >
    <CategoryNav class="sm:pb-[67px] sm:pt-[87px]" />
  </dialog>
</template>
<style></style>
