<template>
  <div class="appreciationContainer">
    <header>
      <font>感谢你们对</font>
      <font>
        <a href="https://www.mortar.top" target="_blank">Mortar公益服</a>
      </font>
      <font>的支持与帮助。</font>
    </header>
    <main>
      <AppreciationCard
        v-for="item in computedAppreciationList"
        :key="item.name"
        v-bind="item"
      ></AppreciationCard>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppreciationCard from "@/components/AppreciationCard.vue";
import appreciationList from "@/assets/appreciationList.json";
import { computed } from "vue";

const computedAppreciationList = computed(() => {
  const data = [];
  // 先将所有数据导入data中
  for (let i = 0; i < appreciationList.length; i++) {
    data.push(appreciationList[i]);
  }
  // 如果数据少于10则添加数据
  if (data.length < 10) {
    for (let i = 0; i < 10 - data.length; i++) {
      data.push({ name: "佚名" });
    }
  }
  // 随机打乱data顺序
  data.sort(() => Math.random() - 0.5);
  return data;
});
</script>

<style scoped lang="scss">
.appreciationContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    display: flex;
    width: 100%;
    height: 240px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    background: var(--Color-Background-bg-color, #fff);
    box-shadow: 0px 4px 250px 0px rgba(0, 0, 0, 0.25);

    & > font {
      color: #000;
      font-family: Inter;
      font-size: 39px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      & > a {
        text-decoration: none;
      }
    }
  }

  main {
    display: flex;
    width: 100%;
    min-height: 784px;
    padding: var(--Size-common-component-size-large, 40px) 104px;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    row-gap: 16px;
    flex-shrink: 0;
    flex-wrap: wrap;
  }
}
</style>
