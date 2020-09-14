<template>
  <div
    class="object-contain w-full text-center bg-yellow-100 bg-center lg:bg-clip-content lg:mx-auto sm:pb-20 none:pb-20"
  >
    <v-img :src="require('@/assets/images/home_background.svg')">
      <p class="pt-32 text-4xl font-bold lg:text-5xl">
        We
        <span class="font-sans">&#60;3</span>
        people who code
      </p>
      <p class="w-2/5 max-w-lg mx-auto mt-0 mb-4 text-xl">
        We build products that empower developers and connect them to solutions
        that enable productivity, growth, and discovery.
      </p>
      <div class="flex self-center justify-center">
        <button
          class="px-4 py-2 mr-2 text-orange-100 bg-white border-orange-100 border-solid rounded-sm border-1"
        >
          For developers
        </button>
        <button class="px-4 py-2 text-white bg-orange-100 rounded-sm">
          For businesses
        </button>
      </div>
    </v-img>
  </div>
</template>
