<template>
  <div class="relative h-full">
    <div class="w-full bg-orange-100 top-bar" />

    <v-header />

    <v-main class="z-0">
      <router-view />
    </v-main>
    <v-footer />
  </div>
</template>

<script>
import VHeader from "@/components/dashboard/Header.vue";
import VFooter from "@/components/dashboard/Footer.vue";

export default {
  components: {
    VHeader,
    VFooter,
  },
};
</script>

<style scoped>
.top-bar {
  height: 3px;
}
</style>
