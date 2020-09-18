<template>
  <div class="text-3xl text-gray-500">
    {{ question.title }}
    <div class="flex grid-cols-2 gap-1 pb-2 mt-2 mb-4 border-b border-gray-100">
      <span class="text-sm text-gray-300">
        Asked
        <span class="text-black">{{ questionCreated }} ago</span>
      </span>

      <span class="text-sm text-gray-300">
        Active
        <span class="text-black">{{ questionActive }} ago</span>
      </span>

      <span class="text-sm text-gray-300">
        Viewed
        <span class="text-black">{{ question.view_count }} times</span>
      </span>
    </div>

    <div class="grid grid-flow-col grid-rows-3 gap-4 pt-2 mt-2">
      <div class="row-span-3 m-3 text-4xl text-center text-gray-300 col-1">
        <v-icon x-large>mdi-arrow-up-drop-circle</v-icon>

        <p class="mt-4">{{ question.score }}</p>

        <v-icon x-large class="pb-6">mdi-arrow-down-drop-circle</v-icon>
      </div>

      <div class="col-span-2 row-span-2 text-lg">
        <!-- eslint-disable -->
        <p class="pt-2 text-base" v-html="question.body" />

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
              <p class="text-gray-300">edited {{ questionEdited }}</p>

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
    questionCreated() {
      var relativeTime = require("dayjs/plugin/relativeTime");
      dayjs.extend(relativeTime);
      return dayjs.unix(this.question.creation_date).fromNow(true);
    },
    questionActive() {
      var relativeTime = require("dayjs/plugin/relativeTime");
      dayjs.extend(relativeTime);
      return dayjs.unix(this.question.last_activity_date).fromNow(true);
    },
    questionEdited() {
      return dayjs
        .unix(this.question.last_edit_date)
        .format("MMM DD YYYY HH:MM");
    },
  },
};
</script>