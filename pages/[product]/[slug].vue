<script setup>
import data from "~/assets/data.json";
const route = useRoute();
const router = useRouter();
const productSlug = route.params.slug;
const singleProduct = data.find((product) => product.slug === productSlug);
const gallery = Object.values(singleProduct.gallery);
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
        <!-- product card -->
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
        <div class="mb-[88px]">
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
        <!-- features -->
        <h3
          class="font-bold text-[24px] leading-[36px] tracking-[0.86px] text-black uppercase mb-6"
        >
          Features
        </h3>
        <div class="text-black opacity-50 text-[15px] leading-[25px] mb-[88px]">
          {{ singleProduct.features }}
        </div>
        <!-- in the box -->
        <h3
          class="font-bold text-[24px] leading-[36px] tracking-[0.86px] text-black uppercase mb-6"
        >
          In The Box
        </h3>
        <ul class="text-[15px] leading-[25px] flex flex-col gap-y-2 mb-[88px]">
          <li class="flex gap-x-6" v-for="include in singleProduct.includes">
            <span class="text-[#D87D4A] font-bold"
              >{{ include.quantity }}X</span
            >
            <span class="opacity-50">{{ include.item }}</span>
          </li>
        </ul>
        <!-- gallery -->
        <div class="grid gap-6 mb-[120px]">
          <picture v-for="image in gallery">
            <source :srcset="image.desktop" media="(min-width:1280px)" />
            <source :srcset="image.tablet" media="(min-width:768px)" />
            <img class="rounded-lg" :src="image.mobile" alt="" />
          </picture>
        </div>
        <!-- related products -->
        <h3
          class="font-bold text-[24px] text-center leading-[36px] tracking-[0.86px] text-black uppercase mb-10"
        >
          You May Also Like
        </h3>
        <div class="flex gap-y-14 flex-col">
          <div v-for="related in singleProduct.others">
            <picture>
              <source
                :srcset="related.image.desktop"
                media="(min-width:1280px)"
              />
              <source
                :srcset="related.image.tablet"
                media="(min-width:768px)"
              />
              <img
                class="rounded-lg mb-8 md:mb-[52px]"
                :src="related.image.mobile"
                alt=""
              />
            </picture>
            <div class="mb-0">
              <h4
                class="uppercase font-bold text-[28px] text-center tracking-[1px] mb-8 max-w-[270px] mx-auto md:text-[40px] md:leading-[44px] md:tracking-[1.43px] md:max-w-[300px] md:mb-8 lg:mx-0"
              >
                {{ related.name }}
              </h4>

              <ButtonsButtonOne
                button-text="See Product"
                :button-url="`/${route.params.product}/${related.slug}`"
                class="btn--primary mx-auto lg:mx-0 mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavsCategoryNav class="mb-[120px]" />
  </div>
</template>
