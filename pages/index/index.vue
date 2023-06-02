<template>
    <view class="container">
        <!-- 背景层 -->
        <view class="background">
            <image class="background-image" src="@/static/image/mcSword.png" mode="aspectFill"></image>
            <teleport to="body">
                <view class="uni-mask"></view>
            </teleport>
        </view>
        <!-- 导航栏 -->
        <uni-nav-bar backgroundColor="none" fixed height="0px" leftWidth="0" rightWidth="0" :border="false">
            <view class="navigator uni-radius-b">
                <view class="navgator-left">
                    <image class="navigator-left--image" src="@/static/image/icon.png" mode="aspectFill"></image>
                    <text>mortar</text>
                </view>
                <view class="navgator-default">
                    <text v-for="(item,index) in navigateBar.info" :key="index"
                        @click="navigateBar.navigateTo(item)">{{item.title}}</text>
                </view>
                <view class="navgator-right">
                    <uni-icons type="bars" size="30" color="#fff" @click="navigateBar.popupBars"></uni-icons>
                </view>
            </view>
        </uni-nav-bar>

        <!-- 导航点 -->
        <view id="home" class="scrollTarget"></view>
        <!-- 轮播图 -->
        <view class="swiper-box">
            <uni-swiper-dot :info="swiper.content" :current="swiper.currentDot" mode="round"
                :dotsStyles="swiper.dotsStyles" @clickItem="swiper.dotChange">
                <swiper class="swiper-main" :autoplay="swiper.autoplay" :interval="swiper.interval"
                    :duration="swiper.duration" circular="true" :current="swiper.currentItem"
                    @change="swiper.swiperChange">
                    <swiper-item v-for="(item,index) in swiper.content" :key="index">
                        <view class="swiper-item">
                            <text class="swiper-box--title3-bug-fiex">{{item.h3}}</text>
                            <text>{{item.h2}}</text>
                            <text>{{item.h1}}</text>
                            <text>{{item.p}}</text>
                            <uni-link :href="item.link" :text="item.linkTitle" showUnderLine="false" fontSize="32">
                            </uni-link>
                        </view>
                    </swiper-item>
                </swiper>
            </uni-swiper-dot>
        </view>

        <view class="contents-box">
            <!-- 服务器预览 overview -->
            <view class="contents-item">
                <view class="scrollTarget" id="A"></view>
                <text class="content-title">服务器载荷</text>
                <view class="serverStatus-box">
                    <view class="serverStatus-item" v-for="(item,index) in mainContent.overview.overview" :key="index">
                        <Process :process="item.system.cpuUsage" msg="cpu" class="serverStatus-process"></Process>
                        <process :process="item.system.memUsage" msg="内存" class="serverStatus-process"></process>
                    </view>
                </view>

            </view>
            <view class="contents-item">
                <view class="scrollTarget" id="B"></view>
                <text>{{text}}</text>
            </view>
            <view class="contents-item">
                <view class="scrollTarget" id="C"></view>
                <text>{{text}}</text>
            </view>
            <view class="contents-item">
                <view class="scrollTarget" id="D"></view>
                <text>{{text}}</text>
            </view>
            <view class="contents-item">
                <view class="scrollTarget" id="E"></view>
                <text>{{text}}</text>
            </view>
        </view>
        <Footer />
    </view>
</template>

<script setup>
    import {
        onMounted,
        ref,
        Teleport
    } from "vue";
    import Footer from '@/pages/index/component/footer.vue'
    import Process from '@/pages/index/component/process.vue'
    import api from "../../api/api";

    // TEMP
    const text = ref(
        'Mortar 纯净公益服，精益游戏玩法，原汁原味绝不收费，快来创造温暖的家吧！BGP路线、 双平台支持、 多版本兼容(1.8.x - 1.19.x)、 超远视距， 同时支持正版、 兼容离线， 还有生存、 小游戏等共七服同端在线， 快来Mortar一起建设服务器吧， 从这里开始书写属于你温馨小镇的精彩篇章！签到好礼， 指令传送， 性感末影龙， 可红石可猛肝可养老可逛街可拍照， 纯粹原版风味拒绝花里胡哨， 总有一条适合你！进可游戏内消遣， 退可群内吹B打趣Mortar欢迎你的到来 官网(未发布) https: //www.mortar.top/QQ群: 483949851 链接加入 https: //jq.qq.com/?_wv=1027&k=WLJF0wWM12 C24G服务器稳定运行 '
    )

    // 导航栏
    const navigateBar = ref({
        info: [{
            id: 'home',
            title: '首页',
            actived: true
        }, {
            id: 'A',
            title: '载荷',
            actived: false
        }, {
            id: 'B',
            title: '作品',
            actived: false
        }, {
            id: 'C',
            title: '社区',
            actived: false
        }, {
            id: 'D',
            title: '加入我们',
            actived: false
        }, {
            id: 'E',
            title: '下载',
            actived: false
        }, ],
        navigateTo: async function(item) {
            uni.pageScrollTo({
                selector: '#' + item.id,
                success: function(e) {
                    console.log(item.id);
                },

            })
        },
        popupBars: async function() {}
    })

    // 轮播图
    const swiper = ref({
        currentDot: 0,
        currentItem: 0,
        interval: 5000,
        duration: 1000,
        autoplay: true,
        content: [], // 轮播图内容
        dotsStyles: {
            width: 10,
            bottom: 200,
            backgroundColor: 'rgba(255,255,255,0)',
            border: '2px rgba(255,255,255,1) solid',
            color: '#fff',
            selectedBackgroundColor: 'rgba(255,255,255, 0)',
            selectedBorder: '4px rgba(255,255,255,1) solid'
        },
        swiperChange: function(e) {
            swiper.value.currentDot = e.detail.current
        },
        dotChange: function(e) {
            swiper.value.currentItem = e
            swiper.value.currentDot = e
            swiper.value.clearInterval()
        },
        clearInterval: async function() {
            swiper.value.autoplay = false
            setTimeout(() => {
                swiper.value.autoplay = true
            }, swiper.value.interval)
        },
        getSwiperContents: function() {
            class SwiperContent { // 轮播图内容类
                constructor(h3, h2, h1, p, link, linkTitle) {
                    this.h3 = h3 || null
                    this.h2 = h2 || null
                    this.h1 = h1 || null
                    this.p = p || null
                    this.link = link || '#'
                    this.linkTitle = linkTitle || null
                }
            }
            // 后台TODO
            let sc1 = new SwiperContent('minecraft', '1.8.x-.1.19.x', 'mortar',
                '纯净公益服，精益游戏玩法，免费的原汁原味，快和伙伴共同创造温暖的家吧！',
                'https://www.baidu.com/', 'baidu')
            let sc2 = new SwiperContent('我的世界', '1.8.x-1.19.x', '迫击炮', '这里是一段瞎话', '#', 'none')
            return [sc1, sc2]
        }
    })

    // 正文
    const mainContent = ref({
        overview: ''
    })

    // 页面挂载完毕
    onMounted(() => {
        // 获取轮播图内容
        swiper.value.content = swiper.value.getSwiperContents()
        // 获取服务器载荷
        api({
            url: 'api/overview',
            success: function(res) {
                mainContent.value.overview = res.data
                console.log(mainContent.value);
            }
        })
    })
</script>

<style scoped lang="scss" src="./scss/index.scss"></style>
<style scoped lang="scss" src="./scss/response.scss"></style>
