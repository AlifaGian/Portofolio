<template>
  <div>
    <header>
      <nav class="nav">
        <router-link to="/" class="nav">Home</router-link>
        <router-link to="/about" class="nav">About</router-link>
        <router-link to="/projects" class="nav">Projects</router-link>
        <router-link to="/contact" class="nav">Contact</router-link>
      </nav>
    </header>

    <section class="home">
      <img src="../assets/mount2.png" class="mount2">
      <img src="../assets/mount1.png" class="mount1">
      <img src="../assets/bush2.png" class="bush2">

      <div class="title" style="font-size: 5VW;">Alifa Gian Rafid</div>

      <img src="../assets/bush1.png" class="bush1">
      <img src="../assets/leaf2.png" class="leaf2">
      <img src="../assets/leaf1.png" class="leaf1">

      
      <div class="scroll-down" @click="scrollToSection('about')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <section class="about">
      <main class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
        <div class="space-y-2 text-center md:text-left px-10">
          <div class="text-amber-200" style="color: white;">Hello World, I'm</div>
          <div class="text-4xl font-bold md:text-5xl text-white fadein-up" style="font-size: 3vw;">Alifa Gian Rafid</div>
          <div class="py-2">
            <div class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up" ref="typewriter">
              <div class="wrap">{{ txt }}</div>
            </div>
          </div>
          <div class="text-white pr-4 fade-in-from-left" style="font-size: 1vw;">Welcome to My personal website. <span class="wave">👋🏼</span></div>
          <br>
        </div>
        <div class="flex justify-center md:justify-start fadein-right">
          <img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async" data-nimg="1" class="w-10/12 md:h-auto rounded-full border-4 border-amber-200 pict" style="border-color: aqua; width: 30vw;" src="/img/porto.png">
        </div>
      </main>    
    </section>
  </div>
</template>

<script setup>
import '../script.js';
</script>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: ["Web Developer", "Software Engineering Student", "3D Artist", "Tech Enthusiast"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
      window.addEventListener('scroll', this.handleScroll);
    });
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
    handleScroll() {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    },
    scrollToSection(sectionClass) {
      const section = document.querySelector(`.${sectionClass}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style src="../assets/css/styles.css"></style>
<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
  color: #49adff;
  font-size: 3.3vw;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10deg)
  }

  60% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(0deg)
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(255, 0, 234, 0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(255,219,112,0.44);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-1 {
  animation-delay: 200ms;
}
.fadein-2 {
  animation-delay: 400ms;
}
.fadein-3 {
  animation-delay: 600ms;
}
.fade-500 {
  animation-delay: 500ms;
}

.scroll-down {
  position: absolute;
  bottom: 5vw;
  margin-left: 48vw;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  color: #fff;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #49adff;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }
</style>
