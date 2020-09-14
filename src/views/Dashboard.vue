<template>
  <div class="relative h-full">
    <div class="w-full bg-orange-100 top-bar"></div>
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

<style scoped>
.top-bar {
  height: 3px;
}
</style>
