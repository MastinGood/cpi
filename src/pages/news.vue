<template>
  <NewsLayout>
 
     <div class="flex flex-row container mx-auto head__container -mt-20">
      <h1 class="news__post__title text-center mx-auto">All News</h1>
     </div>
     <div class="container mx-auto mt-20">
     <div class="w-3/4 mx-auto">
        <div v-for="post in $page.posts.edges" :key="post.node.id" class="post border-gray-400 border-b mb-12">
        <div class="flex-wrap lg:flex md:flex sm:flex-wrap">
        <div class="w-full lg:w-1/4 md:w-full sm:w-full">
          <g-image class="w-full news__image" :src="post.node.image" quality="50" alt="News"/>
        </div>
        <div class="w-full mt-4 lg:mt-0 md:mt-0 sm:mt-0 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full lg:pl-8 md:pl-8 sm:pl-8">
          <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
        </div>

        <div class="text-lg mb-4 w-full">
          {{ post.node.description.substring(0, 180)+"..." }}
        </div>

          <div class="mb-8">
            <g-link :to="post.node.path" class="font-bold uppercase readmore">Read More</g-link>
          </div>
        </div>
        </div>
         <hr class="mt-4">
      </div>
       <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/news"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
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
          <input type="text" name="email" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" placeholder="Email Address" aria-label="Email">
          <div class="flex -mr-px bg__submit">
            <a class="flex items-center leading-normal rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-sm" aria-label="Submit" style="color: #fff;">Submit</a>
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
  </NewsLayout>
</template>

<page-query>
query Post ($page: Int){
  posts : allPost(sortBy: "date", order : ASC, perPage: 10, page: $page) @paginate{
  totalCount
  pageInfo{
  totalPages
  currentPage
  }
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
import PaginationPosts from '../components/PaginationPosts'
export default {
  components: {
     PaginationPosts
  },
 metaInfo: {
    title: 'All News'
  },
}
</script>
