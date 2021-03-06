// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import NewsLayout from '~/layouts/NewsLayout.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('NewsLayout', NewsLayout)

  head.meta.push({
    name: 'keywords',
    content: 'Cataingan Polytechnic Institute'
  })

  head.meta.push({
    name: 'description',
    content: 'Best Technical Vocational Institution'
  })

  head.meta.push({
    name: 'author',
    content: 'Jhon Kenrick Villaces'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css'
  })
}


