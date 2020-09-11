<template>
  <div class="relative h-full">
    <div class="w-full bg-orange-400 top-bar h-px3"></div>
    <v-header />
    <v-main class="z-0">
      <router-view />
    </v-main>
  </div>
</template>
<script>
import VHeader from "@/components/VHeader.vue";

export default {
  components: {
    VHeader,
  },
};
</script>
