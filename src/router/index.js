// import Vue from "vue"
import VueRouter from "vue-router"

// import routers from "./modules"





export default new VueRouter({
    routers: [  {
        path: "/login",
        component: () => import("../pages/login")
    }]
})

