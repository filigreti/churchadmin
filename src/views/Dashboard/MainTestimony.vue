<template>
  <main>
    <route-info />
    <div class="mt-12 flex lg:flex-row flex-col lg:justify-between">
      <h1 class="text-2xl tracking-wide text-gray-800 font-medium">Approve Testimonies</h1>
      <input
        class="bg-gray-100 font-light max-w-md lg:mt-0 mt-4 w-full focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pl-4 lg:px-4 block appearance-none leading-normal"
        type="string"
        placeholder="Search Testimonies"
      />
    </div>
    <div class="lg:overflow-hidden lg:px-2 overflow-x-auto">
      <table class="table-auto w-full mt-8">
        <thead>
          <tr class="text-sm bg-gray-100 border-l border-t border-r capitalise">
            <th class="py-3">#</th>
            <th class="px-12 py-3">Fullname</th>
            <th class="px-12 py-3">State/Country</th>
            <th class="px-16 py-3">Address</th>
            <th class="py-3">Approve/ Decline</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-xs font-light tracking-wide text-gray-600 cursor-pointer"
            v-for="(testimony,index) in allTestimonies.results"
            :key="index"
            @click="send(testimony.id)"
          >
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{testimony.full_name}}</td>
            <td class="border px-4 py-2">{{testimony.state}} / {{testimony.country}}</td>
            <td class="border px-4 py-2">{{testimony.address ? testimony.address : `None `}}</td>
            <td class="border px-4 py-2">
              <div class="flex">
                <div
                  :class="{'border bg-blue-500 text-white':testimony.approved}"
                  class="rounded-full h-10 text-xs flex justify-center items-center w-10 border"
                >Yes</div>
                <div
                  :class="{'border bg-red-500 text-white':!testimony.approved}"
                  class="rounded-full h-10 text-xs flex justify-center items-center ml-6 w-10 border"
                >No</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-10 flex items-center">
      Showing page
      <span class="ml-5">
        <svg
          @click="previous"
          class="w-3 h-3 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 490.787 490.787"
          style="enable-background:new 0 0 490.787 490.787;"
          xml:space="preserve"
        >
          <path
            style="fill:#F44336;"
            d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006  c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083  c-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085  C368.236,489.664,365.511,490.792,362.671,490.787z"
          />
          <path
            d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256  c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262  L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z"
          />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      </span>
      {{$store.state.currentPage}} of {{allTestimonies.count}}
      <span>
        <svg
          @click="next"
          class="w-3 h-3 ml-3 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512.002 512.002"
          style="enable-background:new 0 0 512.002 512.002;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105    L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795    l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z"
              />
            </g>
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      </span>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllTestimonies"]),
    allTestimonies() {
      return this.getAllTestimonies;
    }
  },
  methods: {
    send(x) {
      this.$router.push({
        name: "Approve Testimony",
        params: {
          id: x
        }
      });
    },
    async next() {
      if (this.$store.state.currentPage < this.allTestimonies.count) {
        this.$store.commit("addPage");
        await this.$store.dispatch("getTestimonies");
      }
    },
    async previous() {
      if (this.$store.state.currentPage > 1) {
        this.$store.commit("removePage");
        await this.$store.dispatch("getTestimonies");
      }
    }
  },
  mounted() {
    console.log(this.allTestimonies, "lool");
  },
  async created() {
    await this.$store.dispatch("getTestimonies");
  }
};
</script>

<style></style>
