<template>
  <Layout>
 
     <div class="flex-wrap container mx-auto head__container w-full px:10 xl:px-20 lg:px:20 md:px-20 sm:px:20">
      <h2 class="sub__head mb-3 mx-auto text-center xl:text-left xl:text-left md:text-left sm:text-left">HELPING YOU GROW</h2>
      <h1 class="main__head text-center xl:text-left xl:text-left md:text-left sm:text-left">Best Technical<br> Vocational Institution</h1>
      <p class="w-full mt-10 xl:w-1/2 xl:mt-0 lg:w-1/2 lg:mt-0 md:w-1/2 md:mt-0 sm:w-1/2 sm:mt-0 p__head mt-3 mb-8 text-center xl:text-left xl:text-left md:text-left sm:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, gityre
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua.
      </p>
      <div class="flex -mt-20 justify-center xl:justify-start lg:justify-start md:justify-start sm:justify-start">
       <a class="get__btn xl:mt-16 lg:mt-16 md:mt-16 sm:mt-16">Get Started</a>
      </div>
     </div>

    <div class="flex mb-10 content">
      <div class="container mx-auto">
        <div class="flex-1 h-12">
          <h1 class="welcome">Welcome</h1>
          <p class="text-center lg:w-1/2 sm:w-full mx-auto welcome__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut  reiciendis, vel recusandae obcaecati hic dicta 
            repudiandae!</p>
        </div>
        <div class="flex flex-wrap mb-4 about__section">
          <div class="w-full lg:w-1/2 md:w-full sm:w-full sm:-mt-20 sm:block sm:pb-8 md:mt-10 clearfix">
            <g-image src="../../static/about_pic.jpg" class="about__pic" alt="About Us"/>
          </div>
          <div class="w-full mt-8 lg:w-1/2 lg:pl-30 md:w-full md:pl-10 md:mt-10 sm:w-full sm:block">
            <h2 class="about__title">About Us</h2>
            <p class="about__description mt-6">Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Rem maxime nam porro 
              possimus fugiat quo molestiae illo.</p>
            <p class="inline-block mt-6 mr-2 xl:mx-8 lg:mx-8 md:mx-2 sm:ml-4 about__students"><g-image src="../../static/grad.png" class="inline-block mr-6" alt="Students"/> 28,000+ Students</p>
            <p class="inline-block mt-6 mr-2 xl:mx-8 lg:mx-8 md:mx-2 sm:ml-4 about__students"><g-image src="../../static/grad.png" class="inline-block mr-6" alt="Year Graduates"/> 25,000+ Yearly Graduates</p>
          </div>
        </div>
     </div>
    </div>
    <div class="flex flex-wrap news mt-8">
        <div class="w-full">
            <div class="container mx-auto">
              <h1 class="text-center news__title mx-auto mt-8">Latest News</h1>
              <p class="text-center news__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <NewsList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
                <div class="container mx-auto text-center mt-10">
                  <g-link to="/news" class="text-center mx-auto view__all mt-16">VIEW ALL NEWS</g-link>
                </div>
            </div>
        </div>  
    </div>
    <div class="flex flex-wrap w-full meet__faculty">
      <div class="container mx-auto">
        <h1 class="text-center faculty__section mx-auto mt-10">MEET THE FACULTY</h1>
        <p class="text-center faculty__subtitle mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div class="w-full xl:w-1/2 xl:mt-4 lg:w-1/2 md:w-1/2 md:mt-10 sm:w-full sm:mt-4 sm:-mt-10 xs:w-full inline-block test__section">
          
       <ClientOnly>
        <TinySlider :mouse-drag="true" :speed="1000" :loop="true" :autoplay="true" :center="true" :autoplayTimeout="2000" items="1" :controls="false" :autoplayButton="false" gutter="20">
          <div class="faculty__test">
            <g-image src="../../static/faculty.png" height="140" width="140" alt="Faculty" class="justify-center mx-auto" quality="60"/>
            <p class="faculty__name text-center mx-auto mt-4">Josh Smith</p>
            <p class="faculty__position text-center mx-auto">Position</p>
            <p class="faculty__desc text-center mx-auto px:10 mt-8 xl:px-20 lg:px-20 md:px-20 sm:px-20">Lorem ipsum dolor sit amet, consect rth
             adipisicing elit. Magnam repellat aut  neq 
            Doloribus sunt non aut reiciendis, teryen
            figaro vel recusandae obcaecati hic. 
            Magnam repellat autt neque! Doloribus 
            sunt non aut reiciendis, vel recusandae 
            obcaecati hic</p>
          </div>
          <div class="faculty__test">
            <g-image src="../../static/faculty.png" height="140" width="140" alt="Faculty" class="justify-center mx-auto" quality="60"/>
            <p class="faculty__name text-center mx-auto mt-4">Josh Smith</p>
            <p class="faculty__position text-center mx-auto">Position</p>
            <p class="faculty__desc text-center mx-auto px:10 mt-8 xl:px-20 lg:px-20 md:px-20 sm:px-20">Lorem ipsum dolor sit amet, consect rth
             adipisicing elit. Magnam repellat aut  neq 
            Doloribus sunt non aut reiciendis, teryen
            figaro vel recusandae obcaecati hic. 
            Magnam repellat autt neque! Doloribus 
            sunt non aut reiciendis, vel recusandae 
            obcaecati hic</p>
          </div><div class="faculty__test">
            <g-image src="../../static/faculty.png" height="140" width="140" alt="Faculty" class="justify-center mx-auto" quality="60"/>
            <p class="faculty__name text-center mx-auto mt-4">Josh Smith</p>
            <p class="faculty__position text-center mx-auto">Position</p>
            <p class="faculty__desc text-center mx-auto px:10 mt-8 xl:px-20 lg:px-20 md:px-20 sm:px-20">Lorem ipsum dolor sit amet, consect rth
             adipisicing elit. Magnam repellat aut  neq 
            Doloribus sunt non aut reiciendis, teryen
            figaro vel recusandae obcaecati hic. 
            Magnam repellat autt neque! Doloribus 
            sunt non aut reiciendis, vel recusandae 
            obcaecati hic</p>
          </div>
        </TinySlider>
       </ClientOnly>   
        </div>
        <div class="xl:w-1/2 lg:w-1/2 md:w-1/2 xs:w-full mt-20 inline-block">
          
            <g-image class="w-full" src="../../static/map.png" alt="Located" quality="60"/>
         
        </div>
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
          <input type="text" name="email" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" placeholder="Email Address">
          <div class="flex -mr-px" style="background-color: #fac71d!important;color:#154071; font-family:ont-family: 'Open Sans', sans-serif;">
            <a class="flex items-center leading-normal rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-sm" style="color: #fff;">Submit</a>
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
<page-query>
query{
  allPost(sortBy: "date", order : ASC, perPage: 3){
  totalCount
    edges {
      node {
        image
        title
        description
        date (format: "MMMM D  YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
import NewsList from '~/templates/NewsList.vue';
export default {
  components: { 
    TinySlider: () => import('vue-tiny-slider'),
    NewsList,

   },
  metaInfo: {
    title: 'Home'
  },

  
}

</script>

