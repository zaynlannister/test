<template>
  <div>
    <my-test title="SE121Q5.1" question="In Java, which of the following operators has the highest precedence?">
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option1">++</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option2">( )</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option3">*</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option4">+=</label>
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
