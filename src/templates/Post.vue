<template>
  <NewsLayout>
  <div class="container flex mx-auto my-16">
     <div class="w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 mx-auto">
        <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <g-image :src="$page.post.image" class="w-full"/>
      <div class="markdown-body my-8">{{$page.post.description}}</div>
      <div class="mb-8">
        <br>
        <g-link to="/news" class="font-bold uppercase">Back to News</g-link>
      </div>
     </div>
    </div>
  </NewsLayout>
</template>
<page-query>
query Post ($path: String!) {
 post (path: $path) {
    title
    date (format: "MMMM D, Y")
    description
    image
  }
}
</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>