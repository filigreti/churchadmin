<template>
  <main>
    <route-info />
    <div class="mt-12 flex lg:flex-row flex-col lg:justify-between">
      <h1 class="text-2xl tracking-wide text-gray-800 font-medium">Contact Us</h1>
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
            <th class="px-4 py-3">Phone Numbers</th>
            <th class="px-16 py-3">Email</th>
            <th class="px-16 py-3">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-xs font-light tracking-wide text-gray-600"
            v-for="(contact,index) in allContacts.results"
            :key="index"
          >
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{contact.full_name}}</td>
            <td class="border px-4 py-2">{{contact.mobile_number}}</td>
            <td class="border px-4 py-2">{{contact.email_address}}</td>
            <td class="border px-4 py-2">{{contact.message}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllContacts"]),
    allContacts() {
      return this.getAllContacts;
    },
  },
  async mounted() {
    await this.$store.dispatch("getContacts");
    console.log(this.allContacts);
  },
};
</script>

<style></style>
