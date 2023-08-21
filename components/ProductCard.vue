<template>
  <div class="card text-center">
    <img :src="`/assets/images/${icon}.png`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 ">{{ product.properties.Title.title[0].plain_text }}</p>
    <div class="flex justify-evenly">
      <NuxtLink :to="`/products/${product.properties.ID.unique_id.number}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
  const icon = product.properties.Category.rich_text[0].plain_text;
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>