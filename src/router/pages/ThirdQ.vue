<template>
  <div>
    <my-test
      title="MAT111Q32.8"
      question="Suppose the vector  is given in the polar form. First, rewrite this vector in matrix form. Then, find the values of the coordinates of the new vector "
    >
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option1">true</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option2">false</label>
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
