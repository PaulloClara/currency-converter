<script lang="ts" setup>
const props = defineProps<{ isDarkTheme: boolean }>();
const emits = defineEmits(["switch-theme"]);

function switchTheme() {
  const theme = !props.isDarkTheme ? "dark" : "light";
  emits("switch-theme", theme === "dark");
  localStorage.setItem("THEME", theme);
}
</script>

<template>
  <button class="app-switch-theme" @click="switchTheme">
    <i class="fa-solid fa-sun" v-if="isDarkTheme"></i>
    <i class="fa-solid fa-moon" v-else></i>
  </button>
</template>

<style lang="scss">
.app-switch-theme {
  position: fixed;
  right: 1em;
  bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #eee8;
  cursor: pointer;
  transition: all 0.2s;

  i {
    color: var(--secondary-text-color);
    line-height: 0;

    &.fa-moon {
      font-size: 1.5em;
    }

    &.fa-sun {
      font-size: 1.35em;
    }
  }

  &:hover {
    opacity: 0.9;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
}
</style>
