<template>
  <div>
    <my-test
      title="SE121Q2.6"
      question="A triangle that has its vertices in the coordinates (2,0), (0,2) is rotated clockwise by  degrees about the origin of a Cartesian coordinate system. What are the coordinate values of the triangle after rotating it?"
    >
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option1">2√3i - 2</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option2">2√3i - 4j</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option3">2√3i - 3j</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option4">5√1i - 2j</label>
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
