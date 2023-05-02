<template>
  <div class="cont">
    <div class="task">
      <div class="font-medium mb-2">{{ props.title }}</div>
      <div class="mb-3">{{ props.question }}</div>
      <slot></slot>
      <div class="task__action flex justify-between">
        <button class="btn prev-btn">Previous Question</button>
        <button class="btn next-btn">Next Question</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "question"])
</script>

<style lang="scss" scoped>
.cont {
  width: 90%;
  padding-top: 37px;
  padding-left: 500px;
}

.task {
  padding: 30px;
  border-radius: 6px;
  background-color: #ffff;
  box-shadow: 0 1px 3px 0 rgba(51,51,51,0.2);

  &__action {
    padding-top: 30px;
  }
}

.btn {
  border-radius: 4px;
  padding: 6px 10px;
  font-weight: 500;
}

.prev-btn {
  border: 1px solid #818181;
  color: #818181;
}

.next-btn {
  border: 1px solid rgb(111 174 84);
  background-color: rgb(111 174 84);
  color: #ffff;
  transition: 100ms all;

  &:hover {
    background-color: rgb(96, 147, 72);
  }
}
</style>
