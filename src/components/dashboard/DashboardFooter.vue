<template>
  <footer class="justify-between bg-gray-600">
    <div class="flex flex-wrap justify-center">
      <div class="pt-6 mr-4">
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196"
          class="w-12"
        />
      </div>

      <div class="w-48 p-5">
        <div class="text-xs font-bold text-gray-700 uppercase">STACK OVERFLOW</div>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Services</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Jobs</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Developer Jobs Directory</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Salary Calculator</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Help</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Mobile</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Disable Responsiveness</p>
        </router-link>
      </div>

      <div class="w-48 p-5">
        <div class="text-xs font-bold text-gray-700 uppercase">PRODUCTS</div>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Teams</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Talent</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Advertising</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Enterprise</p>
        </router-link>
      </div>

      <div class="w-48 p-5">
        <div class="text-xs font-bold text-gray-700 uppercase">COMPANY</div>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">About</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Press</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Work Here</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Legal</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Privacy Policy</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Contact Us</p>
        </router-link>
      </div>

      <div class="w-48 p-5">
        <div
          class="text-xs font-bold text-gray-700 uppercase"
        >STACK EXCHANGE NETWORK</div>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Technology</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Life / Arts</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Culture / Recreation</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Science</p>
        </router-link>

        <router-link
          class="block my-3 text-gray-300"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Other</p>
        </router-link>
      </div>
    </div>

    <div
      class="flex flex-col max-w-6xl px-3 pt-5 pb-5 m-auto text-sm text-gray-300 md:flex-row"
    >
      <div class="flex flex-row gap-2 mt-2 md:flex-auto md:flex-row-reverse">
        <router-link
          class="block my-3"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Blog</p>
        </router-link>

        <router-link
          class="block my-3"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Facebook</p>
        </router-link>

        <router-link
          class="block my-3"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Twitter</p>
        </router-link>

        <router-link
          class="block my-3"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">LinkedIn</p>
        </router-link>

        <router-link
          class="block my-3"
          :to="{ name: 'home' }"
        >
          <p class="text-xs text-gray-300">Instagram</p>
        </router-link>
      </div>

      <div class="mt-2">© Copyright 2020. All Rights Reserved.</div>
    </div>
  </footer>
</template>
