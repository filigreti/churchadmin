<template>
  <main>
    <route-info />
    <div class="mt-12 flex lg:flex-row flex-col lg:justify-between">
      <h1 class="text-2xl tracking-wide text-gray-800 font-medium">Approve Testimonies</h1>
      <input class="bg-gray-100 font-light  max-w-md lg:mt-0 mt-4 w-full  focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pl-4 lg:px-4 block  appearance-none leading-normal" type="string" placeholder="Search Testimonies" />
    </div>
    <div class="lg:overflow-hidden lg:px-2 overflow-x-auto">
      <table class="table-auto w-full   mt-8">
        <thead>
          <tr class="text-sm bg-gray-100 border-l  border-t border-r  capitalise">
            <th class=" py-3 ">#</th>
            <th class="px-12 py-3">Fullname</th>
            <th class="px-12 py-3">State/Country</th>
            <th class="px-16 py-3">Address</th>
            <th class=" py-3 ">Approve/ Decline</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-xs font-light tracking-wide text-gray-600" v-for="i in 5" :key="i">
            <td class="border px-4 py-2">{{ i }}</td>
            <td class="border px-4 py-2">Adam Wathan</td>
            <td class="border px-4 py-2">Lagos / Nigeria</td>
            <td class="border px-4 py-2">No 12 Sinatu Lane Soluyi Gbagagda</td>
            <td class="border px-4 py-2">
              <div class="flex">
                <div class="rounded-full h-10 text-xs flex justify-center items-center w-10 border">Yes</div>
                <div class="rounded-full h-10 text-xs flex justify-center items-center ml-6 w-10 border">No</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
