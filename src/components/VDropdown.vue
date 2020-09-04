<template>
  <div class="relative inline-block text-left">
    <div>
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          @click="toogleDropdown"
        >
          <slot />
        </button>
      </span>
    </div>
    <div
      v-show="open"
      class="absolute left-0 w-56 mt-2 origin-top-right rounded-md shadow-lg"
    >
      <div class="bg-white rounded-md shadow-xs">
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            >Account settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            >Support</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            >License</a
          >
          <form method="POST" action="#">
            <button
              type="submit"
              class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
  }),
  methods: {
    toogleDropdown() {
      this.open = !this.open;
    },
  },
};
</script>
