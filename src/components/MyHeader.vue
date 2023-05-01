<template>
  <div class="cont">
    <div class="header flex justify-between">
      <div class="header__image flex items-center ml-2">
        <img src="@/assets/logo.svg">
        <div class="header__text flex items-center h-full cursor-pointer color-white ml-8">Personal Assignments</div>
      </div>
      <div class="header__details flex items-center">
        <div>
          <img src="@/assets/envelope.svg">
        </div>
        <div class="header__acc flex rounded-full bg-white ml-5 mr-2">
          <img class="rounded-full object-cover p-0.5 w-full h-full opacity-40" src="@/assets/avatar.png">
        </div>
        <img src="@/assets/arrow.svg">
        <img src="https://menu.epam.com/content/images/menu_button.svg">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cont {
  width: 100%;
  height: fit-content;
  z-index: 5;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.header {
  width: 100%;
  background-color: #464547;

  & img {
    cursor: pointer;
  }

  &__text {
    color: #30b6dd;
    font-weight: 500;
    border-bottom: 2px solid #30b6dd;
  }

  &__acc {
    width: 34px;
    height: 34px;

    & img {
      width: 50px;
      height: 36px;
    }
  }
}
</style>
