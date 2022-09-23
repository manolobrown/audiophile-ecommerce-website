<script setup>
import data from "~/assets/data.json";
const route = useRoute();
const router = useRouter();
const productSlug = route.params.slug;
const singleProduct = data.find((product) => product.slug === productSlug);
const goBack = () => {
  router.back();
};
</script>
<template>
  <div>
    <div class="container">
      <div
        class="text-[15px] leading-[25px] text-black opacity-50 py-6 font-medium"
        @click="goBack()"
      >
        Go Back
      </div>
      <div
        class="text-left mb-[120px] lg:flex lg:even:flex-row-reverse lg:items-center lg:gap-x-[125px] lg:text-left lg:mb-40"
      >
        <div class="lg:flex-auto lg:max-w-[540px]">
          <picture>
            <source
              :srcset="singleProduct.image.desktop"
              media="(min-width:1280px)"
            />
            <source
              :srcset="singleProduct.image.tablet"
              media="(min-width:768px)"
            />
            <img
              class="rounded-lg mb-8 md:mb-[52px]"
              :src="singleProduct.image.mobile"
              alt=""
            />
          </picture>
        </div>
        <div>
          <div
            v-if="singleProduct.new"
            class="uppercase text-[#D87D4A] text-[14px] tracking-[10px] mb-6 lg:mb-4"
          >
            New Product
          </div>
          <h2
            class="uppercase font-bold text-[28px] tracking-[1px] mb-6 max-w-[270px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px] md:max-w-[300px] md:mb-8 lg:mx-0"
          >
            {{ singleProduct.name }}
          </h2>
          <p
            class="font-medium text-black text-[15px] leading-[25px] opacity-50 mb-6 md:max-w-[570px] md:mx-auto lg:mx-0 lg:mb-10"
          >
            {{ singleProduct.description }}
          </p>
          <div class="font-bold text-[18px] tracking-[1.29px] mb-8">
            $ {{ parseInt(singleProduct.price).toLocaleString("en-US") }}
          </div>
          <ButtonsButtonOne
            button-text="Add To Cart"
            :button-url="`/${singleProduct.category}/${singleProduct.slug}`"
            class="btn--primary mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
    <NavsCategoryNav class="mb-[120px]" />
  </div>
</template>
