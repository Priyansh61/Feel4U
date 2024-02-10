<template>
      <div class="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
              MoodScope   
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Sign up
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="">
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="">
                      </div>
                      <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                      </div>
                      <div class="flex items-center justify-between">
                          
                      </div>
                      <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                      <p class="text-sm font-light text-gray-500 ">
                          Have an Account? <nuxt-link to="login" class="font-medium text-primary-600 hover:underline">Sign In</nuxt-link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  export default {
    // You can add any component logic here if needed
  }
  </script>
  
  <style scoped>
  /* You can add any scoped styles here */
  </style>
