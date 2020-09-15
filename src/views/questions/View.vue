<template>
  <div>
    <div v-if="loading">
      Loading
    </div>
    <div 
      v-else 
      class="container flex flex-wrap mx-auto"
    >
      <div class="text-3xl text-gray-500">
        {{ question.title }}
        <div class="flex grid-cols-2 gap-1 pb-2 mt-2 mb-4 border-b border-gray-100">
          <span class="text-sm text-gray-300">
            Active
            <span class="text-black">{{ timeAgo }} ago</span>
          </span>
          <span 
            class="text-sm text-gray-300"
          >
            Viewed {{ question.view_count }}
          </span>
        </div>
        <p 
          class="pt-2 text-base" 
          v-html="filterQuestionBody"
        />
        <div class="flex justify-between col-span-1 row-span-2">
          <div>
            <p
              v-for="tag in question.tags"
              :key="tag"
              class="inline-block p-1 mr-2 text-sm leading-none text-blue-200 bg-gray-400 rounded"
            >
              {{ tag }}
            </p>
          </div>
          <div class="block w-48">
            <div class="flex flex-col text-sm">
              <p class="text-gray-300">
                {{ timeAgo }} ago
              </p>
              <div class="flex">
                <img 
                  class="w-12 h-12 mr-4" 
                  :src="question.owner.profile_image" 
                >
                <div class="mt-1">
                  <router-link :to="{ name: 'home' }">
                    {{ question.owner.display_name }}
                  </router-link>
                  <p class="font-bold text-gray-300">
                    {{ question.owner.reputation }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        v-for="answer in answers" 
        :key="answer.id"
      >
        <div 
          class="mt-4 mb-4" 
          v-html="answer.body" 
        />
      </div>
      <div 
        class="container grid grid-cols-1 px-0 mr-4 md:px-24"
      />
    </div>
  </div>
</template>

<script>
import { getQuestions } from "@/api/questions";
import { getAnswers } from "@/api/answers";
import dayjs from "dayjs";

export default {
  data: () => ({
    question: {},
    loading: true,
    answers: [],
  }),
  computed: {
    filterQuestionBody() {
      return this.question.body;
    },
    timeAgo() {
      var relativeTime = require("dayjs/plugin/relativeTime");
      dayjs.extend(relativeTime);
      return dayjs.unix(this.question.last_activity_date).fromNow(true);
    },
  },
  created() {
    this.fetchQuestion();
    this.fetchAnswers();
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
  },
};
</script>
