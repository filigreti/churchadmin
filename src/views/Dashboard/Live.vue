<template>
  <main>
    <route-info />
    <div class="mt-12">
      <h1 class="text-2xl tracking-wide text-gray-800 font-medium">Edit Header</h1>
      <h1 class="text-2xl mt-6 tracking-wide text-gray-800 font-medium">Channels / Urls</h1>
    </div>
    <div>
      <div class="mt-10 border shadow-sm p-6 rounded-lg">
        <div class="flex items-center lg:flex-row flex-col  justify-between">
          <h1 class="text-base font-light text-gray-700 tracking-wide">Live Stream Url:</h1>
          <input class="bg-gray-100 font-light max-w-2xl lg:mt-0 mt-4 w-full  focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block  appearance-none leading-normal" type="string" placeholder="Live Stream" />
        </div>
      </div>
      <div class="mt-5 flex justify-end">
        <button class="bg-black text-xs uppercase leading-6 text-white font-bold py-2 px-6 rounded-lg">Update</button>
      </div>
    </div>
    <div>
      <div class="mt-10 border shadow-sm p-6 rounded-lg">
        <div class="flex items-center lg:flex-row flex-col  justify-between">
          <h1 class="text-base font-light text-gray-700 tracking-wide">Live Stream Shortcode:</h1>
          <input class="bg-gray-100 font-light max-w-2xl lg:mt-0 mt-4 w-full  focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block  appearance-none leading-normal" type="string" placeholder="Shortcode Code" />
        </div>
      </div>
      <div class="mt-5 flex justify-end">
        <button class="bg-black text-xs uppercase leading-6 text-white font-bold py-2 px-6 rounded-lg">Update</button>
      </div>
    </div>
    <div>
      <div class="mt-10 border shadow-sm p-6 rounded-lg">
        <div class="flex items-center lg:flex-row flex-col  justify-between">
          <h1 class="text-base font-light text-gray-700 tracking-wide">Youtube Channel Link:</h1>
          <input class="bg-gray-100 font-light max-w-2xl lg:mt-0 mt-4 w-full  focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block  appearance-none leading-normal" type="string" placeholder="Youtube Link" />
        </div>
      </div>
      <div class="mt-5 flex justify-end">
        <button class="bg-black text-xs uppercase leading-6 text-white font-bold py-2 px-6 rounded-lg">Update</button>
      </div>
    </div>
    <div>
      <div class="mt-10 border shadow-sm p-6 rounded-lg">
        <div class="flex items-center lg:flex-row flex-col  justify-between">
          <h1 class="text-base font-light text-gray-700 tracking-wide">Online radio Link:</h1>
          <input class="bg-gray-100 font-light max-w-2xl lg:mt-0 mt-4 w-full  focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block  appearance-none leading-normal" type="string" placeholder="Radio Link" />
        </div>
      </div>
      <div class="mt-5 flex justify-end">
        <button class="bg-black text-xs uppercase leading-6 text-white font-bold py-2 px-6 rounded-lg">Update</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
