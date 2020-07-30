<template>
  <div>
    <form @submit.prevent="audio">
      <div class="p-8 shadow-xs rounded-lg">
        <div class="grid lg:grid-cols-2 lg:gap-5 row-gap-5">
          <div class="flex items-center">
            <h1 class="text-base font-light text-gray-700 tracking-wide">Title</h1>
            <input
              class="bg-gray-100 font-light ml-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block w-full appearance-none leading-normal"
              type="string"
              placeholder="Title"
              v-model="file.title"
              required
            />
          </div>
          <div class="flex items-center">
            <h1 class="text-base font-light text-gray-700 tracking-wide">Speaker</h1>
            <input
              class="bg-gray-100 font-light ml-5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 pl-4 lg:px-4 block w-full appearance-none leading-normal"
              type="string"
              placeholder="Speaker Name"
              v-model="file.publisher"
              required
            />
          </div>
        </div>
        <div class="mt-10 flex lg:flex-row lg:px-20 flex-col">
          <div
            @click="$refs.file.click()"
            class="h-32 border w-32 rounded-lg flex justify-center items-center relative"
          >
            <svg
              v-if="!complete"
              class="fill-current text-gray-400 w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
            >
              <path
                d="M278.94 17.58a15.95 15.95 0 00-16.92 1.92L106.37 144H32c-17.63 0-32 14.38-32 32v128c0 17.67 14.37 32 32 32h74.37l155.61 124.52a16.16 16.16 0 0010.02 3.49c2.37 0 4.74-.54 6.94-1.6A15.97 15.97 0 00288 448V32c0-6.14-3.52-11.74-9.06-14.43zM369 126.86a16.04 16.04 0 00-22.63.12 16.05 16.05 0 00.13 22.66c24.19 23.87 37.5 55.97 37.5 90.37s-13.31 66.5-37.5 90.37a16.01 16.01 0 00-.13 22.62 15.94 15.94 0 0011.36 4.74c4.06 0 8.13-1.54 11.26-4.64C399.33 323.24 416 283.05 416 240s-16.67-83.22-47-113.14z"
              />
              <path
                d="M414.14 81.77a16.02 16.02 0 00-22.56 22.72C427.97 140.55 448 188.69 448 240s-20.03 99.42-56.42 135.49a16.08 16.08 0 00-.1 22.65 16.1 16.1 0 0022.66.07C456.64 356.14 480 299.94 480 240s-23.36-116.13-65.86-158.24z"
              />
            </svg>
            <svg
              v-else
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 367.81 367.81"
            >
              <path
                d="M183.9 0c101.57 0 183.9 82.34 183.9 183.9s-82.33 183.9-183.9 183.9S0 285.47 0 183.9C-.29 82.62 81.58.3 182.86 0h1.04z"
                fill="#3bb54a"
              />
              <path
                fill="#d4e1f4"
                d="M285.78 133.22L155.17 263.85l-73.14-72.62 29.78-29.26 43.36 42.84L256 103.97z"
              />
            </svg>
            <input
              type="file"
              ref="file"
              accept=".mp3"
              @change="change"
              required
              class="hidden"
              name
              id
            />
            <div class="text-xs text-gray-600 absolute bottom-0 -mb-2 bg-white px-2">Upload Image</div>
          </div>
          <div
            class="lg:flex lg:mt-0 mt-5 lg:justify-center lg:items-center lg:flex-col lg:flex-1 lg:flex-shrink-0"
          >
            <div v-if="!loading">
              <h1 class="text-base font-bold text-gray-700 tracking-wide">
                File Size should not exceed
                <span class="text-red-700">50mb</span>
              </h1>
              <h1 class="text-base font-bold text-gray-700 tracking-wide">
                File Format must be
                <span class="text-red-700">MP3</span> only
              </h1>
            </div>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-20 h-20"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              display="block"
            >
              <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#07abcc">
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.9166666666666666s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(30 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.8333333333333334s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(60 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.75s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(90 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.6666666666666666s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(120 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.5833333333333334s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(150 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.5s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(180 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.4166666666666667s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(210 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.3333333333333333s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(240 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.25s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(270 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.16666666666666666s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(300 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="-0.08333333333333333s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="47"
                y="24"
                rx="3"
                ry="6"
                width="6"
                height="12"
                fill="#07abcc"
                transform="rotate(330 50 50)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-end">
        <button
          :class="{'opacity-50 cursor-not-allowed':loading}"
          class="bg-black text-xs uppercase leading-6 text-white font-bold py-2 px-6 rounded-lg"
        >Upload</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audiofile: "",
      complete: false,
      loading: false,
      file: {
        publisher: "",
        title: "",
        audio_file: ""
      }
    };
  },
  methods: {
    async change(x) {
      this.loading = true;
      this.audiofile = x.target.files[0];
      const ref = this.$firebase.storage().ref();
      const name = new Date() + "-" + this.audiofile.name;
      const metadata = {
        contentType: this.audiofile.type
      };
      const task = ref.child(name).put(this.audiofile, metadata);
      task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          this.loading = false;
          this.file.audio_file = url;
          this.complete = true;
        });
    },
    async audio() {
      let res = await this.$store.dispatch("postAudio", this.file);
      if (res.status == 201) {
        alert("Audio Uploaded Succesfully");
        Object.assign(this.$data, this.$options.data.apply(this));
      }
    }
  }
};
</script>

<style></style>
