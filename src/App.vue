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
  { number: 1, title: 'SE121Q1.3', completed: false },
  { number: 2, title: 'SE121Q2.2', completed: false },
  { number: 3, title: 'SE121Q3.6', completed: false },
  { number: 4, title: 'SE121Q4.1', completed: false },
  { number: 5, title: 'SE121Q5.3', completed: false },
  { number: 6, title: 'SE121Q6.7', completed: false },
  { number: 7, title: 'SE121Q7.2', completed: false },
  { number: 8, title: 'SE121Q8.6', completed: false },
  { number: 9, title: 'SE121Q8.9', completed: false },
  { number: 10, title: 'SE121Q9.3', completed: false },
  { number: 11, title: 'SE121Q10.4', completed: false },
  { number: 12, title: 'SE121Q10.1', completed: false },
  { number: 13, title: 'SE121Q11.1', completed: false },
  { number: 14, title: 'SE121Q12.3', completed: false },
  { number: 15, title: 'SE121Q13.6', completed: false },
  { number: 16, title: 'SE121Q14.9', completed: false },
  { number: 17, title: 'SE121Q15.0', completed: false },
  { number: 18, title: 'SE121Q16.3', completed: false },
  { number: 19, title: 'SE121Q17.2', completed: false },
  { number: 20, title: 'SE121Q18.1', completed: false },
  { number: 15, title: 'SE121Q13.6', completed: false },
  { number: 16, title: 'SE121Q14.9', completed: false },
  { number: 17, title: 'SE121Q15.0', completed: false },
  { number: 18, title: 'SE121Q16.3', completed: false },
  { number: 19, title: 'SE121Q17.2', completed: false },
  { number: 20, title: 'SE121Q18.1', completed: false },
  { number: 15, title: 'SE121Q13.6', completed: false },
  { number: 16, title: 'SE121Q14.9', completed: false },
  { number: 17, title: 'SE121Q15.0', completed: false },
  { number: 18, title: 'SE121Q16.3', completed: false },
  { number: 19, title: 'SE121Q17.2', completed: false },
  { number: 20, title: 'SE121Q18.1', completed: false }
])
provide('tasks', tasks)
</script>

<style lang="scss" scoped></style>
