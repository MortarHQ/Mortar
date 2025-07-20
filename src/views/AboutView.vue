<template>
  <div class="about">
    <!-- Header Section -->
    <section class="about-header">
      <div class="container">
        <h1 class="page-title">关于 Mortar</h1>
        <p class="page-subtitle">感谢你们对 Mortar 公益服的支持与帮助</p>
      </div>
    </section>

    <!-- Server Description -->
    <section class="server-description">
      <div class="container">
        <div class="description-content">
          <h2>服务器介绍</h2>
          <p>
            欢迎加入 Mortar！Mortar 是由个人运营的无偿无盈利的完全免费的服务器。
            这里有着好玩的冒险与地牢之旅，QQ群：483949851，加入后即可获取客户端，
            还有更多的游戏攻略和交流。服务器已经运行了一年，期待你的加入！
          </p>
          <p>
            RAD2 是一个超大型的魔法奇幻冒险生存整合包，你可以在这里体验到完全不同的
            游戏体验和优质的网络环境，保证你的游戏攻略无与伦比。RAD2 是一个超大型的
            魔法奇幻冒险生存整合包，与朋友一起完成超过 1500+ 任务，探索超过 100+ 新
            生物群系，穿越 12+ 不同的维度，挑战超过 10+ 新地牢，收集各种神奇的装备
            和材料，打造你的专属魔法师，成为这个世界的最强法师！
          </p>
        </div>
      </div>
    </section>

    <!-- Server Specs -->
    <section class="server-specs">
      <div class="container">
        <h2 class="section-title">服务器配置</h2>
        <div class="specs-grid">
          <div class="spec-card" v-for="spec in serverSpecs" :key="spec.name">
            <div class="spec-icon">{{ spec.icon }}</div>
            <h3>{{ spec.name }}</h3>
            <p v-html="spec.value"></p>
          </div>
        </div>
        <p class="specs-note">
          服务器已稳定运行 4 年，如此配置足以保证你的游戏体验无与伦比。
        </p>
      </div>
    </section>

    <!-- Contributors Section -->
    <section class="contributors">
      <div class="container">
        <h2 class="section-title">致谢名单</h2>
        <p class="contributors-intro">感谢以下朋友对服务器的支持与贡献：</p>
        <div class="contributors-grid">
          <div class="contributor-card" v-for="contributor in contributors" :key="contributor.name">
            <div class="contributor-avatar">{{ contributor.avatar }}</div>
            <h3>{{ contributor.name }}</h3>
            <p>{{ contributor.description }}</p>
            <span class="contributor-role" :class="contributor.roleClass">{{ contributor.role }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Links Section -->
    <section class="links">
      <div class="container">
        <h2 class="section-title">相关链接</h2>
        <div class="links-grid">
          <a 
            v-for="link in externalLinks" 
            :key="link.title"
            :href="link.url" 
            target="_blank" 
            class="link-card"
          >
            <div class="link-icon">{{ link.icon }}</div>
            <h3>{{ link.title }}</h3>
            <p>{{ link.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
      <div class="container">
        <h2 class="section-title">联系我们</h2>
        <div class="contact-info">
          <div class="contact-item">
            <h3>QQ 交流群</h3>
            <p class="contact-value">483949851</p>
            <button class="copy-btn" @click="copyQQ">复制群号</button>
          </div>
          <div class="contact-item">
            <h3>服务器地址</h3>
            <p class="contact-value">bgp.mortar.top</p>
            <button class="copy-btn" @click="copyAddress">复制地址</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import { pageTransitions, initAllAnimations } from '@/utils/animations'

const serverSpecs = ref([
  {
    name: '处理器',
    icon: '🖥️',
    value: 'R7-7840HS 5.1Ghz'
  },
  {
    name: '内存',
    icon: '💾',
    value: '7500Mhz 32GB'
  },
  {
    name: '存储',
    icon: '💿',
    value: '512GB 固态系统盘<br>+ 2T 固态数据盘'
  },
  {
    name: '网络',
    icon: '🌐',
    value: '多线接入'
  }
])

const contributors = ref([
  {
    name: 'Landmine地雷',
    description: '服务器管理员',
    avatar: '👤',
    role: '管理员',
    roleClass: 'admin'
  },
  {
    name: 'FLAME_FORST',
    description: '无偿捐助 20',
    avatar: '👤',
    role: '支持者',
    roleClass: 'supporter'
  },
  {
    name: 'WaterOfChaos',
    description: '管理员 [无偿]',
    avatar: '👤',
    role: '管理员',
    roleClass: 'admin'
  },
  {
    name: 'alaya',
    description: '无偿捐助 10',
    avatar: '👤',
    role: '支持者',
    roleClass: 'supporter'
  },
  {
    name: '佚名',
    description: '感谢各位的支持与贡献<br>欢迎新玩家加入！',
    avatar: '👤',
    role: '支持者',
    roleClass: 'supporter'
  }
])

const externalLinks = ref([
  {
    title: '官方网站',
    description: '访问 Mortar 官方网站',
    icon: '🌐',
    url: 'https://www.mortar.top'
  },
  {
    title: 'GitHub',
    description: '查看开源项目',
    icon: '💻',
    url: 'https://github.com/MortarHQ'
  },
  {
    title: 'RAD2 教程',
    description: '学习 RAD2 整合包攻略',
    icon: '📚',
    url: 'https://www.mcmod.cn/post/3819.html'
  },
  {
    title: 'MC MOD 找服玩',
    description: '在 MC MOD 上查看服务器',
    icon: '🎮',
    url: 'https://play.mcmod.cn/sv20187835.html'
  }
])

const copyQQ = () => {
  navigator.clipboard.writeText('483949851')
  alert('QQ群号已复制到剪贴板')
}

const copyAddress = () => {
  navigator.clipboard.writeText('bgp.mortar.top')
  alert('服务器地址已复制到剪贴板')
}

onMounted(async () => {
  await nextTick()
  
  // Initialize page transition
  const aboutElement = document.querySelector('.about') as HTMLElement
  if (aboutElement) {
    pageTransitions.enter(aboutElement)
  }
  
  // Initialize all animations
  initAllAnimations()
})
</script>

<style scoped>
.about {
  min-height: 100vh;
}

/* Header Section */
.about-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 0 3rem;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Common Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

/* Server Description */
.server-description {
  padding: 5rem 0;
  background: white;
}

.description-content h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
}

.description-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}

/* Server Specs */
.server-specs {
  padding: 5rem 0;
  background: #f8f9fa;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.spec-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.spec-card:hover {
  transform: translateY(-5px);
}

.spec-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.spec-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.spec-card p {
  color: #666;
  line-height: 1.6;
}

.specs-note {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  font-style: italic;
}

/* Contributors */
.contributors {
  padding: 5rem 0;
  background: white;
}

.contributors-intro {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
}

.contributors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contributor-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contributor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.contributor-avatar {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contributor-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.contributor-card p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.contributor-role {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.contributor-role.admin {
  background: #667eea;
  color: white;
}

.contributor-role.supporter {
  background: #4caf50;
  color: white;
}

/* Links */
.links {
  padding: 5rem 0;
  background: #f8f9fa;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.link-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  color: inherit;
}

.link-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.link-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.link-card p {
  color: #666;
}

/* Contact */
.contact {
  padding: 5rem 0;
  background: white;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;
}

.contact-item {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
}

.contact-item h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.contact-value {
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 1.5rem;
}

.copy-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.copy-btn:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .specs-grid,
  .contributors-grid,
  .links-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
}
</style>

