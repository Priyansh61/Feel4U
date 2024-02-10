<template>
  <div class="flex flex-col justify-center items-center mt-10">
    <h1 class="font-bold text-2xl mb-20">Trending Community events</h1>
    <div class="flex flex-row flex-wrap gap-15 items-center justify-center">
      <div class="flex items-center ">
        <div class="container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
          <span class="absolute  bg-green-400 text-white py-1 px-4 rounded-md">Sponsored</span>
          <div v-if="imageURL" class="card-image">
            <img src="https://example.com/image.jpg" alt="Example Title" @error="handleImageError">
          </div>
          <div v-else class="card-image">
            <img src="../static/community.webp" class="w-full mb-5" />
          </div>
          <div class="font-bold">Neurelo</div>
          <div>Neurelo is a platform which loves to Sponsor events which can help community.</div> <!-- Hardcoded description -->
          <div class="flex justify-between items-center">
            <div>
              <div class="flex mt-5">Coins Required: <h1 class="w-5 ml-2">50</h1><img src="../static/coin.png" class="w-5 h-5" /></div> <!-- Hardcoded coins required -->
              <div class="flex mt-1">Reward: <h1 class="w-5 ml-2">100</h1><img src="../static/reward.png" class="w-5 h-5 " /></div> <!-- Hardcoded reward points -->
            </div>
            <div>
              <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Interested</button>
            </div>
          </div>
        </div>
      </div>
      <EventCard
        v-for="event in events"
        :key="event.id"
        :coinsReq="event.coinsReq"
        :imageURL="event.imageURL"
        :title="event.title"
        :createdAt="event.createdAt"
        :rewardPoints="event.rewardPoints"
        :status="event.status"
        :estimatedCompletionTime="event.estimatedCompletionTime"
        :description="event.description"
        :id="event.id"
      />
    </div>
  </div>
</template>


<script>
import EventCard from '~/components/card/EventCard.vue';

export default {
  components: { EventCard },
  data() {
    return {
      events: [],
    };
  },
  async asyncData({ $axios }) {
    let events = [];
    try {
      const response = await $axios.get('https://ap-south-1.aws.neurelo.com/rest/taskModel', {
        headers: {
          'X-Api-Key':'neurelo_9wKFBp874Z5xFw6ZCfvhXerAEguhOlizx4LDByOE/i3uOfyfvw3NdXgx5iBxCGAcv3lL6MNYY13SNX0JSJmKZdVOZv2lN1xfc2xrDdhgYFJh6z1mJWEzGeXlEySSl8qfBIBnM+C3iHu5/r1QOhC4BDWW0ZQes7nx71c5M5mUUdyB9XorzidcyC+uCNB+CSq3_q+Qnnw7ILceZMAbN5xiuc/gyuToSZe2Nt+nPxoGd7Mw='
        }
      });
      console.log(response.data);
      events = response.data;

    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
    return { events : events.data };
  }
}
</script>