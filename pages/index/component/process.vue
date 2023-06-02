<template>
    <view class="container">
        <view class="custom-container" :style="props.backgroundStyle">
            <ul class="ul" :style="ulStyle">
                <li v-for="(item,index) in Math.round(props.process*100)" :key="index" :style="liStyle(index)"
                    class="li">
                </li>
            </ul>
            <text class="process" :style="props.textStyle">{{(process * 100).toFixed(2)}}</text>
            <text class="msg" v-if="props.msg">{{props.msg}}</text>
        </view>
    </view>
</template>

<script setup>
    /**  
     * process 环形进度条
     * @description 环形进度组件
     * @property {Number} process 进度 0-100，支持小数显示
     * @property {Number} delay 延迟时间
     * @property {Number} duration 持续时间
     * @property {Object} textStyle 文本样式
     * @property {Object} backgroundStyle 背景样式
     * @property {Object} circleStyle 圆圈样式
     * @property {String} msg = [string] 位于百分比下的信息
     */
    import {
        computed
    } from 'vue'
    const props = defineProps({
        process: {
            type: Number,
            default: 0
        },
        delay: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: Math.round(Math.random() * 5) + 5
        },
        textStyle: {
            type: Object,
            default: () => {
                return {}
            }
        },
        backgroundStyle: {
            type: Object,
            default: () => {
                return {}
            }
        },
        circleStyle: {
            type: Object,
            default: () => {
                return {}
            }
        },
        msg: {
            type: String,
            default: ''
        }
    })

    const ulStyle = computed(() => {
        return {
            '--rotate-duration': `${props.duration}s`,
            '--rotate-delay': `${props.delay}s`,
            ...props.circleStyle,
        }
    })

    const liStyle = (index) => {
        return {
            '--rz': index / 100 * 360 + 'deg',
            '--hsla': `hsla(${index/100*360}, 75%, 75%, 80%)`,
            'background-color': 'var(--hsla)',
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        .custom-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            position: relative;
            width: 100%;
            height: 100%;
            border-radius: $uni-radius-root;

            .process {
                position: relative;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                font-size: 24px;
                color: $uni-extra-color;
                z-index: 2;
            }

            .msg {
                position: relative;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                font-size: 16px;
                color: $uni-secondary-color;
                z-index: 2;
                text-transform: uppercase;
            }

            .ul {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                z-index: 1;
                width: 100%;
                height: 100%;
                padding: 0;
                transform: rotateZ(180+45deg);
                border-radius: 50%;
                border: 3px solid wheat;
                box-sizing: border-box;
                animation: ul linear infinite;
                animation-duration: calc(var(--rotate-duration)*1.5);
                animation-delay: var(--rotate-delay);
                box-shadow: inset $uni-shadow-base;

                @keyframes ul {
                    to {
                        transform: rotateZ(180+45+360deg);
                        filter: hue-rotate(360deg);
                    }
                }

                .li {
                    position: absolute;
                    display: block;
                    height: 20%;
                    width: 20%;
                    transform: rotateZ(var(--rz)) translateY(-250%);
                    border-radius: 1rem;
                    border: none;
                    animation-duration: var(--rotate-duration);
                    box-shadow: 0 0 .15rem var(--hsla);

                }
            }
        }
    }
</style>
