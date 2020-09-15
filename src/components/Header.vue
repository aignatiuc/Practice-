<template>
  <v-app-bar 
    color="white"
    dense
    class="z-10"
  >
    <v-dropdown>
      <v-app-bar-nav-icon />
    </v-dropdown>
    <router-link :to="{ name: 'home' }">
      <img 
        :src="require('@/assets/images/logo.svg')"
        class="object-contain w-40" 
      >
    </router-link>
    <v-chip 
      pill
      color="transparent"
      class="p-4 font-sans text-xs capitalize" 
      :to="{ name: 'about' }"
    >
      <a>About</a>
    </v-chip>

    <v-chip 
      pill 
      color="transparent" 
      class="p-4 font-sans text-xs capitalize"
    >
      <a>Products</a>
    </v-chip>

    <v-chip 
      pill 
      color="transparent" 
      class="p-4 font-sans text-xs capitalize"
    >
      <a>For Teams</a>
    </v-chip>

    <v-text-field
      class="flex-1 ml-4 mr-4"
      outlined
      dense
      solo
      flat
      hide-details
      label="Search..."
      prepend-inner-icon="mdi-magnify"
    />
    <v-btn 
      small 
      class="mr-1 font-sans text-xs capitalize btn-in"
      outlined
    >
      Log in
    </v-btn>
    <v-btn 
      small 
      class="font-sans text-xs capitalize btn-up white--text"
      outlined
    >
      Sign up
    </v-btn>
  </v-app-bar>
</template>

<script>
import VDropdown from "@/components/Dropdown.vue";

export default {
  components: {
    VDropdown,
  },
};
</script>

<style scoped>
a {
  color: var(--gray) !important;
}

.btn-in {
  color: #39739d !important;
  background-color: #e1ecf4;
}
.btn-up {
  background-color: var(--blue);
  color: white;
}
</style>
