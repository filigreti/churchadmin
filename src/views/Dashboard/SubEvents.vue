<template>
  <main>
    <main>
      <div @click="$router.go(-1)" class="flex items-center cursor-pointer">
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52">
          <path d="M143.5 221.86L336.22 29.13A17.07 17.07 0 00312.09 5L107.3 209.8a17.07 17.07 0 000 24.13l204.8 204.8a17.07 17.07 0 0024.14-24.13L143.49 221.86z" />
        </svg>
        <h1 class="text-2xl pl-2 tracking-wide font-bold">
          Events /
          <span class="text-blue-600">{{ event.event_title }}</span>
        </h1>
      </div>
    </main>
    <form @submit.prevent="createNewEvent">
      <h1 class="text-2xl mt-5 tracking-wide text-gray-800 font-medium">Create New Event</h1>
      <div class="mt-8 p-8 shadow-xs rounded-lg">
        <div class="grid lg:grid-cols-2 lg:gap-5 row-gap-5">
          <div class="flex items-center">
            <h1 class="text-base font-light text-gray-700 tracking-wide">Title</h1>
            <input required v-model="event.event_title" class="bg-gray-100 font-light ml-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block w-full appearance-none leading-normal" type="string" placeholder="Title" />
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
            <svg v-if="event.event_flyer === null" class="fill-current text-gray-400 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M494.14 43.16H17.86C8 43.16 0 51.16 0 61.02v389.96c0 9.86 8 17.86 17.86 17.86h476.28c9.87 0 17.86-8 17.86-17.86V61.02c0-9.86-8-17.86-17.86-17.86zm-17.86 389.96H35.72V78.88h440.56v354.24z" />
              <path d="M191.1 122.34a65.57 65.57 0 00-65.48 65.5 65.57 65.57 0 0065.49 65.48 65.56 65.56 0 0065.48-65.49 65.57 65.57 0 00-65.48-65.49zm0 95.26a29.8 29.8 0 01-29.76-29.77 29.8 29.8 0 0129.77-29.76 29.8 29.8 0 0129.76 29.76 29.8 29.8 0 01-29.76 29.77zM352.71 269.22a17.84 17.84 0 00-17.82 1.74l-229.8 164.91 20.82 29.03 221.4-158.88 139.42 63.57 14.82-32.5-148.84-67.87z" />
              <path d="M9.63 276.9l16.47-31.7 209.58 108.96-16.47 31.69z" />
            </svg>
            <img v-else :src="event.event_flyer" class="h-32 w-32 object-contain" alt />

            <div class="text-xs text-gray-600 absolute bottom-0 -mb-2 bg-white px-2">Upload Image</div>
          </div>
          <textarea v-model="event.description" placeholder="Description" type="text" class="h-32 flex-grow text-sm p-2 lg:mt-0 mt-5 rounded-lg border lg:ml-10 focus:outline-none focus:shadow-outline" />
        </div>
      </div>
      <!-- <div class="mt-5 flex justify-end">
        <button
          class="bg-black text-xs uppercase leading-6 text-white font-bold py-2 px-6 rounded-lg"
        >Create</button>
      </div>-->
    </form>
    <div class="lg:px-2 overflow-x-auto mt-8">
      <div>
        <input v-model="search" type="text" class="border py-2 rounded-full w-64 mb-3 focus:outline-none pl-5 text-sm text-gray-600 font-light" />
      </div>
      <table class="table-auto w-full">
        <thead>
          <tr class="text-xs bg-gray-100 border-l border-t border-r capitalise">
            <th class="py-3">#</th>
            <th class="px-5 py-2">Name</th>
            <th class="px-4 py-3">Phone Number</th>
            <th class="px-5 py-2">Email</th>
            <th class="px-5 py-2">State /Country</th>
            <th class="px-5 py-2">WorkShop Class</th>
            <th class="px-5 py-2">Bible study Group No</th>
            <th class="px-5 py-2">Reg No</th>
            <th class="px-5 py-2">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-xs font-light tracking-wide text-gray-600" v-for="(person, index) in currentPost" :key="index">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">
              <div class="w-32">{{ person.attendee_first_name }} {{ person.attendee_last_name }}</div>
            </td>
            <td class="border px-4 py-2">
              <div class="w-24">{{ person.attendee_mobile_number }}</div>
            </td>
            <td class="border px-4 py-2">{{ person.attendee_email_address }}</td>

            <td class="border px-4 py-2">{{ person.attendee_state }},{{ person.attendee_country }}</td>
            <td class="border px-4 py-2">{{ person.attendee_state }},{{ person.workshop_class }}</td>
            <td class="border px-6 py-2">
              <div class="w-24">{{ person.bible_study_group_no }}</div>
            </td>
            <td class="border px-8 py-2">
              <div class="w-20">{{ person.reg_no }}</div>
            </td>
            <td class="border px-8 py-2">{{ person.attendee_gender }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex mt-5">
      <div :class="{ 'red border-blue-400 ': page == currentPage }" class="border py-2 px-2 m-1 text-blue-500 hover:bg-gray-200 cursor-pointer" v-for="page in pagination" :key="page" @click="paginate(page)">{{ page }}</div>
    </div>
  </main>
</template>

<script>
import Fuse from "fuse.js";
export default {
  data() {
    return {
      search: "",
      totalPage: null,
      currentPage: 1,
      total: 8,
      lastPostIndex: null,
      firstPostIndex: null,

      event: {
        event_title: "",
        event_attendees: [],
      },
    };
  },
  computed: {
    pagination() {
      let pageNumbers = [];
      for (let i = 1; i < Math.ceil(this.totalPage / this.total); i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    },
    currentPost() {
      if (this.event.event_attendees.length) {
        let lastPostIndex = this.currentPage * this.total;
        let firstPostIndex = lastPostIndex - this.total;

        const options = {
          keys: ["attendee_first_name", "attendee_last_name", "attendee_email_address", "reg_no"],
        };
        let k = this.event.event_attendees;
        const fuse = new Fuse(k, options);
        if (this.search == "") {
          return k.slice(firstPostIndex, lastPostIndex);
        } else {
          let search = [];
          fuse.search(this.search).map((x) => search.push(x.item));
          return search.slice(firstPostIndex, lastPostIndex);
        }
        // return (
        //   this.event.event_attendees
        //     // .filter((k) => {
        //     //   return (
        //     //     k.reg_no
        //     //       .toLowerCase()
        //     //       // k.attendee_last_name || // k.attendee_first_name ||
        //     //       // k.attendee_email_address
        //     //       .match(this.search.toLowerCase())
        //     //   );
        //     // })
        //     .slice(firstPostIndex, lastPostIndex)
        // );
      }

      //     return pageNumbers.filter(k => {
      //   return (
      //     k.attendee_first_name ||
      //     k.attendee_last_name ||
      //     k.attendee_mobile_number ||
      //     k.attendee_email_address
      //   ).match(this.search);
      // });
    },
  },

  methods: {
    paginate(x) {
      this.currentPage = x;
    },
  },
  mounted() {
    this.event = this.$store.getters.getEvents.results.find((x) => {
      return x.slug == this.$route.params.events;
    });
    this.totalLength = this.event.event_attendees.length;

    this.totalPage = this.event.event_attendees.length;
  },
  updated() {
    console.log(this.currentPost);
  },
};
</script>

<style>
.red {
  color: red !important;
}
</style>
