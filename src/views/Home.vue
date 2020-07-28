<template>
  <main>
    <div class="h-screen w-full flex justify-center items-center flex-col">
      <h1 class="text-4xl text-gray-800 font-bold">Admin Login</h1>
      <form
        @submit.prevent="adminLogin"
        class="max-w-md w-full flex flex-col items-center shadow-xs rounded-md bg-white mt-8 py-6 px-16 m-5"
      >
        <h1 class="text-base text-gray-800 text-center font-medium">Username</h1>
        <input
          required
          v-model="user.email"
          type="text"
          class="rounded-full w-full mt-3 focus:outline-none text-sm py-2 text-center bg-gray-200"
          name
          id
        />
        <h1 class="text-base text-gray-800 mt-6 text-center font-medium">Password</h1>
        <input
          required
          v-model="user.password"
          type="password"
          class="rounded-full w-full mt-3 focus:outline-none text-sm py-2 text-center bg-gray-200"
          name
          id
        />
        <button class="mt-10 w-full bg-black text-white font-normal py-2 rounded-full">Login</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "charles@gmail.com",
        password: "charles12345"
      }
    };
  },
  methods: {
    async adminLogin() {
      let res = await this.$store.dispatch("login", this.user);
      if (res.status == 200) {
        this.$router.push("/dashboard");
      }
    }
  }
};
</script>

<style></style>
