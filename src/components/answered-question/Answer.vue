<template>
  <div class="grid grid-flow-col pt-2 border-b border-gray-100">
    <div class="row-span-3 m-3 text-4xl text-gray-300">
      <v-icon x-large>mdi-arrow-up-drop-circle</v-icon>

      <p class="mt-2 mr-6 text-center">{{ answer.score }}</p>

      <v-icon x-large class="pb-6">mdi-arrow-down-drop-circle</v-icon>
    </div>

    <div class="col-span-2 row-span-2 text-lg">
      <!-- eslint-disable -->
      <p class="pt-2 text-base" v-html="answer.body" />
      <div class="flex justify-between col-span-1 row-span-2">
        <div>
          <p
            class="inline-block p-1 mr-2 text-sm leading-none text-gray-300 bg-gray-100 rounded"
          >share</p>

          <p
            class="inline-block p-1 mr-2 text-sm leading-none text-gray-300 bg-gray-100 rounded"
          >improve this answer</p>

          <p
            class="inline-block p-1 mr-2 text-sm leading-none text-gray-300 bg-gray-100 rounded"
          >follow</p>
        </div>

        <div class="block w-48">
          <div class="flex flex-col text-sm">
            <p class="text-gray-300">answered {{ questionAnswered }}</p>
            <div class="flex">
              <img class="w-12 h-12 mr-4" :src="answer.owner.profile_image" />

              <div class="mt-1">
                <router-link :to="{ name: 'home' }">{{ answer.owner.display_name }}</router-link>

                <p class="font-bold text-gray-300">{{ answer.owner.reputation }}</p>
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
    answer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    questionAnswered() {
      return dayjs.unix(this.answer.creation_date).format("MMM DD YYYY HH:MM");
    },
  },
};
</script>
