<template>
  <div class="p-3 border-gray-300 border-solid rounded-sm border-1 border-color">
    <p class="inline-block p-1 text-sm leading-none text-blue-200 bg-gray-400">{{ tag.name }}</p>

    <p class="mb-1 text-xs text-black">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque
      sapiente accusantium nemo explicabo numquam tempore omnis. Aliquid, iure
      dolorum. Officiis quae illo enim facilis reiciendis accusantium rerum
      earum unde.
    </p>

    <div class="grid grid-flow-col">
      <p class="text-xs text-gray-300">{{ tag.count }} questions</p>

      <p
        class="text-xs text-right text-gray-300"
      >{{ tag.count }} asked today, {{ tag.count }} this week</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
};
</script>
