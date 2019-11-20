<template>
  <div class="content-wrapper font-sans text-copy-primary leading-normal flex flex-col min-h-screen">
    <header class="news__header py-2">
      <nav class="container mx-auto flex flex-wrap justify-between items-center">
        <div>
          <g-link to="/"><g-image src="../../static/logo.png" alt="Logo" class="logo1" quality="60"/></g-link>
          <g-link to="/"><g-image src="../../static/logo-sub.png" alt="Logo" class="logo2" quality="60"/></g-link>
        </div>
        
        <ul>
          <li class="flex-wrap">
           
            <g-image src="../../static/menufinal2.png" @click="showMenu" alt="Menu" v-show="menu1" width="50" height="50" style="cursor: pointer" quality="75"/>
            <g-image src="../../static/menufinal3.png" v-show="menu2" alt="Menu" @click="hideMenu(menu2)" width="50" height="50" style="cursor: pointer;"/>
           
            <transition name="slide-fade">
            <div class="menu__list clearfix shadow-2xl" v-show="isShow">
              <ul class="list-none">
                <li><g-link to="/" class="menu__link">Home</g-link></li>
                <li><g-link to="/admission" class="menu__link">Admission</g-link></li>
                <li><g-link to="/about" class="menu__link">About</g-link></li>
              </ul>
            </div>
          </transition>
          </li>
        </ul>
        
      </nav>
    </header>

    <transition name="fade" appear>
      <div class="flex-grow">
        <slot/>
      </div>
    </transition>
    <footer class="bg__dark__blue text-white">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>Copyright 2019. All rights reserved.</div>
        </div>
        <ul class="flex items-center"> 
          <li class="mr-8">
            <g-link to="/" target="_blank" class="text-white hover:text-gray-400">
              Terms
            </g-link>
          </li>

          <li class="mr-8">
            <g-link to="/" target="_blank" class="text-white hover:text-gray-400">
              Sitemap
            </g-link>
          </li>

        </ul>
      </div>
    </footer>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>


export default {
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      menu1: true,
      menu2: false,
      isShow: false,
      theme: '',
    }
  },
  methods: {
    showMenu(){
      this.menu1 = false;
      this.menu2 = true;
      this.isShow = true;
    },
    hideMenu(){
      this.menu1 = true;
      this.menu2 = false;
      this.isShow = false;
    },
  }
}
</script>
<style>
  .fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<style src="../css/main.css" />


