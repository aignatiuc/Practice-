<template>
  <div>
    <div class="top-bar"></div>
    <v-header />
    <v-main>
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
  width: 100%;
  height: 2px;
  background: var(--orange);
}
</style>
