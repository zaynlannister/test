<template>
  <div class="cont">
    <div class="sidebar__list">
      <div v-for="task in tasks" :key="task.title" class="sidebar__tasks pb-4">
        <span v-if="task.completed" class="sidebar__dot"></span>
        <span v-if="task.number === number" class="sidebar__dot sidebar__dot-blue"></span>
        <span class="font-medium inline-block w-7 cursor-pointer">
          {{ task.number }}
        </span>
        <span class="font-medium cursor-pointer">
          {{ task.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, inject } from 'vue'

const props = defineProps(['tasks'])
const tasks = inject('tasks')
const number = inject('number')

watch(number, () => {
  const task = tasks.find((item) => item.number === number.value)
  task.completed = true
})
</script>

<style lang="scss" scoped>
.sidebar__dot {
  position: absolute;
  left: -20px;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgb(75, 185, 75);
  opacity: 0.8;

  &-blue {
    background-color: rgb(51, 156, 217);
  }
}

.cont {
  position: absolute;
  padding: 160px 0 0 70px;
}

.sidebar__list {
  overflow-y: hidden;
  height: calc(100% - 50px);
  max-height: calc(100vh - 200px);
  padding: 10px 40px;
  width: 380px;
  background-color: #ffff;
  box-shadow: 0 1px 3px 0 rgba(51, 51, 51, 0.2);
  border-radius: 6px;
}

.sidebar__tasks:last-child {
  padding: 0;
}
</style>
