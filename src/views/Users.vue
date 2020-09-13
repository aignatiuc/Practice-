<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-else class="container flex flex-wrap mx-auto">
      <div class="text-3xl">
        Users
        <v-text-field
          class="flex-1 ml-4 mr-4"
          outlined
          dense
          solo
          flat
          hide-details
          label="Filter by user"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>

      <div class="container flex flex-wrap mx-auto md:px-24">
        <v-user
          class="w-full p-2 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
          v-for="user in paginatedUsers"
          :key="user.id"
          :user="user"
        />
      </div>
      <button @click="getMoreUsers">Get more</button>
    </div>
  </div>
</template>

<script>
import { getUsers } from "../api/users";
import VUser from "../components/VUser.vue";

export default {
  components: {
    VUser,
  },
  mounted() {
    this.fetchUsers();
  },
  data: () => ({
    users: null,
    loading: true,
    limit: 36,
  }),
  computed: {
    paginatedUsers() {
      return this.users.slice(0, this.limit);
    },
  },
  methods: {
    async fetchUsers() {
      this.loading = true;

      try {
        const { data } = await getUsers();
        this.users = data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    getMoreUsers() {
      this.limit += 36;
    },
  },
};
</script>
