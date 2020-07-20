import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import RouteInfo from "./components/RouteInfo.vue";

Vue.config.productionTip = false;
Vue.component("route-info", RouteInfo);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");