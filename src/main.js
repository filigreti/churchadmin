import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import RouteInfo from "./components/RouteInfo.vue";
import * as firebase from "firebase";
import VueFirebase from "vue-firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBgeAZZwlmlrSgZKNdyf6KSnaQ9CEU69Yk",
    authDomain: "godscaremissions-846e0.firebaseapp.com",
    databaseURL: "https://godscaremissions-846e0.firebaseio.com",
    projectId: "godscaremissions-846e0",
    storageBucket: "godscaremissions-846e0.appspot.com",
    messagingSenderId: "119113693494",
    appId: "1:119113693494:web:9d3e8927af1a417d0f1b97",
    measurementId: "G-Q191L180L0",
};

Vue.use(VueFirebase, { firebase: firebase, config: firebaseConfig });

Vue.config.productionTip = false;
Vue.component("route-info", RouteInfo);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");