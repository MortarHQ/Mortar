import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Page transition animations
export const pageTransitions = {
  enter: (element: HTMLElement) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
      }
    )
  },

  leave: (element: HTMLElement) => {
    return gsap.to(element, { 
      opacity: 0, 
      y: -30, 
      duration: 0.5, 
      ease: "power2.in" 
    })
  }
}

// Hero section animations
export const heroAnimations = {
  init: () => {
    const tl = gsap.timeline()
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.stat-item', 
      { opacity: 0, y: 30, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)",
        stagger: 0.1
      },
      "-=0.3"
    )

    return tl
  }
}

// Scroll-triggered animations
export const scrollAnimations = {
  init: () => {
    // Animate section titles
    gsap.fromTo('.section-title', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.section-title',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate feature cards
    gsap.fromTo('.feature-card', 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.features-grid',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate modpack cards
    gsap.fromTo('.modpack-card', 
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.modpacks-grid',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate info cards
    gsap.fromTo('.info-card', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.info-grid',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate spec cards
    gsap.fromTo('.spec-card', 
      { opacity: 0, y: 50, rotationY: 15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.specs-grid',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate contributor cards
    gsap.fromTo('.contributor-card', 
      { opacity: 0, scale: 0.8, rotation: 5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.contributors-grid',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate link cards
    gsap.fromTo('.link-card', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.links-grid',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }
}

// Navigation animations
export const navAnimations = {
  init: () => {
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    )
  },

  mobileMenu: {
    open: () => {
      gsap.fromTo('.nav-menu .nav-link', 
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.3, 
          ease: "power2.out",
          stagger: 0.1
        }
      )
    },

    close: () => {
      gsap.to('.nav-menu .nav-link', { 
        opacity: 0, 
        x: -20, 
        duration: 0.2, 
        ease: "power2.in",
        stagger: 0.05
      })
    }
  }
}

// Button hover animations
export const buttonAnimations = {
  init: () => {
    // Primary button hover
    const primaryBtns = document.querySelectorAll('.btn-primary')
    primaryBtns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })

    // Secondary button hover
    const secondaryBtns = document.querySelectorAll('.btn-secondary')
    secondaryBtns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" })
      })
    })

    // Copy button hover
    const copyBtns = document.querySelectorAll('.copy-btn')
    copyBtns.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2, ease: "power2.out" })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" })
      })
    })
  }
}

// Card hover animations
export const cardAnimations = {
  init: () => {
    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card')
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -10, 
          scale: 1.02,
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1,
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
    })

    // Link cards
    const linkCards = document.querySelectorAll('.link-card')
    linkCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -8, 
          scale: 1.03,
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1,
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
    })
  }
}

// Floating animation for hero background
export const floatingAnimation = {
  init: () => {
    gsap.to('.hero-background', {
      y: 20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })
  }
}

// Initialize all animations
export const initAllAnimations = () => {
  navAnimations.init()
  scrollAnimations.init()
  buttonAnimations.init()
  cardAnimations.init()
  floatingAnimation.init()
}

