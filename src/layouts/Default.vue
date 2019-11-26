<template>
  <div class="content-wrapper font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="getClass(this.$route)">
    <header>
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <g-link to="/" aria-label="Home Logo"><g-image src="../../static/logofinalfinal.png" alt="Logo" immediate="true" class="logo1" quality="60"/></g-link>
          <g-link to="/" aria-label="Home Logo sub"><g-image src="../../static/logo-sub.png" alt="Logo" immediate="true" class="logo2" quality="60"/></g-link>
        </div>
        
        <ul>
          <li class="flex-wrap">
           
            <g-image src="../../static/menufinal2.png" @click="showMenu" alt="Menu" immediate="true" v-show="menu1" width="50" height="50" style="cursor: pointer" quality="75"/>
            <g-image src="../../static/menufinal3.png" v-show="menu2" alt="Menu" immediate="true" @click="hideMenu(menu2)" width="50" height="50" style="cursor: pointer;"/>
           
            <transition name="slide-fade">
            <div class="menu__list clearfix shadow-2xl" v-show="isShow">
              <ul class="list-none">
                <li><g-link to="/" class="menu__link" aria-label="Home">Home</g-link></li>
                <li><g-link to="/admission" class="menu__link" aria-label="Admission">Admission</g-link></li>
                <li><g-link to="/about" class="menu__link" aria-label="About">About</g-link></li>
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
    <div class="flex flex-wrap w-full footer">
     <div class="container mx-auto">
       <div class="-mt-4 xl:w-1/3 lg:w-1/3 md:w-full sm:full pt-16 inline-block align-top">
           <g-image class="foot__logo mx-auto" src="../../static/footer_logo.png" quality="60" alt="Footer Logo"/>
           <p class="footer__desc mt-8">Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Porro consectetur ut hic ipsum et 
          veritatis corrupti. Itaque eius soluta optio 
          dolorum temporibus in, atque, quos fugit sunt sit 
          quaerat dicta.</p>
       </div>
       <div class="xl:w-1/3 lg:w-1/3 md:w-1/2 md:pl-8 sm:w-1/2 xs:w-full sm:pl-2 pt-16 inline-block xl:pl-16 lg:pl-16 align-top">
         <label class="join">JOIN US</label>
         <p class="footer__desc mt-4">Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit.</p>
        <div class="flex flex-wrap items-stretch w-full mb-4 relative mt-4">
          <input type="text" name="email" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" placeholder="Email Address" aria-label="Email">
          <div class="flex -mr-px bg__submit">
            <a class="flex items-center leading-normal rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-sm" aria-label="Submit" style="color: #fff;">Submit</a>
          </div>  
        </div>  
       </div>
       <div class="w-full mt-4 xl:w-1/3 lg:w-1/3 md:w-1/2 md:pt-8 sm:w-1/2 xl:pt-16 lg:pt-16 md:pt-16 sm:pt-16 inline-block align-top">
         <div class="w-full"><p class="footer__menu_title text-left xl:text-right lg:text-right md:text-right sm:text-right">Menu</p></div>
         <ul class="flex xl:flex-col lg:flex-col md:flex-col sm:flex-col list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside text-right">
          <li class="m-2 xl:my-2 lg:my-2 md:my-2 sm:my-2"><g-link class="footer__links" to="/" aria-label="Home">Home</g-link></li>
          <li class="m-2 xl:my-2 lg:my-2 md:my-2 sm:my-2"><g-link class="footer__links" to="/about" aria-label="About">About Us</g-link></li>
          <li class="m-2 xl:my-2 lg:my-2 md:my-2 sm:my-2"><g-link class="footer__links" to="/admission" aria-label="Admission">Admission</g-link></li>
         
        </ul>
       </div>
     </div>
   </div>
    <footer class="bg__dark__blue text-white">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>Copyright 2019. All rights reserved.</div>
        </div>
        <ul class="flex items-center"> 
          <li class="mr-8">
            <g-link to="/" target="_blank" aria-label="Terms" class="text-white hover:text-gray-400">
              Terms
            </g-link>
          </li>

          <li class="mr-8">
            <a href="sitemap.xml" class="text-white hover:text-gray-400">
              Sitemap
            </a>
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
    getClass(route){
      if(route.path === '/'){
        console.log()
        return 'home__banner';
      }
      else if(route.path === '/admission')
      {
        return 'home__admission';
      }
      else if(route.path === '/news')
      {
        return 'home__news';
      }
      else{
        return 'home__about';
      }
    }
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


