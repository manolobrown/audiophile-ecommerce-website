<script setup>
import data from "~/assets/data.json";
const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const { data: product } = await useFetch(() => `/api/product/${slug}`, {
  key: slug,
});
//const product = data.find((product) => product.slug === slug);
//const gallery = Object.values(product.gallery);
const goBack = () => {
  router.back();
};
</script>
<template>
  <div>
    <div class="container">
      <div
        class="text-[15px] leading-[25px] text-black opacity-50 py-6 font-medium xl:pt-[79px] xl:pb-[56px]"
        @click="goBack()"
      >
        Go Back
      </div>

      <div class="text-left mb-[120px]">
        <!-- product card -->
        <div
          class="mb-[88px] grid gap-y-8 md:grid-cols-[minmax(281px,_540px)_minmax(339.5px,_445px)] md:items-center md:gap-x-[69px] md:gap-y-[52px] md:mb-[120px]"
        >
          <div class="">
            <picture>
              <source
                :srcset="product.image.desktop"
                media="(min-width:1280px)"
              />
              <source
                :srcset="product.image.tablet"
                media="(min-width:768px)"
              />
              <img class="rounded-lg" :src="product.image.mobile" alt="" />
            </picture>
          </div>
          <div class="">
            <div
              v-if="product.new"
              class="uppercase text-[#D87D4A] text-[14px] tracking-[10px] mb-6 md:text-[12px] md:tracking-[8.57px]"
            >
              New Product
            </div>
            <h2
              class="uppercase font-bold text-[28px] tracking-[1px] mb-6 md:mb-8 md:leading-8 xl:text-[40px] xl:leading-[44px] xl:tracking-[1.43px]"
            >
              {{ product.name }}
            </h2>
            <p
              class="font-medium text-black text-[15px] leading-[25px] opacity-50 mb-6 md:mb-8"
            >
              {{ product.description }}
            </p>
            <div
              class="font-bold text-[18px] tracking-[1.29px] mb-8 xl:mb-[47px]"
            >
              $ {{ parseInt(product.price).toLocaleString("en-US") }}
            </div>
            <ButtonsButtonOne
              button-text="Add To Cart"
              :button-url="`/${product.category}/${product.slug}`"
              class="btn--primary"
            />
          </div>
        </div>

        <div
          class="xl:grid xl:grid-cols-[minmax(635px,_1fr)_minmax(350px,_1fr)] xl:gap-x-[125px] xl:mb-[160px]"
        >
          <!-- features -->
          <div
            class="text-black text-[15px] leading-[25px] mb-[88px] md:mb-[120px]"
          >
            <h3
              class="font-bold text-[24px] leading-[36px] tracking-[0.86px] text-black opacity-100 uppercase mb-6 md:text-[32px] md:tracking-[1.14px] md:mb-8"
            >
              Features
            </h3>
            <div class="opacity-50">{{ product.features }}</div>
          </div>
          <!-- in the box -->
          <div
            class="mb-[88px] md:flex md:justify-between md:max-w-[550px] md:mb-[120px] xl:flex-col xl:justify-start"
          >
            <h3
              class="font-bold text-[24px] leading-[36px] tracking-[0.86px] text-black uppercase mb-6 md:text-[32px] md:tracking-[1.14px]"
            >
              In The Box
            </h3>
            <ul class="text-[15px] leading-[25px] flex flex-col gap-y-2">
              <li class="flex gap-x-6" v-for="include in product.includes">
                <span class="text-[#D87D4A] font-bold"
                  >{{ include.quantity }}X</span
                >
                <span class="opacity-50">{{ include.item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- gallery -->
        <div
          class="grid gap-6 mb-[120px] md:grid-cols-[minmax(277px,_445px)_minmax(395px,_635px)] md:gap-x-[18px] md:gap-y-[20px] xl:gap-y-8 xl:gap-x-[30px] xl:mb-[160px]"
        >
          <picture
            class="md:last:row-span-2 md:last:col-start-2 md:last:row-start-1 md:col-start-1"
            v-for="image in product.gallery"
          >
            <source :srcset="image.desktop" media="(min-width:1280px)" />
            <source :srcset="image.tablet" media="(min-width:768px)" />
            <img class="rounded-lg" :src="image.mobile" alt="" />
          </picture>
        </div>
        <!-- related products -->
        <h3
          class="font-bold text-[24px] text-center leading-[36px] tracking-[0.86px] text-black uppercase mb-10 md:text-[32px] md:tracking-[1.14px] md:mb-[56px]"
        >
          You May Also Like
        </h3>
        <div
          class="flex gap-y-14 flex-col md:flex-row gap-x-[11px] xl:gap-x-[30px] mb-[88px] md:mb-[120px] xl:mb-160px"
        >
          <div v-for="related in product.others">
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
                class="rounded-lg mb-8 md:mb-10"
                :src="related.image.mobile"
                alt=""
              />
            </picture>
            <div class="mb-0">
              <h4
                class="uppercase font-bold text-[28px] text-center tracking-[1px] mb-8 md:text-[24px] md:tracking-[1.71px]"
              >
                {{ related.name }}
              </h4>

              <ButtonsButtonOne
                button-text="See Product"
                :button-url="`/${route.params.product}/${related.slug}`"
                class="btn--primary mx-auto mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavsCategoryNav class="mb-[120px]" />
  </div>
</template>
