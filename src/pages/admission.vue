<template>
  <Layout>
 
     <div class="flex flex-row container mx-auto head__container">
      
      <h1 class="admission__title text-center mx-auto">Admission</h1>
     
     </div>

    <div class="flex flex-row process__section">
      <div class="container mx-auto">
        <div class="w-full block">
          <h2 class="admin__process mx-auto text-center">Admission Process</h2>
          <div class="w-full mx-auto mt-2">
            <p class="process__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie massa at metus gravida efficitur. Aliquam felis risus, dapibus vitae nisl et, suscipit elementum leo. Vestibulum blandit nunc vitae dignissim imperdiet. Pellentesque vitae ante sit amet augue vestibulum dictum ac in nunc. Aliquam tristique ligula libero, quis ultrices turpis suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie massa at metus gravida efficitur.</p>
          </div>
      </div>
      </div>
    </div>
   <div class="flex flex-row mt-10">
     <div class="container mx-auto">
       <div class="w-full mx-auto">
      <h2 class="steps">Steps</h2>
        <div class="tabs">
          <div class="tab my-6">
            <input type="radio" id="rd1" name="rd">
            <label class="tab-label" for="rd1">1. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
            </div>
          </div>
          <div class="tab my-6">
            <input type="radio" id="rd2" name="rd">
            <label class="tab-label" for="rd2">2. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
          <div class="tab my-6">
            <input type="radio" id="rd3" name="rd">
            <label class="tab-label" for="rd3">3. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
          <div class="tab my-6">
            <input type="radio" id="rd2" name="rd">
            <label class="tab-label" for="rd2">4. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
        </div>
     </div>
     </div>
   </div>
   <div class="container mx-auto mb-10">
      <div class="w-full mx-auto mt-10">
        <p class="process__desc">Lorem ipsum dolor sit ametss, consectetur adipiscing elit. Fusce molestie massa at metus gravida efficitur. Aliquam felis risus, dapibus vitae nisl et, suscipit elementum leo. Vestibulum blandit nunc vitae dignissim imperdiet. Pellentesque vitae ante sit amet augue vestibulum dictum ac in nunc. Aliquam tristique ligula libero, quis ultrices turpis suscipit a.</p>
      </div>
   </div>
   <div class="flex flex-wrap w-full footer">
     <div class="container mx-auto">
       <div class="-mt-4 xl:w-1/3 lg:w-1/3 md:w-full sm:full pt-16 inline-block align-top">
           <g-image class="foot__logo" src="../../static/foot_logo.png" quality="60" alt="Footer Logo"/>
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
          <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" placeholder="Email Address">
          <div class="flex -mr-px" style="background-color: #fac71d!important;color:#154071; font-family:ont-family: 'Open Sans', sans-serif;">
            <a class="flex items-center leading-normal rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Submit</a>
          </div>  
        </div>  
       </div>
       <div class="w-full mt-4 xl:w-1/3 lg:w-1/3 md:w-1/2 md:pt-8 sm:w-1/2 xl:pt-16 lg:pt-16 md:pt-16 sm:pt-16 inline-block align-top">
         <div class="w-full"><p class="footer__menu_title text-left xl:text-right lg:text-right md:text-right sm:text-right">Menu</p></div>
         <ul class="flex xl:flex-col lg:flex-col md:flex-col sm:flex-col list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside text-right">
          <li class="m-2 xl:my-2 lg:my-2 md:my-2 sm:my-2"><g-link class="footer__links" to="/">Home</g-link></li>
          <li class="m-2 xl:my-2 lg:my-2 md:my-2 sm:my-2"><g-link class="footer__links" to="/about">About Us</g-link></li>
          <li class="m-2 xl:my-2 lg:my-2 md:my-2 sm:my-2"><g-link class="footer__links" to="/admission">Admission</g-link></li>
         
        </ul>
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
    title: 'Admission'
  },
  
}

</script>
<style scoped lang="scss">
$midnight: #154071;
  .tabs {
  overflow: hidden;
}
input[type='radio'] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab {
  color: white;
  overflow: hidden;
  border-radius: 10px;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    letter-spacing: 1.2px;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>
