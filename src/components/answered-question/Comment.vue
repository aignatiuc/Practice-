<template>
  <div class="pt-2 pl-20 text-sm border-b border-gray-100">
    <div class="flex flex-row gap-1">
      <p class="pr-4 text-orange-100">{{ comment.score }}</p>
      <!-- eslint-disable -->
      <p v-html="comment.body" />
    </div>
    <div class="text-right">
      <a>- {{ comment.owner.display_name }}</a>
      <p class="text-gray-300">{{ commentDate }}</p>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  computed: {
    commentDate() {
      return dayjs.unix(this.comment.creation_date).format("MMM DD YYYY HH:MM");
    },
  },
};
</script>
