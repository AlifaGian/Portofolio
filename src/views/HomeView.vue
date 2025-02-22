<template>
  <div>
    <header>
      <nav class="nav">
        <router-link to="/" class="nav">Beranda</router-link>
        <router-link to="/about" class="nav">Tentang</router-link>
        <router-link to="/projects" class="nav">Proyek</router-link>
        <router-link to="/achievement" class="nav">Penghargaan</router-link>
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
          <h2 class="" style="color: white;">Hai Dunia, Saya</h2>
          <div class="nama"><b>Alifa Gian Rafid</b></div>
          <div class="py-2">
            <div class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up" ref="typewriter">
              <div class="wrap">{{ txt }}</div>
            </div>
          </div>
          <div class="desc">Selamat datang di website personal saya. <span class="wave">👋🏼</span></div>
          <br>
        </div>
        <div class="foto">
          <img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async" data-nimg="1" class="w-10/12 md:h-auto rounded-full border-4 pict" style="border-color: white;" src="/img/porto.png">
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
<style src="../assets/css/all.css">
</style>