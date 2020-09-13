<template>
  <div class="px-4">
    <div v-if="loading">Loading</div>
    <div v-else class="container flex flex-wrap mx-auto">
      <div class="text-3xl">
        Tags
        <p
          class="mt-2 text-base"
        >A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
        <router-link class="text-base" to="/">Show all tag synonyms</router-link>
        <v-text-field
          class="flex-1"
          outlined
          dense
          solo
          flat
          hide-details
          label="Filter by tag name"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>

      <div class="container grid px-0 mr-4 lg:grid-cols-4 md:px-24 sm:grid-cols-2 md:grid-cols-3">
        <v-tags class="mb-4 mr-2" v-for="tag in paginatedTags" :key="tag.count" :tag="tag" />
      </div>
      <button @click="getMoreTags">Get more</button>
    </div>
  </div>
</template>

<script>
import { getTags } from "../api/tags";
import VTags from "../components/VTags.vue";

export default {
  components: {
    VTags,
  },
  mounted() {
    this.fetchTags();
  },
  data: () => ({
    tags: null,
    loading: true,
    limit: 36,
  }),
  computed: {
    paginatedTags() {
      return this.tags.slice(0, this.limit);
    },
  },
  methods: {
    async fetchTags() {
      this.loading = true;

      try {
        const { data } = await getTags();
        this.tags = data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    getMoreTags() {
      this.limit += 36;
    },
  },
};
</script>
