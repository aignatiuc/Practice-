<template>
  <div class="grid grid-flow-col grid-rows-3 gap-4 pt-2 mt-2 border-b border-gray-100">
    <div class="row-span-3 m-3 text-xl text-center text-gray-200">
      {{ question.score }}
      <p class="text-xxs">votes</p>
      {{ question.answer_count }}
      <p class="text-xxs">answers</p>

      <p class="text-xxs">{{ question.view_count }} views</p>
    </div>

    <div class="col-span-2 row-span-2 text-lg">
      <router-link :to="{ name: 'answered.question', params: { id: question.id}}">{{ question.title }}</router-link>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="pt-2" v-html="filterQuestionBody" />
      <div class="flex justify-between col-span-1 row-span-2">
        <div>
          <p
            v-for="tag in question.tags"
            :key="tag"
            class="inline-block p-1 mr-2 text-sm leading-none text-blue-200 bg-gray-400 rounded"
          >{{ tag }}</p>
        </div>

        <div class="block w-48">
          <div class="flex flex-col text-sm">
            <p class="text-gray-300">{{ timeAgo }} ago</p>

            <div class="flex">
              <img class="w-12 h-12 mr-4" :src="question.owner.profile_image" />

              <div class="mt-1">
                <router-link :to="{ name: 'home' }">{{ question.owner.display_name }}</router-link>
                <p class="font-bold text-gray-300">{{ question.owner.reputation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  computed: {
    filterQuestionBody () {
      return this.question.body.substring(0, 130) + "..";
    },
    timeAgo () {
      var relativeTime = require("dayjs/plugin/relativeTime");
      dayjs.extend(relativeTime);
      return dayjs.unix(this.question.creation_date).fromNow(true);
    },
  },
};
</script>
