<template>
  <div class="px-4">
    <div v-if="loading">Loading</div>

    <div v-else class="container flex flex-wrap mx-auto">
      <div class="text-3xl">
        Tags
        <p class="mt-2 text-base">
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>

        <router-link class="text-base" :to="{ name: 'home' }">Show all tag synonyms</router-link>

        <v-text-field
          v-model="searching"
          class="flex-1"
          outlined
          dense
          solo
          flat
          hide-details
          label="Filter by tag name"
          prepend-inner-icon="mdi-magnify"
        />
      </div>

      <div class="container grid gap-4 px-0 lg:grid-cols-4 md:px-24 sm:grid-cols-1 md:grid-cols-2">
        <tag v-for="tag in filteredTags" :key="tag.count" :tag="tag" />
      </div>

      <button @click="getMoreTags">Get more</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Tag from "@/components/Tag";
import { FETCH_TAGS } from "@/store/action-types";
import { GET_TAGS } from "@/store/getter-types";

export default {
  components: {
    Tag,
  },
  data: () => ({
    loading: true,
    limit: 36,
    searching: "",
  }),
  computed: {
    ...mapGetters({
      tags: GET_TAGS
    }),
    filteredTags () {
      if (this.searching) {
        const filter = (tag) => tag.name.includes(this.searching);

        return this.tags.filter(filter).slice(0, this.limit);
      }
      return this.tags.slice(0, this.limit);
    },
  },
  async created () {
    await this.fetchTags();
    this.loading = false;
  },
  methods: {
    ...mapActions({
      fetchTags: FETCH_TAGS,
    }),

    getMoreTags () {
      this.limit += 36;
    },
  },
};
</script>
