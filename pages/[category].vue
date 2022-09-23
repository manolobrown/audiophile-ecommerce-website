<script setup>
import data from "~/assets/data.json";
const route = useRoute();
const categoryRoute = route.params.category;
const products = data.filter((product) => {
  return product.category === categoryRoute && product;
});
products.sort((a, b) => b.id - a.id);
</script>
<template>
  <div>
    <div
      class="bg-black text-center px-[84px] py-8 mb-16 md:py-24 md:mb-[120px] lg:mb-40"
    >
      <h1
        class="text-white uppercase font-bold text-[28px] tracking-[2px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]"
      >
        {{ categoryRoute }}
      </h1>
    </div>
    <div class="container">
      <div
        class="text-center mb-[120px] lg:flex lg:even:flex-row-reverse lg:items-center lg:gap-x-[125px] lg:text-left lg:mb-40"
        v-for="product in products"
      >
        <div class="lg:flex-auto lg:max-w-[540px]">
          <picture>
            <source
              :srcset="product.categoryImage.desktop"
              media="(min-width:1280px)"
            />
            <source
              :srcset="product.categoryImage.tablet"
              media="(min-width:768px)"
            />
            <img
              class="rounded-lg mb-8 md:mb-[52px]"
              :src="product.categoryImage.mobile"
              alt=""
            />
          </picture>
        </div>
        <div>
          <div
            v-if="product.new"
            class="uppercase text-[#D87D4A] text-[14px] tracking-[10px] mb-6 lg:mb-4"
          >
            New Product
          </div>
          <h2
            class="uppercase font-bold text-[28px] tracking-[1px] mb-6 max-w-[270px] mx-auto md:text-[40px] md:leading-[44px] md:tracking-[1.43px] md:max-w-[300px] md:mb-8 lg:mx-0"
          >
            {{ product.name }}
          </h2>
          <p
            class="font-medium text-black text-[15px] leading-[25px] opacity-50 mb-6 md:max-w-[570px] md:mx-auto lg:mx-0 lg:mb-10"
          >
            {{ product.description }}
          </p>
          <ButtonsButtonOne
            button-text="See Product"
            :button-url="`/${product.category}/${product.slug}`"
            class="btn--primary mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
    <NavsCategoryNav class="mb-[120px]" />
  </div>
</template>
