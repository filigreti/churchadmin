<template>
  <main class="text-sm text-gray-800 font-thin">
    <div @click="$router.go(-1)" class="flex items-center cursor-pointer">
      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52">
        <path
          d="M143.5 221.86L336.22 29.13A17.07 17.07 0 00312.09 5L107.3 209.8a17.07 17.07 0 000 24.13l204.8 204.8a17.07 17.07 0 0024.14-24.13L143.49 221.86z"
        />
      </svg>
      <h1 class="text-4xl pl-2 tracking-wide font-bold">{{$route.name}}</h1>
    </div>
    <div class="mt-10">Name: {{all.full_name}}</div>
    <div class="mt-5">Testimony: {{all.testimony}}</div>
    <div v-if="all.testimony_file !== null" class="mt-5">File: {{all.testimony_file}}</div>
    <div class="mt-10">
      <button @click="yes" class="bg-black py-2 text-white rounded-md px-4">Approve</button>
      <button @click="noApprove" class="ml-5 bg-red-500 py-2 text-white rounded-md px-4">Decline</button>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    async yes() {
      let res = await this.$store.dispatch("approve", this.$route.params.id);
      if (res.message == "approved") {
        alert("Testimony Approved");
        this.$router.go(-1);
      }
    },
    async noApprove() {
      let res = await this.$store.dispatch("disapprove", this.$route.params.id);
      if (res.message == "disapproved") {
        alert("Testimony Disapproved");
        this.$router.go(-1);
      }
    }
  },
  computed: {
    ...mapGetters(["getAllTestimonies"]),
    allTestimonies() {
      return this.getAllTestimonies;
    },
    all() {
      if (this.allTestimonies.results.length) {
        return this.getAllTestimonies.results.find((x, i) => {
          return x.id == this.$route.params.id;
        });
      }
    }
  }
};
</script>

<style>
</style>