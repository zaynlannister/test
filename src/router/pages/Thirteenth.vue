<template>
  <div>
    <my-test
      title="SE121Q1.3"
      question="Find the Cartesian form of the vector OA, whose polar form is OA = 4cos(60)i - 4sin(60)."
    >
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option1">2√3i - 2j</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option2">2√3i - 3j</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option3">4√3i - 2j</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option4">5√3i - 4j</label>
        </div>
      </div>
    </my-test>
  </div>
</template>

<script setup>
import MyTest from '@/components/MyTest.vue'
</script>

<style lang="scss" scoped>
input[type='radio'] {
  width: 18px;
  height: 18px;
}

input[type='radio'] + label {
  cursor: pointer;
  position: relative;
}
</style>
