<template>
    <div class="card">
      <div v-if="imageURL" class="card-image">
        <img :src="imageURL" :alt="title" onerror="this.src='defaultFallbackImageUrlHere.jpg'">
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <div class="card-attributes">
          <div class="attribute"><span class="label">Coins Required:</span> {{ coinsReq }}</div>
          <div class="attribute"><span class="label">Reward Points:</span> {{ rewardPoints }}</div>
        </div>
      </div>
      <div class="card-footer">
        <button @click="expressInterest">Interested</button>
        <span class="id">ID: {{ id }}</span>
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
    async mounted() {
        console.log('EventCard mounted');
        console.log(this.coinsReq);
        console.log(this.imageURL);
        console.log(this.title);
        console.log(this.createdAt);
        console.log(this.rewardPoints);
        console.log(this.status);
        console.log(this.estimatedCompletionTime);

    },
    methods: {

      formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
      expressInterest() {
        alert(`Expressing interest in ${this.title}`);
        // Implement your logic to mark interest here
      },
    },
  }
  </script>
  
  <style scoped>
  .card {
    max-width: 320px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 16px;
  }
  
  .card-title {
    font-size: 18px;
    margin-bottom: 8px;
  }
  
  .card-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 16px;
  }
  
  .card-attributes .attribute {
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  .card-attributes .label {
    font-weight: bold;
  }
  
  .card-footer {
    padding: 10px 16px;
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-footer button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .card-footer button:hover {
    background-color: #0056b3;
  }
  
  .id {
    font-size: 12px;
    color: #666;
  }
  </style>
  