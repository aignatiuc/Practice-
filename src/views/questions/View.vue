<template>
  <div>
    <spinner v-if="loading">Loading</spinner>

    <div v-else class="container flex flex-wrap p-8 mx-auto">
      <question :question="question" />

      <div class="text-2xl">
        {{ question.answer_count }} Answers
        <answer v-for="answer in answers" :key="answer.id" :answer="answer" />

        <comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { getQuestions } from "@/api/questions";
import { getAnswers } from "@/api/answers";
import { getComments } from "@/api/comments";
import Question from "@/components/answered-question/Question";
import Answer from "@/components/answered-question/Answer";
import Comment from "@/components/answered-question/Comment";
import Spinner from "@/components/dashboard/Spinner";

export default {
  components: {
    Question,
    Answer,
		Comment,
		Spinner,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => ({
    question: null,
    loading: true,
    answers: [],
    comments: [],
  }),
  async created () {
    await Promise.all([this.fetchQuestion(), this.fetchAnswers(), this.fetchComments()])
    this.loading = false;
  },
  methods: {
    async fetchQuestion () {
      try {
        const { data } = await getQuestions({
          params: {
            id: this.id,
          },
        });
        this.question = data[0];
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAnswers () {
      try {
        const { data } = await getAnswers({
          params: {
            question_id: this.id,
          },
        });
        this.answers = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchComments () {
      try {
        const { data } = await getComments({
          params: {
            question_id: this.id,
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
