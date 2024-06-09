<template>
  <div>
      <header>
          <h1>Logo</h1>
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
              <router-link to="/projects">Projects</router-link>
              <a href="#">Contact</a>
          </nav>
      </header>
  
      <section class="home">
          <img src="../assets/mount2.png" class="mount2">
          <img src="../assets/mount1.png" class="mount1">
          <img src="../assets/bush2.png" class="bush2">
  
          <h1 class="title">About</h1>
  
          <img src="../assets/bush1.png" class="bush1">
          <img src="../assets/leaf2.png" class="leaf2">
          <img src="../assets/leaf1.png" class="leaf1">
      </section>
      
      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center" style="background-color: #3b3291;">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up"
            src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg" alt="Foto">
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1" style="color: white;">
            &nbsp; &nbsp; &nbsp; Hi everyone! My name is Alifa Gian Rafid. I'm a web developer from Bandung, West Java. I
            have 1 year of experience in front-end web development.
            I really enjoy what I do right now, In my opinion, creating a web is not just a job, but it's like pouring out creative ideas from our minds.
          </p>
          <p class="mb-3 fadein-left fadeins-2" style="color: white;">
            &nbsp; &nbsp; &nbsp; Besides making websites, I also enjoy making 3d models, games, and even video editing.
          </p>
        </div>

      </section>
      
      <section class="skills-section" style="background-color: #3b3291; margin-top: 5vw;" >
  <h2 class="text-center mb-5 text-2xl font-semibold" style="color: white;">Skills</h2>
  <div>
    <ul class="tabs flex justify-center mb-5">
      <li class="mr-2">
        <button style="color: white;" class="tab-button" :class="{ 'active': activeTab === 1 }" @click="activeTab = 1" >Tech Stack</button>
      </li>
      <li class="mr-2">
        <button style="color: white;" class="tab-button" :class="{ 'active': activeTab === 2 }" @click="activeTab = 2">Tools</button>
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
          status: 'Intermediate'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Intermediate'
        },
        {
          id: 3,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Beginner'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: 'Beginner'
        },
        {
          id: 5,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Intermediate'
        },
        {
          id: 6,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: 'Beginner'
        },
        {
          id: 7,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Beginner'
        },
        {
          id: 8,
          name: 'Quasar',
          imageUrl: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg',
          status: 'Beginner'
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
              });
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
  
  ::-webkit-scrollbar-button { width: 20px; }
         
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
  padding: 1rem;
  border: 1px solid #fbbf24;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.item-card:hover {
  background-color: rgba(251, 191, 36, 0.1);
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
}

.tech-image {
  max-height: 85%;
  max-width: 85%;
  transition: all 0.3s;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
}

.tech-name {
  font-weight: 500;
  color: #4b5563;
  transition: all 0.3s;
}

.tech-status {
  opacity: 0;
  margin-top: 0.75rem;
  font-size: 0.625rem;
  color: #fbbf24;
  transition: all 0.3s;
}

.item-card:hover .tech-status {
  opacity: 1;
}

/* Additional CSS for responsive design */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
  }

  .tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }

  .tech-name {
    font-size: 0.875rem;
  }

  .tech-status {
    font-size: 0.5rem;
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }

  .tab-button {
    padding: 0.5rem 0.5rem;
    font-size: 0.75rem;
  }

  .tech-name {
    font-size: 0.75rem;
  }

  .tech-status {
    font-size: 0.375rem;
  }
}

  </style>
  