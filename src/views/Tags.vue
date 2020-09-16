<template>
  <div class="px-4">
    <div v-if="loading">
      Loading
    </div>
    <div 
      v-else 
      class="container flex flex-wrap mx-auto"
    >
      <div class="text-3xl">
        Tags
        <p class="mt-2 text-base">
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to
          find and answer your question.
        </p>
        <router-link 
          class="text-base" 
          :to="{ name: 'home' }"
        >
          Show all tag synonyms
        </router-link>

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
        <v-tag 
          v-for="tag in filteredTags" 
          :key="tag.count" 
          :tag="tag" 
        />
      </div>
      <button @click="getMoreTags">
        Get more
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import VTag from "@/components/Tag.vue";

export default {
  components: {
    VTag,
  },
  data: () => ({
    loading: true,
    limit: 36,
    searching: "",
  }),
  computed: {
    ...mapState("tags", ["tagsData"]),
    filteredTags() {
      if (this.searching) {
        const filter = (tag) => tag.name.includes(this.searching);

        return this.tagsData.filter(filter).slice(0, this.limit);
      }
      return this.tagsData.slice(0, this.limit);
    },
  },
  mounted() {
    this.loading = false;
  },
  created() {
    this.fetchTags();
  },
  methods: {
    ...mapActions("tags", ["fetchTags"]),

    getMoreTags() {
      this.limit += 36;
    },
  },
};
</script>
