<template>
  <div>
    <header>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/achievement">Achievement</router-link>
      </nav>
    </header>

    <section class="home">
      <img src="../assets/mount2.png" class="mount2">
      <img src="../assets/mount1.png" class="mount1">
      <img src="../assets/bush2.png" class="bush2">

      <h1 class="title" style="font-size: 5VW;">Achievement</h1>

      <img src="../assets/bush1.png" class="bush1">
      <img src="../assets/leaf2.png" class="leaf2">
      <img src="../assets/leaf1.png" class="leaf1">
      <div class="scroll-down" @click="scrollToSection('achievements')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <section class="achievements">
      <h4 class="h4">My Achievement</h4>
      <h5 class="h5">Achievements that I have</h5>
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
    title: 'Top 10 LPDP Business Plan Provinsi Jawa Barat',
    description: 'A business plan competition is a competition where participants are required to create and present a structured and detailed business plan. This business plan usually covers various aspects of a business, such as product or service ideas, market analysis, marketing strategies, financial projections, and operational plans. I participated in this competition in a team of 3 people, my main task in this team is as UI/UX Designer. Here is the link of the figma that I worked on. <a class="link" href="https://www.figma.com/design/MAdhFZi2Qt8ijKNs0SCeV2/Prototype?node-id=0-1&t=SgLe3HrDnDE0nzri-1" target="_blank">Click Here</a>',
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
<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #3b3291;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
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

::-webkit-scrollbar-button {
  width: 20px;
}

/* CSS for Skills section */
.skills-section {
  margin: 20px;
}

.text-center {
  text-align: center;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.tabs {
  justify-content: center;
  margin-bottom: 1.25rem;
}

.tab-button {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: transparent;
  color: #6b7280;
  border: none;
  cursor: pointer;
}

.tab-button:hover {
  color: #fff;
}

.tab-button.active {
  color: #fbbf24;
  background-color: rgba(251, 191, 36, 0.1);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 20px;
  padding-bottom: 8rem;
  margin: 0;
}

.grid-item {
  display: flex;
  justify-content: center;
}

.item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  padding: 0.75rem 1.25rem;
  color: #e5e7eb;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.item-card:hover {
  transform: translateY(-0.25rem);
  color: #e5e7eb;
}

.item-card img {
  margin-bottom: 0.75rem;
  max-width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
}

@media screen and (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(1, minmax(150px, 1fr));
  }
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-image {
  max-width: 90%;
  max-height: 90%;
}

.achievement-image {
  cursor: pointer;
}

.achievement-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.achievement-text {
  flex: 1;
  color: white;
  font-size: 1.8vw;
  text-align: left;
  margin-left: 1vw;
}

.achievement-title {
  color: aqua;
  font-size: 2.3vw;
}

.achievement-image img {
  width: 40vw;
  height: auto;
  margin-left: 2vw;
}

.link{
  color: aqua;
}
</style>
