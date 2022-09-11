<script setup></script>
<template>
  <div class="card bg-[#F1F1F1] rounded-lg text-center p-5">
    <slot name="image"></slot>
    <h2>
      <slot name="heading"></slot>
    </h2>
    <slot name="text"></slot>
  </div>
</template>
<style></style>
