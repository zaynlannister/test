<template>
  <div>
    <my-test title="SE121Q4.6" question="In C, what will be displayed on your screen after running the following code?">
      <img src="@/assets/image_2.png">
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option1">Hello my dear friend!</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option2">nothing since the code contains a syntax error</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option3">"Hello my dear friend!"</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group">
          <label class="ml-2 absolute bottom-0.5" for="option4">Hello my dear friend! Hello my dear friend!</label>
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
  width: 488px;
  object-fit: contain;
  height: 127px;
  margin-bottom: 20px;
}
</style>
