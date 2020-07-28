<template>
  <main id="dashboard">
    <div class="flex h-screen">
      <div class="w-64 lg:flex hidden lg:shadow-xl flex flex-col items-center">
        <div class="pt-12">
          <img
            src="https://source.unsplash.com/collection/1223439/1600x900"
            class="rounded-full w-40 h-40 object-cover"
            alt
          />
        </div>
        <div class="mt-5">
          <h1 class="font-medium text-gray-700 text-base">{{ this.$store.state.userDetails.email }}</h1>
          <div class="flex items-center pt-6 -ml-6">
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              height="512"
              viewBox="0 0 512 512"
              width="512"
            >
              <linearGradient id="a">
                <stop offset="0" stop-color="#addcff" />
                <stop offset=".5" stop-color="#eaf6ff" />
                <stop offset="1" stop-color="#eaf6ff" />
              </linearGradient>
              <linearGradient
                id="b"
                gradientUnits="userSpaceOnUse"
                x1="256"
                x2="256"
                xlink:href="#a"
                y1="496"
                y2="76"
              />
              <linearGradient
                id="c"
                gradientUnits="userSpaceOnUse"
                x1="256"
                x2="256"
                y1="436"
                y2="16"
              >
                <stop offset="0" stop-color="#5558ff" />
                <stop offset="1" stop-color="#00c0ff" />
              </linearGradient>
              <linearGradient
                id="d"
                gradientUnits="userSpaceOnUse"
                x1="136"
                x2="136"
                xlink:href="#a"
                y1="76"
                y2="16"
              />
              <path
                d="M497 496H15a15 15 0 01-15-15V106a30 30 0 0130-30h452a30 30 0 0130 30v375a15 15 0 01-15 15z"
                fill="url(#b)"
              />
              <path
                d="M497 16H211l-15.2 11.49L181 16h-30l-15.1 12.05L121 16H91L76.21 27.33 61 16H15C6.6 16 0 22.6 0 31v75h512V31c0-8.4-6.6-15-15-15zm-61 150H76a15 15 0 00-15 15v90a15 15 0 0015 15h360a15 15 0 0015-15v-90a15 15 0 00-15-15zM226 316H76a15 15 0 00-15 15v90a15 15 0 0015 15h150a15 15 0 0015-15v-90a15 15 0 00-15-15zm210 0H286a15 15 0 00-15 15v90a15 15 0 0015 15h150a15 15 0 0015-15v-90a15 15 0 00-15-15z"
                fill="url(#c)"
              />
              <path
                d="M61 61c0 8.4 6.6 15 15 15s15-6.6 15-15V16H61zm60 0c0 8.4 6.6 15 15 15s15-6.6 15-15V16h-30zm60-45v45c0 8.4 6.6 15 15 15s15-6.6 15-15V16z"
                fill="url(#d)"
              />
            </svg>
            <h1
              @click="$router.push({ name: 'Overview' })"
              class="cursor-pointer pl-2 font-medium text-blue-700 text-base"
            >Dashboard</h1>
          </div>

          <div class="mt-2 flex flex-col">
            <router-link
              class="pb-2 text-base font-light text-gray-500"
              :to="{ name: 'Events' }"
            >Events</router-link>
            <router-link class="pb-2 text-base font-light text-gray-500" :to="{ name: 'Live' }">Live</router-link>
            <router-link
              class="pb-2 text-base font-light text-gray-500"
              :to="{ name: 'Contact Us' }"
            >Contact Us</router-link>
            <router-link
              class="pb-2 text-base font-light text-gray-500"
              :to="{ name: 'Bible School' }"
            >Bible School</router-link>
            <router-link
              class="pb-2 text-base font-light text-gray-500"
              :to="{ name: 'Audio' }"
            >Media</router-link>
            <router-link
              class="pb-2 text-base font-light text-gray-500"
              :to="{ name: 'Testimonies' }"
            >Testimonies</router-link>
            <router-link
              class="pb-2 text-base font-light text-gray-500"
              :to="{ name: 'Salvation' }"
            >Salvation</router-link>
            <router-link
              class="pb-2 text-base font-light text-gray-500"
              :to="{ name: 'Articles' }"
            >Articles</router-link>

            <h1
              @click="signout"
              class="cursor-pointer font-medium text-dark-700 pt-2 text-base"
            >Logout</h1>
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto">
        <router-view class="lg:px-10 px-2 pt-10 pb-16" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    signout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },
  created() {
    this.$store.dispatch("getEvents");
  }
};
</script>

<style>
#dashboard .router-link-active,
.router-link-active {
  color: #4299e1;
  font-weight: 500;
}
</style>
