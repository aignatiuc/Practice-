<template>
  <div class="flex items-center min-h-screen text-white bg-gradient-to-r from-blue-100 to-orange-100">
    <div class="container flex flex-wrap items-center p-4 mx-auto">
      <div class="w-full p-4 text-center md:w-5/12">
        <img 
          src="@/assets/images/404.svg" 
          alt="Not Found"
        >
      </div>
      <div class="w-full p-4 text-center md:w-7/12 md:text-left">
        <div class="text-6xl font-medium">
          404
        </div>
        <div class="mb-4 text-xl font-medium md:text-3xl">
          Oops. The page you are trying to get to never existed in this reality, or has
          migrated to a parallel universe.
        </div>
        <div class="mb-8 text-lg">
          Try going back to home page and repeating your action. Or, contact
          helpdesk for support.
        </div>
        <router-link 
          :to="{ name: 'home' }" 
          class="p-4 font-bold border border-white rounded"
        >
          Go Home
        </router-link>
      </div>
    </div>
  </div>
</template>
