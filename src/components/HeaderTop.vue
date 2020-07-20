
<template>
  <main id="header-top">
    <div
      class="py-6 lg:flex-row bg-white flex-wrap fixed top-0 w-full shadow-xl flex items-center px-10 justify-between"
    >
      <div class="flex justify-between items-center">
        <div
          @click="$router.push('/')"
          class="cursor-pointer text-lg font-medium text-gray-800"
          to="/"
        >God's care Admin Panel</div>
      </div>
      <div class="lg:flex hidden lg:flex-row flex-col mr-20 lg:mt-0 mt-5">
        <router-link
          class="lg:pb-0 pb-4 text-base font-light uppercase text-gray-500"
          to="/dashboard"
        >Home</router-link>
        <router-link
          class="lg:pb-0 pb-4 text-base lg:pl-20 font-light uppercase text-gray-500"
          to="/about"
        >About</router-link>
        <router-link
          class="lg:pb-0 pb-4 text-base lg:pl-20 font-light uppercase text-gray-500"
          to="/contact"
        >Contact Us</router-link>
        <div class="text-base lg:pl-20 font-light uppercase text-gray-500" to="/dashboard">Log Out</div>
      </div>
      <div class="lg:hidden">
        <svg
          v-if="toggle "
          @click="toggle = !toggle"
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M437.13 74.94c-99.83-99.83-262.31-99.83-362.14 0C26.64 123.3 0 187.62 0 256s26.64 132.7 75 181.05c49.92 49.93 115.49 74.88 181.06 74.88s131.14-24.95 181.06-74.88c99.83-99.82 99.83-262.27 0-362.11zM409.08 409c-84.38 84.37-221.67 84.37-306.04 0-40.86-40.86-63.37-95.2-63.37-153s22.51-112.15 63.37-153.03c84.37-84.37 221.67-84.35 306.04 0 84.36 84.38 84.36 221.67 0 306.03z"
          />
          <path
            d="M341.52 310.83l-56.15-56.07 56.15-56.07a19.84 19.84 0 10-28.05-28.07l-56.18 56.11-56.19-56.11a19.84 19.84 0 10-28.05 28.06l56.16 56.08-56.16 56.07a19.83 19.83 0 1028.05 28.06l56.2-56.1 56.18 56.1a19.76 19.76 0 0014.02 5.8 19.83 19.83 0 0014.02-33.86z"
          />
        </svg>
        <svg
          v-if="!toggle"
          @click="toggle = !toggle"
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          height="512"
          viewBox="0 0 512 512"
          width="512"
        >
          <path
            d="M464.88 64.27H47.12A47.18 47.18 0 000 111.42a47.17 47.17 0 0047.12 47.11h417.76A47.17 47.17 0 00512 111.42a47.18 47.18 0 00-47.12-47.15zM464.88 208.87H47.12A47.18 47.18 0 000 256.02a47.17 47.17 0 0047.12 47.11h417.76A47.17 47.17 0 00512 256.02a47.18 47.18 0 00-47.12-47.15zM464.88 353.47H47.12A47.18 47.18 0 000 400.62a47.17 47.17 0 0047.12 47.11h417.76A47.17 47.17 0 00512 400.62a47.18 47.18 0 00-47.12-47.15z"
          />
        </svg>
      </div>
      <div class="lg:hidden flex flex-row" v-show="toggle">
        <div class="flex flex-col mt-4">
          <router-link
            class="lg:pb-0 pb-4 text-base font-light uppercase text-gray-500"
            to="/dashboard"
          >Home</router-link>
          <router-link
            class="lg:pb-0 pb-4 text-base lg:pl-20 font-light uppercase text-gray-500"
            to="/about"
          >About</router-link>
          <router-link
            class="lg:pb-0 pb-4 text-base lg:pl-20 font-light uppercase text-gray-500"
            to="/contact"
          >Contact Us</router-link>
          <div class="text-base lg:pl-20 font-light uppercase text-gray-500" to="/dashboard">Log Out</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    };
  }
};
</script>

<style>
#header-top .router-link-exact-active {
  color: #4299e1;
}
</style>