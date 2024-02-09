<template>
    <div class="rounded overflow-hidden shadow-lg">
      <div class="relative">
          <img class="w-full"
               :src="imageUrl"
               :alt="altText">
          <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
          </div>
      </div>
      <div class="px-6 py-4">
        <a href="#"
           class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{{ title }}</a>
        <p class="text-gray-500 text-sm">
          {{ description }}
        </p>
      </div>
      <div class="px-6 py-4 flex flex-row items-center">
        <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
               style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span class="ml-1">{{ time }}</span>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      imageUrl: String,
      altText: String,
      time: String
    }
  }
  </script>
  
  
