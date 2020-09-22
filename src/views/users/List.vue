<template>
  <div>
    <div v-if="loading">Loading</div>

    <div v-else class="container flex flex-wrap mx-auto">
      <div class="text-3xl">
        Users
        <v-text-field
          v-model="searching"
          class="flex-1 mt-4"
          outlined
          dense
          solo
          flat
          hide-details
          label="Filter by user"
          prepend-inner-icon="mdi-magnify"
        />
      </div>

      <div
        class="container grid gap-4 px-0 mt-6 lg:grid-cols-4 md:px-24 sm:grid-cols-1 md:grid-cols-2"
      >
        <user v-for="user in filteredUsers" :key="user.id" :user="user" />
      </div>

      <button @click="getMoreUsers">Get more</button>
    </div>
  </div>
</template>

<script>
import { getUsers } from "@/api/users";
import User from "@/components/User";

export default {
  components: {
    User,
  },
  data: () => ({
    users: null,
    loading: true,
    limit: 36,
    searching: "",
  }),
  computed: {
    filteredUsers () {
      if (this.searching) {
        const filter = (user) => user.display_name.includes(this.searching);

        return this.users.filter(filter).slice(0, this.limit);
      }
      return this.users.slice(0, this.limit);
    },
  },
  created () {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers () {
      this.loading = true;

      try {
        const { data } = await getUsers();
        this.users = data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    getMoreUsers () {
      this.limit += 36;
    },
  },
};
</script>
