<template>
  <div>
    <div v-if="loading">
      Loading
    </div>
    <div 
      v-else 
      class="container flex flex-wrap mx-auto"
    >
      <div class="text-3xl">
        All Questions
      </div>

      <div class="container grid grid-cols-1 px-0 mr-4 md:px-24">
        <v-question
          v-for="question in paginatedQuestions"
          :key="question.id"
          class="mb-4 mr-2"
          :question="question"
        />
      </div>

      <button @click="getMoreQuestions">
        Get more
      </button>
    </div>
  </div>
</template>

<script>
import { getQuestions } from "@/api/questions";
import VQuestion from "@/components/Question.vue";

export default {
  components: {
    VQuestion,
  },
  data: () => ({
    questions: null,
    loading: true,
    limit: 15,
  }),
  computed: {
    paginatedQuestions() {
      return this.question.slice(0, this.limit);
    },
  },
  created() {
    this.fetchQuestion();
  },
  methods: {
    async fetchQuestion() {
      this.loading = true;

      try {
        const { data } = await getQuestions();
        this.question = data;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    getMoreQuestions() {
      this.limit += 15;
    },
  },
};
</script>
