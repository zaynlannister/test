<template>
  <div class="cont">
    <div class="info flex justify-between items-center">
      <div class="info__text text-lg font-medium text-slate-600">BS_SE132_MidTermAssessment</div>
      <div class="info-questions text-base font-medium text-slate-600">Question {{number}}/28</div>
      <div class="info__time flex items-center">
        <div class="flex items-center mr-5">
          <img class="mr-2 mt-1 opacity-60" width="16px" height="10px" src="@/assets/time.png">
          <div class="text-xl font-bold">{{timeLeft}}</div>
        </div>
        <div class="info__button">
          <button>Finish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject} from "vue";
import { ref, watch, onMounted } from 'vue';

const number = inject("number")

const startTime = ref(5400); // начальное время в секундах (1 час 30 минут)
const timeLeft = ref('');

function startTimer() {
  setInterval(() => {
    const hours = Math.floor(startTime.value / 3600);
    const minutes = Math.floor((startTime.value % 3600) / 60);
    const seconds = Math.floor(startTime.value % 60);

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    timeLeft.value = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    startTime.value--;

    if (startTime.value < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

let timer;

onMounted(() => {
  timer = startTimer();
});

watch(startTime, (newValue) => {
  if (newValue < 0) {
    clearInterval(timer);
  }
});
</script>

<style lang="scss" scoped>
.cont {
  padding-top: 60px;
  background-color: #ffff;
  box-shadow: 0 1px 3px 0 rgba(51,51,51,0.2);
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
