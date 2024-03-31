<template>
  <svg
    v-if="!props.avatar"
    width="95"
    height="95"
    viewBox="0 0 95 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <circle id="Ellipse 1" cx="47.5" cy="47.5" r="47.5" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_902_17" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_902_17"
        data-name="Checker.png"
        width="64"
        height="64"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
  <img class="avatarImg" v-else :src="props.avatar" alt="avatar" />
</template>

<script setup lang="ts">
const props = defineProps({
  avatar: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.avatarImg {
  width: 100%;
  height: 100%;
}
</style>
