import Vue from "vue";
import Vuex from "vuex";
import Api from "../config/Api";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userDetails: {},
        isAuthenticated: false,
        events: {
            count: "",
            next: "",
            previous: "",
            results: "",
        },
        testimonies: {
            count: "",
            next: "",
            previous: "",
            results: "",
        },
        converts: {
            count: '',
            next: '',
            previous: "",
            results: "",
        },
        contacts: {
            count: '',
            next: '',
            previous: "",
            results: "",
        },
        currentPage: 1,
    },
    getters: {
        getEvents: (state) => state.events,
        getAllTestimonies: (state) => state.testimonies,
        getAllConverts: (state) => state.converts,
        getAllContacts: (state) => state.contacts
    },
    mutations: {
        default (state) {
            state.currentPage = 1;
        },
        addPage(state) {
            state.currentPage++;
        },
        removePage(state) {
            state.currentPage--;
        },
        setEvents(state, payload) {
            let data = {...state.events, ...payload };
            state.events.count = data.count;
            state.events.next = data.next;
            state.events.previous = data.previous;
            state.events.results = data.results;
        },
        setContacts(state, payload) {
            let data = {...state.contacts, ...payload };
            state.contacts.count = data.count;
            state.contacts.next = data.next;
            state.contacts.previous = data.previous;
            state.contacts.results = data.results;
        },
        setTestimonies(state, payload) {
            let data = {...state.testimonies, ...payload };
            state.testimonies.count = data.count;
            state.testimonies.next = data.next;
            state.testimonies.previous = data.previous;
            state.testimonies.results = data.results;
        },
        setConverts(state, payload) {
            let data = {...state.converts, ...payload };
            state.converts.count = data.count;
            state.converts.next = data.next;
            state.converts.previous = data.previous;
            state.converts.results = data.results;
        },

        setUserDetails(state, payload) {
            state.userDetails = payload;
        },
        setAuthentication(state, payload) {
            state.isAuthenticated = payload;
        },
        setToken(state, payload) {
            localStorage.setItem("access_token", payload.access);
            localStorage.setItem("refresh_token", payload.refresh);
        },
    },
    actions: {
        async login({ commit }, payload) {
            let res = await Api.post("/user/login/", payload);
            if (res.status == 200) {
                let { id, email, token } = res.data;
                let userData = { id, email };
                commit("setUserDetails", userData);
                commit("setToken", token);
                commit("setAuthentication", true);
            } else {
                alert("Invalid Credentials");
                this.dispatch("logout");
            }
            return res;
        },
        async logout({ commit }) {
            localStorage.removeItem("access_token");
            commit("setAuthentication", false);
            commit("setUserDetails", {});
        },
        async createArticle({}, payload) {
            let res = await Api.post("/admin/article/create");
        },
        async createAdminEvents({}, payload) {
            let res = await Api.post("/admin/event/create/", payload, true);
            return res;
        },
        async getTestimonies({ commit, state }, payload) {
            let res = await Api.get(`/admin/testimonies/?page=${state.currentPage}`, true);
            commit("setTestimonies", res);
            return res;
        },
        async approve({}, payload) {
            let res = await Api.get(`/admin/testimony/approve/${payload}`, true);
            return res;
        },
        async getConverts({ commit, state }, payload) {
            let res = await Api.get(`/admin/converts/?page=${state.currentPage}`, true)
            commit("setConverts", res);
            return res;
        },
        async postAudio({}, payload) {
            let res = await Api.post('/admin/audio/', payload, true)
            return res
        },
        async postVideo({}, payload) {
            let res = await Api.post('/admin/video/', payload, true)
            return res
        },
        async disapprove({}, payload) {
            let res = await Api.get(`/admin/testimony/dis-approve/${payload}/`, true);
            return res;
        },
        async getEvents({ commit, state }) {
            let res = await Api.get(`/admin/events/`, true);
            commit("setEvents", res);
            return res;
        },
        async getContacts({ commit, state }) {
            let res = await Api.get(`/admin/contact-us/?page=${state.currentPage}`, true);
            commit("setContacts", res);
            return res;
        },
        async deleteEvent({}, payload) {
            let res = await Api.delete(`/admin/event/${payload}/`);
            if (res.status == 204) {
                alert("Event Deleted Successfully");
                this.dispatch("getEvents");
            }
        },
        async getSpecificEvent({}, payload) {
            let res = await Api.get(`/admin/event/{id}/`)
        }
    },
    modules: {},
    plugins: [
        createPersistedState({
            paths: ["userDetails", "isAuthenticated", "events"],
        }),
    ],
});