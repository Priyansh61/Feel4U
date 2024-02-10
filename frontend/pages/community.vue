<template>
  <div>
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