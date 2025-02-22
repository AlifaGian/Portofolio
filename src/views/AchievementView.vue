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

      <h1 class="title" style="font-size: 5VW;">Penghargaan</h1>

      <img src="../assets/bush1.png" class="bush1">
      <img src="../assets/leaf2.png" class="leaf2">
      <img src="../assets/leaf1.png" class="leaf1">
      <div class="scroll-down" @click="scrollToSection('achievements')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <section class="achievements bg-[#3c3c3c]">
      <h4 class="h4">Penghargaan Saya</h4>
      <h5 class="h5">Penghargaan yang saya miliki</h5>
      <ul>
  <li v-for="achievement in achievements" :key="achievement.id" class="achievement-item">
    <div class="achievement-image" @click="openPopup(achievement.image)">
      <img :src="achievement.image" :alt="achievement.title" />
    </div>
    <div class="achievement-text">
      <div class="achievement-title">{{ achievement.title }}</div>
      <div v-html="achievement.description"></div>
    </div>
  </li>
</ul>
<div v-if="isPopupOpen" class="popup" @click="closePopup">
  <img :src="popupImage" class="popup-image" />
</div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../script.js';

// Daftar penghargaan
const achievements = ref([
{
    id: 1,
    title: 'Peserta 10 Besar LPDP Business Plan Provinsi Jawa Barat',
    description: 'Kompetisi rencana bisnis adalah kompetisi di mana para peserta diharuskan membuat dan mempresentasikan rencana bisnis yang terstruktur dan terperinci. Business plan ini biasanya mencakup berbagai aspek dalam sebuah bisnis, seperti ide produk atau jasa, analisis pasar, strategi pemasaran, proyeksi keuangan, dan rencana operasional. Saya mengikuti kompetisi ini dalam sebuah tim yang beranggotakan 3 orang, tugas utama saya dalam tim ini adalah sebagai UI/UX Designer. Berikut adalah link dari figma yang saya kerjakan. <a class="link" href="https://www.figma.com/design/MAdhFZi2Qt8ijKNs0SCeV2/Prototype?node-id=0-1&t=SgLe3HrDnDE0nzri-1" target="_blank">Klik Disini </a>',
    image: '/img/sertifikat.png'
  },
]);

const isPopupOpen = ref(false);
const popupImage = ref('');

const openPopup = (image) => {
  popupImage.value = image;
  isPopupOpen.value = true;
};

const closePopup = () => {
  isPopupOpen.value = false;
};
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
      activeTab: 1,
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
