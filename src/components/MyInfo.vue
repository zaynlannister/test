<template>
  <div class="cont">
    <div class="info flex justify-between">
      <div class="info__text text-lg font-medium text-slate-600">BS_SE132_FinalAssessment</div>
      <div class="info-questions text-base font-medium text-slate-600">Question 1/35</div>
      <div class="info__time flex items-center">
        <div class="flex items-center mr-5">
          <img class="mr-2 mt-1 opacity-60" width="16px" height="10px" src="@/assets/time.png">
          <div class="text-xl font-bold">01:29:17</div>
        </div>
        <div class="info__button">
          <button>Finish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.cont {
  padding-top: 60px;
  background-color: #ffff;
  box-shadow: 0 6px 11px -6px rgba(0, 0, 0, 0.2);
}

.info {
  padding: 15px 30px;

  &__button button {
    background-color: #009ecc;
    color: #fff;
    padding: 5px 17px;
    border-radius: 3px;
    font-weight: 500;
    transition: 100ms all;

    &:hover {
      background-color: #008cb2;
    }
  }
}
</style>
