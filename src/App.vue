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
  { number: 1, title: 'MAT111Q11.3', completed: false },
  { number: 2, title: 'MAT111Q12.2', completed: false },
  { number: 3, title: 'MAT111Q23.6', completed: false },
  { number: 4, title: 'MAT111Q14.1', completed: false },
  { number: 5, title: 'MAT111Q15.3', completed: false },
  { number: 6, title: 'MAT111Q16.7', completed: false },
  { number: 7, title: 'MAT111Q17.2', completed: false },
  { number: 8, title: 'MAT111Q18.6', completed: false },
  { number: 9, title: 'MAT111Q18.9', completed: false },
  { number: 10, title: 'MAT111Q19.3', completed: false },
  { number: 11, title: 'MAT111Q0.4', completed: false },
  { number: 12, title: 'MAT111Q0.1', completed: false },
  { number: 13, title: 'MAT111Q41.1', completed: false }
  // { number: 14, title: 'SE121Q12.3', completed: false },
  // { number: 15, title: 'SE121Q13.6', completed: false },
  // { number: 16, title: 'SE121Q14.9', completed: false },
  // { number: 17, title: 'SE121Q15.0', completed: false },
  // { number: 18, title: 'SE121Q16.3', completed: false },
  // { number: 19, title: 'SE121Q17.2', completed: false },
  // { number: 20, title: 'SE121Q18.1', completed: false },
  // { number: 15, title: 'SE121Q13.6', completed: false },
  // { number: 16, title: 'SE121Q14.9', completed: false },
  // { number: 17, title: 'SE121Q15.0', completed: false },
  // { number: 18, title: 'SE121Q16.3', completed: false },
  // { number: 19, title: 'SE121Q17.2', completed: false },
  // { number: 20, title: 'SE121Q18.1', completed: false },
  // { number: 15, title: 'SE121Q13.6', completed: false },
  // { number: 16, title: 'SE121Q14.9', completed: false },
  // { number: 17, title: 'SE121Q15.0', completed: false },
  // { number: 18, title: 'SE121Q16.3', completed: false },
  // { number: 19, title: 'SE121Q17.2', completed: false },
  // { number: 20, title: 'SE121Q18.1', completed: false }
])
provide('tasks', tasks)
</script>

<style lang="scss" scoped></style>
