<template>
  <div>
    <form @submit.prevent="video">
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
              viewBox="0 0 477.87 477.87"
            >
              <path
                d="M469.78 122.01a17.07 17.07 0 00-16.6-.75l-111.85 55.93v-40.66a51.2 51.2 0 00-51.2-51.2H51.2A51.2 51.2 0 000 136.53v204.8a51.2 51.2 0 0051.2 51.2h238.93a51.2 51.2 0 0051.2-51.2v-40.65l111.84 56.01a17.07 17.07 0 0024.7-15.36v-204.8c0-5.91-3.06-11.4-8.1-14.52zM307.2 341.33c0 9.43-7.64 17.07-17.07 17.07H51.2a17.07 17.07 0 01-17.07-17.07v-204.8c0-9.42 7.64-17.06 17.07-17.06h238.93c9.43 0 17.07 7.64 17.07 17.06v204.8zm136.53-27.61l-102.4-51.2v-47.17l102.4-51.2v149.57z"
              />
              <path
                d="M170.67 170.67a68.27 68.27 0 100 136.53 68.27 68.27 0 000-136.53zm0 102.4a34.13 34.13 0 110-68.27 34.13 34.13 0 010 68.27z"
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
              accept=".mp4"
              @change="change"
              class="hidden"
              name="video-file"
              id
            />
            <div class="text-xs text-gray-600 absolute bottom-0 -mb-2 bg-white px-2">Upload Image</div>
          </div>
          <div
            class="lg:flex lg:mt-0 mt-5 lg:justify-center lg:items-center lg:flex-col lg:flex-1 lg:flex-shrink-0"
          >
            <div v-if="!loading">
              <h1 class="text-base font-bold text-gray-700 tracking-wide">
                File Format must be
                <span class="text-red-700">MP4</span> only
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
      videofile: "",
      complete: false,
      loading: false,
      file: {
        publisher: "",
        title: "",
        video_file: ""
      }
    };
  },
  methods: {
    async change(x) {
      this.loading = true;
      this.videofile = x.target.files[0];
      const ref = this.$firebase.storage().ref();
      const name = new Date() + "-" + this.videofile.name;
      const metadata = {
        contentType: this.videofile.type
      };
      const task = ref.child(name).put(this.videofile, metadata);
      task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          this.loading = false;
          this.file.video_file = url;
          this.complete = true;
        });
    },
    async video() {
      if (this.file.video_file == "") {
        alert("Upload a video");
      } else {
        let res = await this.$store.dispatch("postVideo", this.file);
        if (res.status == 201) {
          alert("Video Uploaded Succesfully");
          Object.assign(this.$data, this.$options.data.apply(this));
        }
      }
    }
  }
};
</script>

<style></style>
