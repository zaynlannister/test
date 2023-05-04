<template>
  <div>
    <my-test
      title="SE121Q1.3"
      question="Find the rotation matrix in a two-dimensional plane that describes a 150-degree clockwise rotation about the origin of a Cartesian coordinate system."
    >
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option1">0, 0 ,0</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option2">1, 2, 4</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option3">10, 11, 12</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option4"
            >it includes an auxiliary algorithm</label
          >
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
