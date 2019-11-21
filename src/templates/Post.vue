<template>
  <NewsLayout>
  <div class="container flex mx-auto my-16">
     <div class="w-full lg:w-3/4 md:w-3/4 sm:w-3/4 mx-auto">
        <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <g-image :src="$page.post.image" class="w-full img__post"/>
      <div class="markdown-body my-8">{{$page.post.description}}</div>
      <div class="markdown-body my-8" v-html="$page.post.content"/>
      <div class="mb-8">
        <br>
        <g-link to="/news" aria-label="Back to news" class="font-bold uppercase">&larr; Back to News</g-link>
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
    content
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
<style src="../css/github-markdown.css" />