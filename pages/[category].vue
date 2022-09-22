<script setup>
import data from "~/assets/data.json";
const route = useRoute();
const categoryRoute = route.params.category;
const products = data.filter((product) => {
  if (product.category == categoryRoute) {
    return product;
  }
});
products.sort((a, b) => b.id - a.id);
</script>
<template>
  <div>
    <div class="bg-black text-center px-[84px] py-8 mb-16">
      <h1 class="text-white uppercase font-bold text-[28px] tracking-[2px]">
        {{ categoryRoute }}
      </h1>
    </div>
    <div class="container">
      <div class="text-center mb-[120px]" v-for="product in products">
        <picture>
          <source :srcset="product.image.desktop" media="(min-width:1280px)" />
          <source :srcset="product.image.tablet" media="(min-width:768px)" />
          <img class="rounded-lg mb-8" :src="product.image.mobile" alt="" />
        </picture>
        <div
          v-if="product.new"
          class="uppercase text-[#D87D4A] text-[14px] tracking-[10px] mb-6"
        >
          New Product
        </div>
        <h2
          class="uppercase font-bold text-[28px] tracking-[1px] mb-6 max-w-[270px] mx-auto"
        >
          {{ product.name }}
        </h2>
        <p
          class="font-medium text-black text-[15px] leading-[25px] opacity-50 mb-6"
        >
          {{ product.description }}
        </p>
        <ButtonsButtonOne
          button-text="See Product"
          :button-url="product.slug"
          class="btn--primary mx-auto"
        />
      </div>
    </div>
    <NavsCategoryNav class="mb-[120px]" />
  </div>
</template>
