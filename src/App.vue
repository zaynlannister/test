<template>
  <div>
    <my-sidebar :tasks="tasks" />
    <my-header />
    <my-info />
    <router-view></router-view>
  </div>
</template>

<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MySidebar from '@/components/MySidebar.vue'
import MyInfo from '@/components/MyInfo.vue'
import { provide, ref, reactive } from 'vue'

const num = ref(0)
provide('number', num)
const tasks = reactive([
  { number: 1, title: 'SE141Q11.3', completed: false },
  { number: 2, title: 'SE141Q12.2', completed: false },
  { number: 3, title: 'SE141Q23.6', completed: false },
  { number: 4, title: 'SE141Q14.1', completed: false },
  { number: 5, title: 'SE141Q15.3', completed: false },
  { number: 6, title: 'SE141Q16.7', completed: false },
  { number: 7, title: 'SE141Q17.2', completed: false },
  { number: 8, title: 'SE141Q18.6', completed: false },
  { number: 9, title: 'SE141Q18.9', completed: false },
  { number: 10, title: 'SE141Q19.3', completed: false },
  { number: 11, title: 'SE141Q0.4', completed: false },
  { number: 12, title: 'SE141Q0.1', completed: false },
  { number: 13, title: 'SE141Q41.1', completed: false },
  { number: 14, title: 'SE141Q12.3', completed: false },
  { number: 15, title: 'SE141Q13.6', completed: false },
  { number: 16, title: 'SE141Q14.9', completed: false },
  { number: 17, title: 'SE141Q15.0', completed: false },
  { number: 18, title: 'SE141Q16.3', completed: false },
  { number: 19, title: 'SE141Q17.2', completed: false },
  { number: 20, title: 'SE141Q18.1', completed: false },
  { number: 15, title: 'SE141Q13.6', completed: false },
  { number: 16, title: 'SE141Q14.9', completed: false },
  { number: 17, title: 'SE141Q15.0', completed: false },
  { number: 18, title: 'SE141Q16.3', completed: false },
  { number: 19, title: 'SE141Q17.2', completed: false },
  { number: 20, title: 'SE141Q18.1', completed: false },
  { number: 15, title: 'SE141Q13.6', completed: false },
  { number: 16, title: 'SE141Q14.9', completed: false },
  { number: 17, title: 'SE141Q15.0', completed: false },
  { number: 18, title: 'SE141Q16.3', completed: false },
  { number: 19, title: 'SE141Q17.2', completed: false },
  { number: 20, title: 'SE141Q18.1', completed: false }
])
provide('tasks', tasks)
</script>

<style lang="scss" scoped></style>
