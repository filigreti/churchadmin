<template>
  <main>
    <div @click="$router.push('/dashboard')" class="flex items-center cursor-pointer">
      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52">
        <path
          d="M143.5 221.86L336.22 29.13A17.07 17.07 0 00312.09 5L107.3 209.8a17.07 17.07 0 000 24.13l204.8 204.8a17.07 17.07 0 0024.14-24.13L143.49 221.86z"
        />
      </svg>
      <h1 class="text-4xl pl-2 tracking-wide font-bold">{{$route.name}}</h1>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>