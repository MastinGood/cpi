<template>
  <NewsLayout>
 
     <div class="flex flex-row container mx-auto head__container -mt-40" style="margin-top: 70px!important">
      <h1 class="news__post__title text-center mx-auto">All News</h1>
     </div>
     <div class="container mx-auto mt-20">
     <div class="w-full lg:w-3/4 md:w-3/4 sm:w-3/4  mx-auto">
        <div v-for="post in $page.posts.edges" :key="post.node.id" class="post border-gray-400 border-b mb-12">
        <div class="flex-wrap lg:flex md:flex sm:flex-wrap">
        <div class="w-full lg:w-1/4 md:w-full sm:w-full">
          <g-image class="w-full news__image" :src="post.node.image" quality="50" alt="News"/>
        </div>
        <div class="w-full mt-4 lg:mt-0 md:mt-0 sm:mt-0 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full lg:pl-8 md:pl-8 sm:pl-8">
          <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span class="text-gray-800">{{ post.node.date }}</span>
          <span class="mx-1"> &middot; </span>
          <span class="text-gray-600">{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4 w-full">
          {{ post.node.description.substring(0, 180)+"..." }}
        </div>

          <div class="mb-8">
            <g-link :to="post.node.path" aria-label="Read More" class="font-bold uppercase readmore">Read More</g-link>
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
      timeToRead
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
