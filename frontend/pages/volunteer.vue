<template>
    <div class="flex flex-col justify-center items-center mt-10">
      <h1 class="font-bold text-2xl mb-20">Some best persons for you</h1>
      <div class="flex flex-row flex-wrap gap-15 items-center justify-center">
        <Volunteer
          v-for="event in events"
          :key="event.userId"
          :about="event.about"
          :occupation="event.occupation"
          :name="event.name"
          :calendlyLink="event.calendlyLink"
          :id="event.id"
          :imageURL="event.image"
        />
      </div>
    </div>
  </template>
  
  
  <script>
  import Volunteer from '~/components/card/Volunteer.vue';
  
  export default {
    components: { Volunteer},
    data() {
      return {
        events: [],
      };
    },
    async asyncData({ $axios }) {
      let events = [];
      try {
        const response = await $axios.get("https://ap-south-1.aws.neurelo.com/rest/volunteer", {
            headers: {
              'X-Api-Key': process.env.NUXT_ENV_NEURELO,
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