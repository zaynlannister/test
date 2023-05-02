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
const tasks = [
  {number: 1, title: "SE121Q1.3"},
  {number: 2, title: "SE121Q2.2"},
  {number: 3, title: "SE121Q3.6"},
  {number: 4, title: "SE121Q4.1"},
  {number: 5, title: "SE121Q5.3"},
  {number: 6, title: "SE121Q6.7"},
  {number: 7, title: "SE121Q7.2"},
  {number: 8, title: "SE121Q8.6"},
  {number: 9, title: "SE121Q8.9"},
  {number: 10, title: "SE121Q9.3"},
  {number: 11, title: "SE121Q10.4"},
  {number: 12, title: "SE121Q10.1"},
  {number: 13, title: "SE121Q11.1"},
  {number: 14, title: "SE121Q12.3"},
  {number: 15, title: "SE121Q13.6"},
  {number: 16, title: "SE121Q14.9"},
  {number: 17, title: "SE121Q15.0"},
  {number: 18, title: "SE121Q16.3"},
  {number: 19, title: "SE121Q17.2"},
  {number: 20, title: "SE121Q18.1"},
  {number: 15, title: "SE121Q13.6"},
  {number: 16, title: "SE121Q14.9"},
  {number: 17, title: "SE121Q15.0"},
  {number: 18, title: "SE121Q16.3"},
  {number: 19, title: "SE121Q17.2"},
  {number: 20, title: "SE121Q18.1"},
  {number: 15, title: "SE121Q13.6"},
  {number: 16, title: "SE121Q14.9"},
  {number: 17, title: "SE121Q15.0"},
  {number: 18, title: "SE121Q16.3"},
  {number: 19, title: "SE121Q17.2"},
  {number: 20, title: "SE121Q18.1"},
]
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
