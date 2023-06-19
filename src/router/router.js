import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import firstQ from '@/router/pages/FirstQ.vue'
import secondQ from '@/router/pages/SecondQ.vue'
import thirdQ from '@/router/pages/ThirdQ.vue'
import fourthQ from '@/router/pages/FourthQ.vue'
import fifthQ from '@/router/pages/FifthQ.vue'
import sixthQ from '@/router/pages/SixthQ.vue'
import seventhQ from '@/router/pages/SeventhQ.vue'
import eighthQ from '@/router/pages/EighthQ.vue'
import ninethQ from '@/router/pages/NinethQ.vue'
import tenthQ from '@/router/pages/TenthQ.vue'
import eleventhQ from '@/router/pages/EleventhQ.vue'
import twelvethQ from '@/router/pages/Twelveth.vue'
import thirteenthQ from '@/router/pages/Thirteenth.vue'
import fourteenthQ from '@/router/pages/Fourteenth.vue'
import fifteenthQ from '@/router/pages/Fifteenth.vue'
import sixteenQ from '@/router/pages/Sixteenth.vue'

const routes = [
  { path: '/', component: firstQ },
  { path: '/1', component: firstQ },
  { path: '/2', component: secondQ },
  { path: '/3', component: thirdQ },
  { path: '/4', component: fourthQ },
  { path: '/5', component: fifthQ },
  { path: '/6', component: sixthQ },
  { path: '/7', component: seventhQ },
  { path: '/8', component: eighthQ },
  { path: '/9', component: ninethQ },
  { path: '/10', component: tenthQ },
  { path: '/11', component: eleventhQ },
  { path: '/12', component: twelvethQ },
  { path: '/13', component: thirteenthQ },
  { path: '/14', component: fourteenthQ },
  { path: '/15', component: fifteenthQ },
  { path: '/16', component: sixteenQ },
  { path: '/17', component: ninethQ },
  { path: '/18', component: twelvethQ },
  { path: '/19', component: fifthQ },
  { path: '/20', component: firstQ }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
