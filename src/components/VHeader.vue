<template>
  <v-app-bar color="white" dense>
    <v-dropdown />
    <img
      :src="require('@/assets/images/logo.svg')"
      class="object-contain w-40"
    />

    <v-chip pill color="transparent" class="text" to="/about">
      <a>About</a>
    </v-chip>

    <v-chip pill color="transparent" class="text">
      <a>Products</a>
    </v-chip>

    <v-chip pill color="transparent" class="text">
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
    ></v-text-field>

    <v-btn small class="mr-1 btn-in text" outlined>Log in</v-btn>
    <v-btn small class="btn-up white--text text" outlined>Sign up</v-btn>
  </v-app-bar>
</template>

<script>
import VDropdown from "@/components/VDropdown.vue";

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
.text {
  text-transform: capitalize;
  font-family: 13px Arial, Helvetica Neue, Helvetica, sans-serif;
  padding: 6px 16px;
}
</style>
