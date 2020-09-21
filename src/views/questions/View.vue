<template>
  <div>
    <div v-if="loading">Loading</div>

    <div v-else class="container flex flex-wrap p-8 mx-auto">
      <v-question :question="question" />

      <div class="text-2xl">
        {{ question.answer_count }} Answers
        <v-answer v-for="answer in answers" :key="answer.id" :answer="answer" />

        <v-comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { getQuestions } from "@/api/questions";
import { getAnswers } from "@/api/answers";
import { getComments } from "@/api/comments";
import VQuestion from "@/components/answered-question/Question.vue";
import VAnswer from "@/components/answered-question/Answer.vue";
import VComment from "@/components/answered-question/Comment.vue";

export default {
  components: {
    VQuestion,
    VAnswer,
    VComment,
  },
  data: () => ({
    question: {},
    loading: true,
    answers: [],
    comments: [],
  }),
  async created() {
    await this.fetchQuestion();
    await this.fetchAnswers();
    await this.fetchComments();
    this.loading = false;
  },
  methods: {
    async fetchQuestion() {
      try {
        const { data } = await getQuestions({
          params: {
            id: this.$route.params.id,
          },
        });
        this.question = data[0];
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAnswers() {
      try {
        const { data } = await getAnswers({
          params: {
            question_id: this.$route.params.id,
          },
        });
        this.answers = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchComments() {
      try {
        const { data } = await getComments({
          params: {
            question_id: this.$route.params.id,
          },
        });
        this.comments = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
