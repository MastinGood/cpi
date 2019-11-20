<template>
  <Layout>
 
     <div class="flex flex-row container mx-auto head__container">
      
      <h1 class="admission__title text-center mx-auto">ABOUT US</h1>
     
     </div>

    <div class="flex flex-row process__section">
      <div class="container mx-auto">
        <div class="w-full block">
          <h2 class="admin__process mx-auto text-center">CORE VALUES & MISSION</h2>
          <div class="w-full px-4 xl:w-1/2 lg:w-1/2 md:w-full md:px-10 sm:w-full sm:px-8 mx-auto mt-2">
            <p class="miss__desc text-center">Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Porro consectetur ut hic ipsum et 
          veritatis corruption.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row mt-20">
      <div class="container mx-auto">
        <div class="w-full">
          <h2 class="integrity">Integrity | Service | Merit</h2>
          <p class="integrity__desc mt-2">Our School is diverse and dynamic, and our students have the highest aspirations for their education and future lives.</p>
        </div>
      </div>
    </div>
   <div class="flex flex-row mt-20">
      <div class="container mx-auto">
        <div class="w-full">
          <h2 class="integrity">Mission</h2>
          <p class="integrity__desc mt-2">Our School is diverse and dynamic, and our students have the highest aspirations for their education and future lives.</p>
          <p class="mission_list my-4 pl-4 mr-4">1. Accentuate learning, growth, perseverance and self-awareness as life-long values.</p>
          <p class="mission_list my-4 pl-4 mr-4">2. Nurture creativity and originality as precursors for critical and reﬂective thought and action.</p>
          <p class="mission_list my-4 pl-4 mr-4">3. Accentuate learning, growth, perseverance and self-awareness as life-long values.</p>
          <p class="mission_list my-4 pl-4 mr-4">4. Accentuate learning, growth, perseverance and self-awareness as life-long values.</p>
        </div>
        <h2 class="text-center history__title mt-20 mb-6">History</h2>
        <p class="history__desc mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <p class="history__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <g-image src="../../static/about_bg_2.png" class="about_bg_2 my-10" alt="Admission" quality="60"/>
      </div>
    </div>
    <div class="flex flex-row mb-20">
      <div class="container mx-auto">
        <div class="w-full">
          <h2 class="year__title text-left mt-10 xl:mt-20 lg:mt-20 md:mt-20 sm:mt-20 mb-4">2017</h2>
          <p class="year__title__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. </p>
          <h2 class="year__title text-left mt-20 mb-4">2018</h2>
          <p class="year__title__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. </p>
          <h2 class="year__title text-left mt-20 mb-4">2019</h2>
          <p class="year__title__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>


export default {
  components: { 
    TinySlider: () => import('vue-tiny-slider')
   },
  metaInfo: {
    title: 'About Us'
  },
  
}

</script>
