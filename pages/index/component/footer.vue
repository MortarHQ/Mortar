<template>
    <view class="container">
        <view>
            <text>友情链接</text>
            <uni-link href="https://www.landmine.top/" text="Landmine小窝" showUnderLine="false" color="white"
                fontSize="16"></uni-link>
        </view>
        <view>
            <text>与我联系</text>
            <text selectable="true">暂无</text>
        </view>
        <view>
            <text>&copy;版权信息</text>
            <text selectable="true">landmine</text>
            <uni-link href="https://beian.miit.gov.cn/" text="蜀ICP备2022024999号-1" show-under-line="false"
                color="#c4c4c4" ></uni-link>
        </view>
        <view>
            <text>状态信息</text>
            <text>被访问：{{mortar.visitTotal}} 次</text>
            <text selectable="true">当前IP：{{mortar.clientIP}}</text>
        </view>
    </view>
</template>

<script setup>
    import api from '@/api/api.js'
    import {
        ref
    } from 'vue'

    const mortar = ref({
        visitTotal: null,
        clientIP: null,
    })
    // 获取访问次数
    api({
        url: 'api/recordVisit',
        success(res) {
            mortar.value.visitTotal = res.data.total
            mortar.value.clientIP = res.data.clientIP
        }
    })
</script>

<style lang="scss">
    $background--White-alpha50: rgba(255, 255, 255, .5);

    .container {
        min-height: 30vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        background-color: $background--White-alpha50;
        backdrop-filter: blur(2px) hue-rotate(60deg);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

        :nth-child(n) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0 .5rem;

            :first-child {
                :first-child {
                    color: $uni-main-color;
                    font-weight: bolder;
                    padding-bottom: .75rem;
                    font-size: 1.25rem;
                }
            }
        }
    }
</style>