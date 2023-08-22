<template>
  <div>
    <header class="shadow-sm bg-white navbar">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-white"><img src="/assets/images/cap4logo.svg" class="text-white"></NuxtLink>
        <ul class="flex gap-4 text-white">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Formation</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #4689F1;
  }
</style>