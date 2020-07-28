<template>
  <main>
    <div class="flex lg:flex-row flex-col lg:items-center justify-between">
      <route-info />
      <div class="relative flex items-center flex-grow lg:ml-20 lg:mt-0 mt-4">
        <input type="text" class="w-full h-12 border rounded-full focus:outline-none pl-20" placeholder="Search Recent Events" />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute ml-8" viewBox="0 0 515.56 515.56">
          <path d="M378.34 332.78c25.37-34.65 40.55-77.2 40.55-123.33C418.89 93.96 324.93 0 209.44 0S0 93.96 0 209.45s93.96 209.44 209.45 209.44c46.13 0 88.69-15.18 123.33-40.55L470 515.56l45.57-45.57-137.22-137.21zm-168.9 21.67c-79.95 0-145-65.04-145-145s65.05-145 145-145 145 65.04 145 145-65.04 145-145 145z" />
        </svg>
      </div>
    </div>
    <div class="mt-12">
      <form @submit.prevent="createNewEvent">
        <h1 class="text-2xl tracking-wide text-gray-800 font-medium">Create New Event</h1>
        <div class="mt-8 p-8 shadow-xs rounded-lg">
          <div class="grid lg:grid-cols-2 lg:gap-5 row-gap-5">
            <div class="flex items-center">
              <h1 class="text-base font-light text-gray-700 tracking-wide">Title</h1>
              <input required v-model="event.title" class="bg-gray-100 font-light ml-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block w-full appearance-none leading-normal" type="string" placeholder="Title" />
            </div>
            <div class="flex items-center">
              <h1 class="text-base font-light text-gray-700 tracking-wide">Time</h1>
              <input required v-model="event.event_time" class="bg-gray-100 font-light ml-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block w-full appearance-none leading-normal" type="time" placeholder="Time" />
            </div>
            <div class="flex items-center justify-between">
              <h1 class="text-base font-light text-gray-700 tracking-wide flex">Start Date</h1>
              <input required v-model="event.event_start_date" class="bg-gray-100 font-light ml-10 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block appearance-none leading-normal" type="date" placeholder="jane@example.com" />
            </div>
            <div class="flex items-center justify-between">
              <h1 class="text-base font-light text-gray-700 tracking-wide">End Date</h1>
              <input required v-model="event.event_end_date" class="bg-gray-100 font-light ml-10 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block appearance-none leading-normal" type="date" placeholder="jane@example.com" />
            </div>
          </div>
          <div class="flex items-center mt-5">
            <h1 class="text-base font-light text-gray-700 tracking-wide">Venue</h1>
            <input required v-model="event.address" class="bg-gray-100 font-light ml-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block w-full appearance-none leading-normal" type="string" placeholder="jane@example.com" />
          </div>
          <div class="mt-5 flex lg:flex-row flex-col">
            <div @click="$refs.file.click()" class="h-32 border w-32 rounded-lg flex justify-center items-center relative">
              <svg v-if="liveimage === null" class="fill-current text-gray-400 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M494.14 43.16H17.86C8 43.16 0 51.16 0 61.02v389.96c0 9.86 8 17.86 17.86 17.86h476.28c9.87 0 17.86-8 17.86-17.86V61.02c0-9.86-8-17.86-17.86-17.86zm-17.86 389.96H35.72V78.88h440.56v354.24z" />
                <path d="M191.1 122.34a65.57 65.57 0 00-65.48 65.5 65.57 65.57 0 0065.49 65.48 65.56 65.56 0 0065.48-65.49 65.57 65.57 0 00-65.48-65.49zm0 95.26a29.8 29.8 0 01-29.76-29.77 29.8 29.8 0 0129.77-29.76 29.8 29.8 0 0129.76 29.76 29.8 29.8 0 01-29.76 29.77zM352.71 269.22a17.84 17.84 0 00-17.82 1.74l-229.8 164.91 20.82 29.03 221.4-158.88 139.42 63.57 14.82-32.5-148.84-67.87z" />
                <path d="M9.63 276.9l16.47-31.7 209.58 108.96-16.47 31.69z" />
              </svg>
              <img v-else :src="liveimage" class="h-32 w-32 object-contain" alt="" />
              <input type="file" ref="file" accept="image/x-png, image/gif, image/jpeg" @change="change" class="hidden" name id />
              <div class="text-xs text-gray-600 absolute bottom-0 -mb-2 bg-white px-2">Upload Image</div>
            </div>
            <textarea v-model="event.description" placeholder="Description" type="text" class="h-32 flex-grow text-sm p-2 lg:mt-0 mt-5 rounded-lg border lg:ml-10 focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <div class="mt-5 flex justify-end">
          <button class="bg-black text-xs uppercase leading-6 text-white font-bold py-2 px-6 rounded-lg">Create</button>
        </div>
      </form>
      <div class="mt-5">
        <h1 class="text-2xl tracking-wide text-gray-800 font-medium">Edit Events</h1>
        <div class="mt-5 lg:px-10">
          <carousel :per-page="page" :centerMode="false" :navigationEnabled="width" :paginationEnabled="false" :loop="true">
            <slide v-for="(event, index) in allEvents.results" :key="index">
              <div :class="`box-${index}`" class="rounded shadow-xl mx-4 p-6">
                <img v-if="event.event_flyer !== null" style="filter:brightness(90%)" class="h-64 w-full object-cover" :src="event.event_flyer" alt />
                <img v-else class="h-64 w-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png" alt />
                <div class="flex justify-between items-center">
                  <div>
                    <div class="text-xs uppercase font-bold text-gray-800 mt-2">{{ event.event_title }}</div>
                    <div class="text-xs capitalize text-gray-600 leading-3">Created: {{ event.event_start_date }}</div>
                  </div>
                  <div>
                    <svg @click="deleteEvents(event.id)" class="w-6 h-6 text-gray-600 fill-current mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        d="M424 64h-88V48a48 48 0 00-48-48h-64a48 48 0 00-48 48v16H88a40 40 0 00-40 40v32a16 16 0 0016 16h384a16 16 0 0016-16v-32a40 40 0 00-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.36 184a5 5 0 00-4.99 5.24l13.2 277.04A47.94 47.94 0 00134.51 512h242.98a47.94 47.94 0 0047.94-45.72l13.2-277.04a5 5 0 00-5-5.24zM320 224a16 16 0 1132 0v208a16 16 0 11-32 0zm-80 0a16 16 0 1132 0v208a16 16 0 11-32 0zm-80 0a16 16 0 1132 0v208a16 16 0 11-32 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      event: {
        title: "",
        event_time: "",
        event_start_date: "",
        event_end_date: "",
        address: "",
        description: "",
        event_flyer: "",
      },
      liveimage: null,
      file: "",
      imageFile: "",
      imageContent: "",
      images: ["https://godscaremissionsinc.org/wp-content/uploads/2020/02/BONGOR-002.jpg", "https://godscaremissionsinc.org/wp-content/uploads/2020/02/PST-DJIMAS-1.jpg", "https://godscaremissionsinc.org/wp-content/uploads/2020/02/MAROUA-003.jpg", "https://godscaremissionsinc.org/wp-content/uploads/2020/02/NGOUNDERE.jpg", "https://godscaremissionsinc.org/wp-content/uploads/2020/02/GAROUA-FLYER-2020-768x1038.png"],
    };
  },
  methods: {
    async change(x) {
      this.imageFile = x.target.files[0];
      const ref = this.$firebase.storage().ref();
      const name = new Date() + "-" + this.imageFile.name;
      const metadata = {
        contentType: this.imageFile.type,
      };
      const task = ref.child(name).put(this.imageFile, metadata);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          this.event.event_flyer = url;
          this.liveimage = url;
        });
    },
    async createNewEvent() {
      // console.log(this.event);
      let res = await this.$store.dispatch("createAdminEvent", this.event);
      if (res.status == 201) {
        this.event.title = "";
        this.event.event_time = "";
        this.event.event_start_date = "";
        this.event.event_end_date = "";
        this.event.description = "";
        this.event.address = "";
        alert("Event created successfully");
        await this.$store.dispatch("getEvents");
      }
    },
    deleteEvents(x) {
      this.$store.dispatch("deleteEvent", x);
    },
  },
  computed: {
    ...mapGetters(["getEvents"]),
    width() {
      return window.innerWidth > 650 ? true : false;
    },
    page() {
      return window.innerWidth > 650 ? 3 : 1;
    },
    allEvents() {
      return this.getEvents;
    },
  },

  components: {
    Carousel,
    Slide,
  },
};
</script>

<style></style>
