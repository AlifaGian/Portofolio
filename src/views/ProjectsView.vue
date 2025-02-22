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
    
            <h1 class="title" style="font-size: 5VW;">Proyek</h1>
    
            <img src="../assets/bush1.png" class="bush1">
            <img src="../assets/leaf2.png" class="leaf2">
            <img src="../assets/leaf1.png" class="leaf1">
            <div class="scroll-down" @click="scrollToSection('project')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
        </section>
    
        <section class="project bg-[#3c3c3c]">
            <div>
            <h4 class="h4">Proyek Saya</h4>
            <h5 class="h5">Beberapa proyek yang telah saya kerjakan</h5>
              <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in"> 
                <div v-for="item in items" :key="item.id" @click="openModal(item.videoUrl)">
                  <div class="item-card flex flex-col h-full items-center gap-2 rounded bg-[#2c2c2c] hover:bg-[#383838] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5">
                    <div class="flex h-128 w-full p-0 lg:p-0 zoom-in">
                      <img alt="Project Image" loading="lazy" decoding="async" data-nimg="1" class="drop-shadow-xl rounded rounded-xl" :src="'/img/portfolio-' + item.imageUrl + '.png'">
                    </div>
                    <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                      <div class="title-text font-medium text-secondary">{{ item.name }}</div>
                      <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">{{ item.status }}</div>
                      <div class="w-full mt-4 text-normal text-sm text-left" style="color: white;">{{ item.tech }}</div>
                      <div class="w-full flex justify-end">
                        <div class="flex cursor-pointer items-end gap-2 text-primary">
                          <a v-if="item.github !== 'null'" :href="item.github" target="_blank" rel="noreferrer" title="View github repository" class="transition-all hover:text-accent">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                          <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer" title="View finished project" class="transition-all hover:text-accent">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" @click="closeModal">
      <div class="bg-[#1e1e1f] p-5 rounded-lg max-w-xl w-full transform transition-transform" :class="{'scale-50': isScaled}" @click.stop>
        <div class="flex justify-end">
          <button @click="closeModal" class="text-white hover:text-amber-300">&times;</button>
        </div>
        <div class="gallery-container">
          <video v-if="selectedVideoUrl" autoplay loop controls :src="selectedVideoUrl" class="w-full rounded-lg"></video>
          <div v-else class="image-gallery">
            <img v-for="(image, index) in images" :key="index" :src="image" :class="{ 'active': index === currentImageIndex }" class="gallery-image">
            <button @click="prevImage" class="gallery-nav prev">&#10094;</button>
            <button @click="nextImage" class="gallery-nav next">&#10095;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script setup>
    import '../script.js';
    </script>
    
        <script>
        import '../script.js';
            export default {
                mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
  window.removeEventListener('scroll', this.handleScroll);
},
      data() {
        return {
          activeTab: 1,
          showModal: false,
          selectedVideoUrl: '',
          items: [
            {
              id: 1,
              name: 'Situs Web Personal',
              imageUrl: 'portfolio_v2',
              status: 'Situs web pribadi saya, saya membuat situs web ini untuk menampilkan profil, keterampilan, dan proyek saya.',
              tech: 'VueJS 3, Tailwind',
              github: 'null',
              demo: 'null'
            },
            {
              id: 2,
              name: 'Keraton Kasepuhan Cirebon',
              imageUrl: 'keraton',
              status: 'Sebuah situs web yang dibuat untuk menceritakan sejarah keraton, dan pemesanan tiket tur. Di sini saya bekerja sebagai tim dan bekerja di bagian front-end.',
              tech: 'VueJS 3, Quasar',
              github: 'https://github.com/AlifaGian/Keraton.git',
              demo: 'null'
            },
            {
              id: 3,
              name: 'Schools POV',
              imageUrl: 'sistekdes',
              status: 'Game tentang kehidupan sekolah seperti ujian, belajar, dan eksplorasi sekolah. Di sini saya bekerja dalam tim dan bekerja di bagian pemodelan 3D serta membantu proses pengkodean.',
              tech: 'Unity, Blender',
              github: 'null',
              demo: 'null'
            },
            {
              id: 4,
              name: 'GF Luxury Car',
              imageUrl: 'gf',
              status: 'Situs web yang menyediakan berbagai macam mobil mewah untuk dibeli, serta berbagai macam barang dagangan mobil, layanan servis mobil, dan produk orisinal kami.',
              tech: 'VueJS3',
              github: 'https://github.com/AlifaGian/GF-Luxury-Cars.git',
              demo: 'null'
            },
            {
              id: 5,
              name: 'Animasi Baterai',
              imageUrl: 'blender',
              tech: 'Blender',
              github: 'null',
              demo: 'null',
              videoUrl: './img/blender.mp4'
            },
            {
              id: 6,
              name: 'Hasil video editing saya',
              imageUrl: 'edit',
              tech: 'Adobe After Effect',
              github: 'null',
              demo: 'null',
              videoUrl: './img/ANNIS.mp4'
            }
          ]
        };
      },
      methods: {
        openModal(videoUrl) {
          this.selectedVideoUrl = videoUrl;
          this.showModal = true;
          this.isScaled = false;
        },
        closeModal() {
          this.selectedVideoUrl = '';
          this.showModal = false;
          this.isScaled = false;
        },
        scaleDown() {
          this.isScaled = true;
          this.$refs.video.style.transform = 'scale(0.5)';
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
    };
</script>
            
    
    <style src="../assets/css/styles.css"></style>
    <style src="../assets/css/all.css">
    </style>