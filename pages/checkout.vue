<script setup>
const router = useRouter();
</script>
<template>
  <div class="bg-[#F2F2F2]">
    <div class="container">
      <div
        class="text-[15px] leading-[25px] text-black opacity-50 py-6 font-medium xl:pt-[79px] xl:pb-[56px] cursor-pointer"
        @click="goBack()"
      >
        Go Back
      </div>
    </div>
  </div>
</template>
