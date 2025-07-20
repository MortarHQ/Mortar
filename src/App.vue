<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">
          <span class="logo-text">Mortar</span>
        </router-link>
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMenu">首页</router-link>
          <router-link to="/about" class="nav-link" @click="closeMenu">关于</router-link>
          <a href="https://play.mcmod.cn/sv20187835.html" target="_blank" class="nav-link external" @click="closeMenu">
            MC MOD 找服玩
          </a>
        </div>
        <div class="nav-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Mortar 公益服</h3>
            <p>体验最原始的快乐，探索有趣的小游戏</p>
          </div>
          <div class="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/about">关于</router-link></li>
              <li><a href="https://www.mortar.top" target="_blank">官方网站</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>联系我们</h4>
            <p>QQ群：483949851</p>
            <p>服务器：bgp.mortar.top</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Mortar 公益服. 感谢您的支持与帮助.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navAnimations } from '@/utils/animations'

const isMenuOpen = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  if (isMenuOpen.value) {
    setTimeout(() => {
      navAnimations.mobileMenu.open()
    }, 100)
  } else {
    navAnimations.mobileMenu.close()
  }
}

const closeMenu = () => {
  if (isMenuOpen.value) {
    navAnimations.mobileMenu.close()
    setTimeout(() => {
      isMenuOpen.value = false
    }, 200)
  }
}

// Close menu when route changes
watch(route, () => {
  closeMenu()
})

onMounted(async () => {
  await nextTick()
  navAnimations.init()
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

/* Navigation */
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo {
  text-decoration: none;
  color: #333;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link.router-link-active {
  color: #667eea;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #667eea;
}

.nav-link.external {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background 0.3s ease;
}

.nav-link.external:hover {
  background: #5a6fd8;
  color: white;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

/* Main Content */
.main-content {
  flex: 1;
  margin-top: 70px;
  width: 100%;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
}

/* Footer */
.footer {
  background: #2c3e50;
  color: white;
  padding: 3rem 0 1rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #ecf0f1;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #3498db;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #95a5a6;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .nav-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #5a6fd8;
}
</style>

