import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";

import { authGuard } from "@/auth/authGuard";
import Dashboard from "@/components/Dashboard";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            beforeEnter: authGuard
        }
    ]
});

export default router;
