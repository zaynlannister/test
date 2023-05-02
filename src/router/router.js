import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

import firstQ from "@/router/pages/FirstQ.vue";
import secondQ from "@/router/pages/SecondQ.vue";
import thirdQ from "@/router/pages/ThirdQ.vue";
import fourthQ from "@/router/pages/FourthQ.vue";
import fifthQ from "@/router/pages/FifthQ.vue";
import sixthQ from "@/router/pages/SixthQ.vue";
import seventhQ from "@/router/pages/SeventhQ.vue";
import eighthQ from "@/router/pages/EighthQ.vue";

const routes = [
    {path: "/", component: firstQ},
    {path: "/2", component: secondQ},
    {path: "/3", component: thirdQ},
    {path: "/4", component: fourthQ},
    {path: "/5", component: fifthQ},
    {path: "/6", component: sixthQ},
    {path: "/7", component: seventhQ},
    {path: "/8", component: eighthQ},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
