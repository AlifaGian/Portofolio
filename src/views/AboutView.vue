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
  
          <h1 class="title" style="font-size: 5VW;">Tentang</h1>
  
          <img src="../assets/bush1.png" class="bush1">
          <img src="../assets/leaf2.png" class="leaf2">
          <img src="../assets/leaf1.png" class="leaf1">
          <div class="scroll-down" @click="scrollToSection('about')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
      </section>
      
      <section
        class="about text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center" style="background-color: #3c3c3c;">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up"
          src="/img/porto.png" alt="Foto" style="width: 30vw; margin-left: 4vw; margin-right: 3vw;">
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1" style="color: white;">
            Hai semuanya! Nama saya Alifa Gian Rafid. Saya adalah seorang web developer dari Bandung, Jawa Barat.
            Saya memiliki 1 tahun pengalaman dalam pengembangan web front-end.
            Saya sangat menikmati apa yang saya kerjakan saat ini. Menurut saya, membuat web bukan hanya sekedar pekerjaan, tetapi seperti menuangkan ide-ide kreatif dari pikiran kita.
          </p>
          <p class="mb-3 fadein-left fadeins-2" style="color: white;">
            Selain membuat situs web, saya juga senang membuat model 3d, game, dan bahkan mengedit video.
          </p>
        </div>

      </section>
      
      <section class="skills-section" style="background-color: #3c3c3c; margin-top: 5vw;" >
  <h2 class="text-center mb-5 text-2xl font-semibold" style="color: white;">Skills</h2>
  <div>
    <ul class="tabs flex justify-center mb-5">
      <li class="mr-2">
        <button style="color: white;" class="tab-button" :class="{ 'active': activeTab === 1 }" @click="activeTab = 1" >Keahlian</button>
      </li>
      <li class="mr-2">
        <button style="color: white;" class="tab-button" :class="{ 'active': activeTab === 2 }" @click="activeTab = 2">Alat</button>
      </li>
    </ul>
  </div>
  <div v-show="activeTab === 1">
    <div class="grid-container">
      <div v-for="item in tech" :key="item.id" class="grid-item">
        <div class="item-card" style="border: 1px solid #ffffff;">
          <div class="image-container">
            <img :alt="item.name" :src="item.imageUrl" class="tech-image">
          </div>
          <div class="text-container">
            <div class="tech-name" style="color:white;">{{ item.name }}</div>
            <div class="tech-status" style="color:white;">{{ item.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-show="activeTab === 2">
    <div class="grid-container">
      <div v-for="item in tools" :key="item.id" class="grid-item">
        <div class="item-card" style="border: 1px solid #ffffff;">
          <div class="image-container">
            <img :alt="item.name" :src="item.imageUrl" class="tech-image">
          </div>
          <div class="text-container">
            <div class="tech-name" style="color:white;">{{ item.name }}</div>
            <div class="tech-status" style="color:white;">{{ item.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
  </template>
  
  <script setup>
  import '../script.js';
  </script>
  
      <script>
      import '../script.js';
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
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Terbiasa'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Terbiasa'
        },
        {
          id: 3,
          name: 'Java',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-java-25-226002.png?f=webp&w=256',
          status: 'Pemula'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=256',
          status: 'Pemula'
        },
        {
          id: 5,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Terbiasa'
        },
        {
          id: 6,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: 'Pemula'
        },
        {
          id: 7,
          name: 'C#',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-c-2336965-1982846.png?f=webp&w=256',
          status: 'Pemula'
        },
        {
          id: 8,
          name: 'Tailwind',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png?f=webp&w=256',
          status: 'Pemula'
        },
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
        {
          id: 5,
          name: 'Blender',
          imageUrl: 'https://seeklogo.com/images/B/blender-logo-91B66CA31F-seeklogo.com.png',
          status: '3D Design'
        },
        {
          id: 6,
          name: 'After Effect',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-adobe-after-effects-3303129-2746532.png?f=webp&w=256',
          status: 'Editing'
        },
        {
          id: 7,
          name: 'Unity',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-unity-226057.png?f=webp&w=256',
          status: 'Game Develop'
        },
        {
          id: 8,
          name: 'Figma',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256',
          status: 'UI/UX Design'
        },
      ]
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
          
  
          <style src="../assets/css/styles.css">
          </style>
          <style src="../assets/css/all.css">
          </style>
  