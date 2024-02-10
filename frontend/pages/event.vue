<template>
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <PhotoCard v-for="(photo, index) in photos" :key="index"
                   :title="photo.title"
                   :description="photo.description"
                   :imageUrl="photo.imageUrl"
                   :altText="photo.altText"
                   :time="photo.time" />
      </div>
    </div>
  </template>
  
  <script>
  import PhotoCard from '@/components/community/PhotoCard.vue'; // Adjust the path according to your project structure
  
  export default {
    components: {
      PhotoCard
    },
    data() {
      return {
        photos: [{
          title: "Best View in New York City",
          description: "The city that never sleeps",
          imageUrl: "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          altText: "Sunset in the mountains",
          time: "6 mins ago"
        },{
          title: "Another View in New York City",
          description: "Another stunning view",
          imageUrl: "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          altText: "Sunset in the mountains",
          time: "12 mins ago"
        }]
      }
    }
  }
  </script>
  