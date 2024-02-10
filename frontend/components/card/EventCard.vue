<template>
  <div class="flex items-center ">
    <div class="container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div v-if="imageURL" class="card-image">
        <img :src="imageURL" :alt="title" @error="handleImageError">
      </div>
      <div v-else class="card-image">
        <img src="../../static/community.webp" class="w-full mb-5" />
      </div>
      <div class="font-bold">{{ title }}</div>
      <div>{{ truncatedDescription }}</div> <!-- Use truncatedDescription instead of description -->
      <div class="flex justify-between items-center">
        <div>
          <div class="flex mt-5">Coins Required: <h1 class="w-5 ml-2">{{ coinsReq }}</h1><img src="../../static/coin.png" class="w-5 h-5" /></div>
          <div class="flex mt-1">Reward: <h1 class="w-5 ml-2">{{ rewardPoints }}</h1><img src="../../static/reward.png" class="w-5 h-5 " /></div>
        </div>
        <div>
          <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Interested</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coinsReq: Number,
    imageURL: String,
    title: String,
    createdAt: String,
    rewardPoints: Number,
    status: String,
    estimatedCompletionTime: Number,
    description: String,
    id: String,
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
      // Implement your logic to mark interest here
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>

