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
       <g-link to="/admission" class="get__btn xl:mt-16 lg:mt-16 md:mt-16 sm:mt-16">Get Started</g-link>
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
        <div class="w-full xl:w-1/2 xl:mt-40 lg:w-1/2 lg:mt-8 md:w-1/2 md:-mt-8 sm:w-full sm:mt-4 sm:-mt-10 xs:w-full inline-block test__section">
          
       <ClientOnly>
        <TinySlider :mouse-drag="true" :speed="1000" :loop="true" :autoplay="true" :center="true" :autoplayTimeout="2000" items="1" :controls="false" :autoplayButton="false" gutter="20">
          <div class="faculty__test" v-for="team in $page.faculty.edges" :key="team.node.id">
            <g-image :src="team.node.image" alt="Faculty" class="justify-center mx-auto faculty__img" quality="60"/>
            <p class="faculty__name text-center mx-auto mt-4">{{team.node.name}}</p>
            <p class="faculty__position text-center mx-auto">{{team.node.position}}</p>
            <p class="faculty__desc text-center mx-auto px:10 mt-8 xl:px-20 lg:px-20 md:px-20 sm:px-20">{{team.node.description}}</p>
          </div>
        </TinySlider>
       </ClientOnly>   
        </div>
        <div class="xl:w-1/2 lg:w-1/2 md:w-1/2 xs:w-full mt-20 inline-block">
          
            <g-image class="w-full" src="../../static/map.png" alt="Located" quality="60"/>
         
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
  faculty : allFaculty{
    edges {
      node {
        name
        description
        position
        image
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

