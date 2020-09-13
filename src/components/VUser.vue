<template>
  <div class="flex justify-start max-w-xs">
    <div>
      <v-img class="w-12" :src="user.profile_image" />
    </div>
    <div class="ml-2">
      <router-link
        :to="
          `/users/${user.id}/${user.display_name
            .toLowerCase()
            .replace(/ /, '-')}`
        "
        class="text-sm"
        >{{ user.display_name }}</router-link
      >
      <p class="mb-1 text-xs text-gray-600 ">
        {{ user.location }}
      </p>
      <p class="text-xs font-bold text-gray-600">
        {{ user.reputation }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
