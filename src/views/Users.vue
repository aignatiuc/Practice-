<template>
  <div>
    <div v-if="loading">
      Loading
    </div>

    <div v-else class="container flex flex-wrap mx-auto md:px-24">
      <v-user
        class="w-full p-2 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
        v-for="user in paginatedUsers"
        :key="user.id"
        :user="user"
      />
    </div>
    <button @click="getMoreUsers">Get more</button>
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
    limit: 20,
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
        const { data } = await getUsers({
          params: {
            limit: 20,
          },
        });
        this.users = data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    getMoreUsers() {
      this.limit += 20;
    },
  },
};
</script>
