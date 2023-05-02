<template>
  <div>
    <my-test title="SE121Q4.6" question="In Java, what will happen as a result of running and executing the following code?">
      <img src="@/assets/image_1.png">
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option1">The code will compile with an error</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option2">The code will compile and run without errors</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option3">The code will compile without error, the error will occur when the code is executed.</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option4">None of above</label>
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

img {
  width: 539px;
  object-fit: contain;
  height: 70px;
  margin-bottom: 20px;
}
</style>
