<template>
  <div
    class="appreciationCardContainer"
    :class="{
      donated: props.isDonated,
    }"
  >
    <header>
      <IconAvatar :avatar="props.avatar" />
      <div class="name">
        <font>
          <a v-if="props.link" :href="props.link" target="_blank">{{
            props.name
          }}</a>
          <a v-else target="_self">{{ props.name }}</a>
        </font>
        <font>{{ props.contribute }}</font>
      </div>
      <time :datetime="props.date">{{ props.date }}</time>
    </header>
    <main>
      <font>
        {{ props.describe }}
      </font>
    </main>
  </div>
</template>

<script setup lang="ts">
import IconAvatar from "./icons/IconAvatar.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "userName",
  },
  contribute: {
    type: String,
    required: false,
    default: "",
  },
  date: {
    type: String,
    required: false,
    default: "",
  },
  avatar: {
    type: String,
    required: false,
    default: "",
  },
  describe: {
    type: String,
    required: false,
    default: "没有留下描述……",
  },
  link: {
    type: String,
    required: false,
    default: "",
  },
  isDonated: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.appreciationCardContainer {
  display: flex;
  width: 400px;
  height: auto;
  padding-top: var(--Size-common-component-size-small, 24px);
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  border-radius: var(--Radius-border-radius-round, 20px);
  background: var(--Color-Background-bg-color, #fff);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);

  &.donated {
    box-shadow: 0px 2px 8px 0px #c45656;
  }

  &:hover {
    transform: scale(101%) translateY(-4px);
    box-shadow: 0px 2px 45px 2px #337ecc;
    z-index: 9999;
  }

  header {
    position: relative;
    display: flex;
    padding: 0px var(--Size-common-component-size-small, 24px);
    align-items: flex-start;
    align-self: stretch;

    & > :first-child {
      width: 95px;
      height: 95px;

      border-radius: 95px;
      background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    }

    & > .name {
      display: flex;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      font {
        &:first-of-type > a {
          color: var(--Color-Text-text-color-primary, #303133);
          font-family: Inter;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        &:last-of-type {
          color: var(--Color-Text-text-color-secondary, #909399);
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }

    & > time {
      right: 24px;
      position: absolute;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      flex: 1 0 0;
      align-self: stretch;

      color: var(--Color-Text-text-color-disabled, #c0c4cc);
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: right;
    }
  }

  main {
    display: flex;
    padding: var(--Size-common-component-size-small, 24px) 32px;
    align-items: flex-start;
    align-self: stretch;

    & > font {
      color: var(--Color-Text-text-color-placeholder, #a8abb2);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      white-space: pre;
    }
  }
}
</style>
