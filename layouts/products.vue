<template>
  <div>
    <header class="shadow-sm bg-white navbar">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold text-white">Cap4Learning</NuxtLink>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4 ">
        <li><NuxtLink class="text-white" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="text-white" to="/about">About</NuxtLink></li>
        <li><NuxtLink class="text-white" to="/products">Merch</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #4689F1;
  }
</style>89