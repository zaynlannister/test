<template>
  <div class="cont">
    <div class="sidebar__list">
      <div v-for="task in tasks" :key="task.title" class="sidebar__tasks pb-4">
        <span class="font-medium inline-block w-7 cursor-pointer">
          {{task.number}}
        </span>
        <span class="font-medium cursor-pointer">
          {{task.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["tasks"])
</script>

<style lang="scss" scoped>
.cont {
  position: absolute;
  padding: 160px 0 0 70px;
}

.sidebar__list {
  overflow-y: auto;
  height: calc(100% - 50px);
  max-height: calc(100vh - 200px);
  padding: 10px 40px;
  width: 380px;
  background-color: #ffff;
  box-shadow: 0 1px 3px 0 rgba(51,51,51,0.2);
  border-radius: 6px;
}

.sidebar__tasks:last-child {
  padding: 0;
}
</style>
