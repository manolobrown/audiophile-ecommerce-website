<script setup>
import data from "~/assets/data.json";
const route = useRoute();
const categoryRoute = route.params.category;
const categories = data.filter((category) => {
  if (category.category == categoryRoute) {
    return category;
  }
});
categories.sort((a, b) => b.id - a.id);
</script>
<template>
  <div>
    <div>
      <h1>{{ categoryRoute }}</h1>
    </div>
    <div v-for="category in categories">
      <picture>
        <source :srcset="category.image.desktop" media="(min-width:1280px)" />
        <source :srcset="category.image.tablet" media="(min-width:768px)" />
        <img :src="category.image.mobile" alt="" />
      </picture>
      <div v-if="category.new">New Product</div>
      <h2>{{ category.name }}</h2>
      <p>{{ category.description }}</p>
      <ButtonsButtonOne
        button-text="See Product"
        :button-url="category.slug"
        class="btn--primary mx-auto"
      />
      {{ category.id }}
    </div>
  </div>
</template>
