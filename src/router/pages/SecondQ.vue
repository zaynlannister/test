<template>
  <div>
    <my-test title="SE121Q2.6" question="In Java, which of these compile when replacing line 12? (Choose all that apply)">
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option1">int length = mas.capacity;</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option2">int length = mas.capacity();</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option3">int length = mas.length();</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option4">int length = mas.size();</label>
        </div>
      </div>
    </my-test>
  </div>
</template>

<script setup>
import MyTest from "@/components/MyTest.vue";
</script>

<style lang="scss" scoped>
input[type="radio"] {
  width: 18px;
  height: 18px;
}

input[type="radio"] + label {
  cursor: pointer;
  position: relative;
}
</style>
