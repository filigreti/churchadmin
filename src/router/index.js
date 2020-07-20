import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../Layouts/Main.vue";
import Dashboard from "../Layouts/Dashboard.vue";

Vue.use(VueRouter);

const routes = [{
        path: "",
        component: Main,
        children: [{
            path: "",
            name: "Home",
            component: Home,
        }, ],
    },
    {
        path: "/dashboard",
        redirect: { name: "Overview" },
        component: Dashboard,
        children: [{
                path: "overview",
                name: "Overview",
                component: () =>
                    import ("../views/Dashboard/Overview.vue"),
            },
            {
                path: "events",
                component: () =>
                    import ("../views/Dashboard/Events.vue"),
                children: [{
                        path: "",
                        name: "Events",
                        component: () =>
                            import ("../views/Dashboard/MainEvents.vue"),
                    },
                    {
                        path: ":events",
                        name: "SubEvents",
                        component: () =>
                            import ("../views/Dashboard/SubEvents.vue"),
                    },
                ],
            },
            {
                path: "live",
                name: "Live",
                component: () =>
                    import ("../views/Dashboard/Live.vue"),
            },
            {
                path: "contact-us",
                name: "Contact Us",
                component: () =>
                    import ("../views/Dashboard/ContactUs.vue"),
            },
            {
                path: "bible-school",
                name: "Bible School",
                component: () =>
                    import ("../views/Dashboard/BibleSchool.vue"),
            },
            {
                path: "media",
                name: "Media",
                component: () =>
                    import ("../views/Dashboard/Media.vue"),
            },
            {
                path: "testimonies",
                name: "Testimonies",
                component: () =>
                    import ("../views/Dashboard/Testimonies.vue"),
            },
            {
                path: "salvation",
                name: "Salvation",
                component: () =>
                    import ("../views/Dashboard/Salvation.vue"),
            },
            {
                path: "articles",
                name: "Articles",
                component: () =>
                    import ("../views/Dashboard/Articles.vue"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;