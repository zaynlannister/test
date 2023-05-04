<template>
  <div>
    <my-test
      title="MAT111Q12.2"
      question="Suppose the vector  is given in the polar form. First, rewrite this vector in matrix form. Then, find the values of the coordinates of the new vector "
    >
      <div class="ml-5">
        <div class="mb-1">
          <input type="radio" id="option1" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option1">[ 2√ + 3√(1,1) ]</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option2" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option2">[ 6√ + 2√(0,1) ]</label>
        </div>
        <div class="mb-1">
          <input type="radio" id="option3" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option3">[ 6√ + 2√(2,1) ]</label>
        </div>
        <div>
          <input type="radio" id="option4" name="radio-group" />
          <label class="ml-2 absolute bottom-0.5" for="option4">None of above</label>
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
