<template>
  <div class="card m-7">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`/assets/images/${icon}.png`" class="thumb" />        
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Duration: {{ product[0].properties.Duration.rich_text[0].plain_text }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Course description:</h3>
        <p class="mb-7">{{ product[0].properties.Description.rich_text[0].plain_text }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Objectives: </h3>
        <p class="text-xl my-7">{{ product[0].properties.Objectives.rich_text[0].plain_text }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">download</i>
          <span>Fiche descriptive</span>
        </button>
      </div>
    </div>
  </div>
  <div class="card m-7">
    <div class="grid grid-cols-2 gap-10">
        <div>
          <div class="p-7">
            
          </div>
          <div class="p-7">

          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
  const icon = product[0].properties.Category.rich_text[0].plain_text;
  console.log(product[0].properties.Objectives.rich_text[0].plain_text);
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>