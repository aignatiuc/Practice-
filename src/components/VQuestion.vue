<template>
  <div
    class="grid grid-flow-col grid-rows-3 gap-4 pt-2 mt-2 border-b border-gray-10"
  >
    <div class="row-span-3 m-3 text-xl text-center text-gray-20">
      {{ question.score }}
      <p class="text-xxs">votes</p>
      {{ question.answer_count }}
      <p class="text-xxs">answers</p>
      <p class="text-xxs">{{ question.view_count }} views</p>
    </div>

    <div class="col-span-2 row-span-2 text-lg">
      <router-link
        :to="
          `/quetions/${question.id}/${question.title
            .toLowerCase()
            .split(' ')
            .join('-')
            .slice(0, 70)}`
        "
        >{{ question.title }}</router-link
      >
      <p class="pt-2" v-html="filterQuestionBody"></p>
      <div class="flex justify-between col-span-1 row-span-2">
        <div>
          <p
            class="inline-block p-1 mr-2 text-sm leading-none rounded text-blue-20 bg-gray-40"
            v-for="tag in question.tags"
            :key="tag"
          >
            {{ tag }}
          </p>
        </div>
        <div class="block w-48">
          <div class="flex flex-col">
            <p>{{ timeAgo }}</p>
            <div class="flex ">
              <img class="w-12 h-12 mr-4" :src="question.owner.profile_image" />
              <div>
                <router-link to="/">{{
                  question.owner.display_name
                }}</router-link>
                <p>{{ question.owner.reputation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  computed: {
    filterQuestionBody() {
      return this.question.body.toString().substring(0, 130) + "..";
    },
    timeAgo() {
      return moment.unix(this.question.creation_date).fromNow();
    },
  },
};
</script>
