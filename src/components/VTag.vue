<template>
  <div class="p-3 border-solid rounded-sm border-1 border-color border-gray-30">
    <p class="inline-block p-1 text-sm leading-none text-blue-20 bg-gray-40">{{ tag.name }}</p>
    <p
      class="mb-1 text-xs text-black"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque sapiente accusantium nemo explicabo numquam tempore omnis. Aliquid, iure dolorum. Officiis quae illo enim facilis reiciendis accusantium rerum earum unde.</p>
    <div class="grid grid-flow-col">
      <p class="text-xs text-gray-30">{{ tag.count }} questions</p>
      <p
        class="text-xs text-right text-gray-30"
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
