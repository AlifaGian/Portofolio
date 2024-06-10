<template>
    <div>
        <header class="header">
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
    
            <h1 class="title" style="font-size: 5VW;">Projects</h1>
    
            <img src="../assets/bush1.png" class="bush1">
            <img src="../assets/leaf2.png" class="leaf2">
            <img src="../assets/leaf1.png" class="leaf1">
            <div class="scroll-down" @click="scrollToSection('project')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
        </section>
    
        <section class="project">
            <div>
            <h4 class="h4">Past Projects</h4>
            <h5 class="h5">Projects I've made so far</h5>
              <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in"> 
                <div v-for="item in items" :key="item.id" @click="openModal(item.videoUrl)">
                  <div class="item-card flex flex-col items-center gap-2 rounded bg-[#27215e] hover:bg-[#322b78] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5">
                    <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                      <img alt="Project Image" loading="lazy" decoding="async" data-nimg="1" class="drop-shadow-xl rounded rounded-xl" :src="'/img/portfolio-' + item.imageUrl + '.png'">
                    </div>
                    <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                      <div class="title-text font-medium text-secondary">{{ item.name }}</div>
                      <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">{{ item.status }}</div>
                      <div class="w-full mt-4 text-normal text-sm text-left text-amber-200" style="color: aqua;">{{ item.tech }}</div>
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
              name: 'Personal Website',
              imageUrl: 'portfolio_v2',
              status: 'My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.',
              tech: 'VueJS 3, Tailwind',
              github: 'null',
              demo: 'null'
            },
            {
              id: 2,
              name: 'Keraton Kasepuhan Cirebon',
              imageUrl: 'keraton',
              status: 'A website created to tell the history of the palace, and booking tour tickets. Here I work as a team and work on the front-end. ',
              tech: 'VueJS 3, Quasar',
              github: 'https://github.com/AlifaGian/Keraton.git',
              demo: 'null'
            },
            {
              id: 3,
              name: 'Schools POV',
              imageUrl: 'sistekdes',
              status: 'Games about school life such as tests, studying, and school exploration. Here I worked in a team and worked in the 3D modeling section as well as helping with the coding process.',
              tech: 'Unity, Blender',
              github: 'null',
              demo: 'null'
            },
            {
              id: 4,
              name: 'GF Luxury Car',
              imageUrl: 'gf',
              status: 'A website that provides a wide range of luxury cars for purchase, as well as a wide range of car merchandise, car service services and our original products.',
              tech: 'VueJS3',
              github: 'null',
              demo: 'null'
            },
            {
              id: 5,
              name: 'Battery Animation',
              imageUrl: 'blender',
              tech: 'Blender',
              github: 'null',
              demo: 'null',
              videoUrl: './img/blender.mp4'
            },
            {
              id: 6,
              name: 'My Best Edit So Far',
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
    <style>
    .scroll-down {
  position: absolute;
  bottom: 5vw;
  margin-left: 48vw;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  color: #fff;
}
    .item-card:hover {
      transition: transform 0.3s ease;
      transform: translateY(-8px);
    }
    svg:hover {
      stroke: #ffdb70;
    }
    @keyframes fadeZoomIn {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    .fade-zoom-in {
      animation: fadeZoomIn 1s ease-in-out;
    }

    .h4{
        font-size: 3vw;
        color: white;
    }
    .h5{
        font-size: 2vw;
        color: aqua;
        margin-bottom: 3vw;
    }

    nav{
        position: fixed;
        padding: 3%;
        z-index: 999;
    }

    .nav{
      color: #ffffff;
    }

    header nav{
      gap: 0;
      
    }

    header{
      padding: 0;
      position: fixed
    }

    .scrolled {
      backdrop-filter: blur(10px) brightness(0.8);
    }

    @media (max-width: 768px){
    nav{
        position: fixed;
        padding: 3%;
        z-index: 999;
        transform: scale(0.7);
    }

    .nav{
      color: #ffffff;
    }

    header nav{
      gap: 0;
      
    }

    header{
      padding: 0;
      position: fixed
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
    
    