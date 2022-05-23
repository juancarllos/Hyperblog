<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
    <div v-show="false" class="flex flex-col items-center justify-center text-sm gap-2">
      <p> <span class="font-bold">Miguel Angel:</span> Secretaria</p>
      <p> <span class="font-bold">Harrison Esteban:</span> Indi</p>
      <p> <span class="font-bold">Juan Carlos:</span> No puede serrr</p>
      <p> <span class="font-bold">Juanchita:</span> Cibersex</p>
    </div>
    <div class="flex flex-col items-center justify-center text-xl gap-4">
      <nuxt-link to="/travel">Go to Travel</nuxt-link>
      <nuxt-link to="/supermarket">Go to Supermarket</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  head() {
    return {
      title: 'ZynAI'
    }
  }
}
</script>
