<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <img src="@/assets/logo.png" alt="Mortar Logo" class="mortar-logo" />
        <div class="hero-text">
          <h1 class="hero-title">Mortar</h1>
          <h2 class="hero-subtitle">我的世界公益服</h2>
          <p class="hero-description">
            体验最原始的快乐，探索有趣的小游戏，游玩多人整合包，与来自四海八方的朋友交流聊天
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary" @click="joinServer">
              立即加入
            </button>
            <router-link to="/about" class="btn btn-secondary">
              了解更多
            </router-link>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">1500+</div>
            <div class="stat-label">任务</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">新生物群系</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">12+</div>
            <div class="stat-label">不同维度</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">新地牢</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">服务器特色</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>原始快乐</h3>
            <p>体验最纯粹的我的世界游戏乐趣，回归游戏本质</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>有趣小游戏</h3>
            <p>探索各种精心设计的小游戏，挑战你的技巧和智慧</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📦</div>
            <h3>多人整合包</h3>
            <p>与朋友一起游玩精选整合包，体验丰富的模组内容</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3>友好社区</h3>
            <p>与来自四海八方的朋友交流聊天，建立深厚友谊</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modpacks Section -->
    <section class="modpacks">
      <div class="container">
        <h2 class="section-title">当前整合包</h2>
        <div class="modpacks-grid">
          <div
            class="modpack-card"
            v-for="modpack in modpacks"
            :key="modpack.name"
          >
            <div class="modpack-image">
              <div class="modpack-placeholder">{{ modpack.icon }}</div>
            </div>
            <div class="modpack-info">
              <h3>{{ modpack.name }}</h3>
              <p>{{ modpack.description }}</p>
              <span
                class="modpack-status"
                :class="{ 'is-running': modpack.isRunning }"
                >{{ modpack.isRunning ? "运行中" : "维护中" }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Server Info Section -->
    <section class="server-info">
      <div class="container">
        <h2 class="section-title">服务器信息</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>服务器地址</h3>
            <p class="server-address">bgp.mortar.top</p>
            <button class="copy-btn" @click="copyAddress">复制地址</button>
          </div>
          <div class="info-card">
            <h3>QQ 交流群</h3>
            <p class="qq-group">483949851</p>
            <button class="copy-btn" @click="copyQQ">复制群号</button>
          </div>
          <div class="info-card">
            <h3>游戏版本</h3>
            <p>Minecraft 1.16.5</p>
          </div>
          <div class="info-card">
            <h3>服务器类型</h3>
            <p>公益服 · 免费游玩</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";
import { heroAnimations, initAllAnimations } from "@/utils/animations";

const modpacks = ref([
  {
    name: "史前世界",
    description: "PrehistoricWorld",
    icon: "🦕",
    isRunning: true,
  },
  {
    name: "冒险与地牢2",
    description: "RAD2 - 超大型的魔法奇幻冒险生存整合包",
    icon: "⚔️",
    isRunning: true,
  },
]);

const joinServer = () => {
  window.open("https://play.mcmod.cn/sv20187835.html", "_blank");
};

const copyAddress = () => {
  navigator.clipboard.writeText("bgp.mortar.top");
  alert("服务器地址已复制到剪贴板");
};

const copyQQ = () => {
  navigator.clipboard.writeText("483949851");
  alert("QQ群号已复制到剪贴板");
};

onMounted(async () => {
  await nextTick();

  // Initialize hero animations
  heroAnimations.init();

  // Initialize all other animations
  initAllAnimations();
});
</script>

<style scoped>
.home {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  left: 0;
  right: 0;
  margin: 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  background-size: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.mortar-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 2rem;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: #ff6b6b;
  color: white;
}

.btn-primary:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* Sections */
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

/* Features Section */
.features {
  padding: 5rem 0;
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Modpacks Section */
.modpacks {
  padding: 5rem 0;
}

.modpacks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.modpack-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.modpack-card:hover {
  transform: translateY(-5px);
}

.modpack-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modpack-placeholder {
  font-size: 4rem;
}

.modpack-info {
  padding: 1.5rem;
}

.modpack-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.modpack-info p {
  color: #666;
  margin-bottom: 1rem;
}

.modpack-status {
  background: #4caf50;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Server Info Section */
.server-info {
  padding: 5rem 0;
  background: #f8f9fa;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.server-address,
.qq-group {
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 1rem;
}

.copy-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.copy-btn:hover {
  background: #5a6fd8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
