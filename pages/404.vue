<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center bg-black text-white gap-2">
    <p class="text-xl font-bold">404 Not Found</p>
    <nuxt-link to="/">Atras</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  head() {
    return {
      title: 'Perdido chamo'
    }
  } 
}
</script>