<template>
    <div class="flex items-center ">
      <div class="container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
        <div v-if="imageURL" class="card-image">
          <img :src="imageURL" :alt="title" @error="handleImageError">
        </div>
        <div v-else class="card-image">
          <img src="../../static/community.webp" class="w-full mb-5" />
        </div>
        <div class="font-bold">{{ name }}</div>
        <div>{{ about }}</div> <!-- Use truncatedDescription instead of description -->
        <div class="flex justify-between items-center">
          <div>
            <div class="flex mt-5">Occupation: <h1 class="w-5 ml-2">{{ occupation }}</h1><img src="../../static/occupation.png" class="w-5 h-5" /></div>
        </div>
            <div>
            <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Appointment</button>
          </div>
          <div>
            <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Start Chat</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageURL: String,
      description: String,
      id: String,
      about: String,
      occupation: String,
      name: String,
      calendlyLink: String,
    },
    computed: {
      truncatedDescription() {
        const maxLength = 100; // Set the maximum length for description
        return this.description.length > maxLength ? `${this.description.slice(0, maxLength)}...` : this.description;
      }
    },
    methods: {
      handleImageError(event) {
        event.target.src = 'defaultFallbackImageUrlHere.jpg';
      },
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
      expressInterest() {
        alert(`Expressing interest in ${this.title}`);

      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  
  