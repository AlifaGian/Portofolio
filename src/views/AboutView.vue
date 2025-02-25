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

      <section
  class="experience-education text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center"
  style="background-color: #3c3c3c; padding: 4vw;">
  <div class="md:w-7/12">
    <h2 class="text-center text-2xl font-semibold mb-5" style="color: white;">Pengalaman</h2>
    <ul class="list-disc pl-5 text-white">
      <li class="mb-3 fadein-left fadeins-1">
        <strong>Teaching Factory (TEFA) SMKN 4 Bandung</strong> (Februari - Juni 2024) <br>
        Sebagai leader dalam pengembangan proyek website Keraton Kasepuhan Cirebon yang dilaksanakan bersama PT Curaweda Palagan Innotech.
      </li>
      <li class="mb-3 fadein-left fadeins-2">
        <strong>Praktik Kerja Lapangan di Universitas Komputer Indonesia</strong> (Juli - Oktober 2024) <br>
        Mendesain ulang website UNIKOM dan mengelola data backlink dari beberapa sitemap yang berkaitan dengan Universitas Komputer Indonesia.
      </li>
    </ul>
  </div>
  <div class="md:w-7/12">
    <h2 class="text-center text-2xl font-semibold mb-5" style="color: white;">Pendidikan</h2>
    <ul class="list-disc pl-5 text-white">
      <li class="mb-3 fadein-left fadeins-3">
        <strong>SDN Banjaran 01</strong> (2013 - 2019) <br>
        Aktif dalam kegiatan ekstrakurikuler Pramuka dan Marching Band.
      </li>
      <li class="mb-3 fadein-left fadeins-4">
        <strong>SMPIT Fithrah Insani 2</strong> (2019 - 2022) <br>
        Aktif dalam kegiatan ekstrakurikuler IT Club dan organisasi ROHIS.
      </li>
      <li class="mb-3 fadein-left fadeins-4">
        <strong>SMK Negeri 4 Bandung</strong> (2022 - 2025) <br>
        Aktif dalam kegiatan ekstrakurikuler ORBIT dan Jurnal.
      </li>
    </ul>
  </div>
</section>

      
<div class="px-5 py-5 md:px-12 md:py-10 text-left text-blue-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-blue-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Tech & Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-blue-200 bg-blue-200 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-blue-200 bg-blue-200 bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
  <div v-for="item in tech" :key="item.id">
    <div
      class="group item-tech flex cursor-pointer items-center gap-2 rounded border border-white px-2 py-2 
      hover:bg-white hover:bg-opacity-10 md:gap-3 lg:px-3 relative">
      
      <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
        <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
          class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
          :src="item.imageUrl" style="color: transparent;">
      </div>

      <div class="flex flex-col items-start text-sm md:text-base lg:text-lg">
        <div class="tech font-medium text-secondary transition-all duration-300">{{ item.name }}</div>
        
        <!-- Status muncul saat hover -->
        <div class="status-tech opacity-0 group-hover:opacity-100 transition-all duration-300 text-white 
        text-[10px] md:text-xs lg:text-sm">
          {{ item.status }}
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
        <div v-show="activeTab === 2">
  <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
    <div v-for="item in tools" :key="item.id">
      <div
        class="group item-tech flex cursor-pointer items-center gap-2 rounded border border-white px-2 py-2 hover:bg-white hover:bg-opacity-10 md:gap-3 lg:px-3 relative">
        
        <!-- Logo -->
        <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
          <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
            class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
            :src="item.imageUrl" style="color: transparent;">
        </div>

        <!-- Nama + Status -->
        <div class="flex flex-col items-start text-sm md:text-base lg:text-lg">
          <div class="tech font-medium text-secondary transition-all duration-300">{{ item.name }}</div>
          
          <!-- Status muncul saat hover -->
          <div class="status-tech opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-[10px] md:text-xs lg:text-sm">
            {{ item.status }}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

      </section>
    </article>
  </div>
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
  