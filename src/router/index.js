import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../Layouts/Main.vue";
import Dashboard from "../Layouts/Dashboard.vue";
import store from "../store/index";

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
        meta: {
            requiresAuth: true,
        },
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
                component: () =>
                    import ("../views/Dashboard/Media.vue"),
                children: [{
                        path: "audio",
                        name: "Audio",
                        component: () =>
                            import ("../views/Dashboard/Audio.vue"),
                    },
                    {
                        path: "video",
                        name: "Video",
                        component: () =>
                            import ("../views/Dashboard/Video.vue"),
                    },
                    {
                        path: "pdf",
                        name: "Pdf",
                        component: () =>
                            import ("../views/Dashboard/Pdf.vue"),
                    },
                ],
            },
            {
                path: "testimonies",
                component: () =>
                    import ("../views/Dashboard/Testimonies.vue"),
                children: [{
                        path: "main-testimony",
                        name: "Testimonies",
                        component: () =>
                            import ("../views/Dashboard/MainTestimony.vue"),
                    },

                    {
                        path: "main-testimony/:id",
                        name: "Approve Testimony",
                        component: () =>
                            import ("../views/Dashboard/ApproveTestimony.vue"),
                    },
                ],
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
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((route) => route.meta.requiresAuth)) {
        if (!store.state.isAuthenticated) {
            next({
                path: "/",
            });
        } else {
            next();
        }
    }
    next();
});

export default router;