<template>
	<div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full xs:w-full mt-20 inline-block card-section">
      <div class="max-w-sm mx-auto rounded overflow-hidden shadow-lg sm:mx-auto card__item">
        <g-image class="w-full news__image" :src="post.image" quality="50" alt="News"/>
        <div class="px-6 py-4 bg__new">
          <g-link :to="post.path" class="font-bold text-xl mb-2 title_news">{{post.title}}</g-link>
          <p class="text-gray-700 text-base">{{post.description.substring(0, 140)+"..."}}</p>
          <p class="text-base mt-6 mb-4" v-html="post.date" />
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ["post"],
};

</script>
