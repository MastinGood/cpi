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
        <div class="w-full my-10">
          <h2 class="integrity">Integrity | Service | Merit</h2>
          <p class="integrity__desc mt-2">Our School is diverse and dynamic, and our students have the highest aspirations for their education and future livesss.</p>
        </div>
        <div class="w-full my-10">
          <h2 class="integrity">Hardwork</h2>
          <p class="integrity__desc mt-2">To maximize the God-given gift to-do and act with efficiency.</p>
        </div>
        <div class="w-full my-10">
          <h2 class="integrity">Discipline</h2>
          <p class="integrity__desc mt-2">
          Being free to innovate and explore within the boundaries of common good for the people and for the environment.</p>
        </div>
        <div class="w-full my-10">
          <h2 class="integrity">Gratitude</h2>
          <p class="integrity__desc mt-2">
          Being thankful for the new knowledge and skill acquired from school, teacher, colleagues, and its benefactors.</p>
        </div>
        <hr>
      </div>

    </div>

   <div class="flex flex-row mt-20">
      <div class="container mx-auto">
        <div class="w-full my-10">
          <h2 class="integrity">Mission</h2>
          <p class="integrity__desc mt-2">CPI is committed to promote a quality education and develop a globally competitive individual by giving them a solid training ground and good exposure to practical application while nurturing values formation among the young people of Masbate.</p>
        </div>
         <div class="w-full my-10">
          <h2 class="integrity">Vision</h2>
          <p class="integrity__desc mt-2">CPI dreamed of delivering a quality education to the underprivileged youth of Masbate who have high potential in specialized professional field, thereby making them an all inclusive capable individual in various area bygiving them innovative culture and technology rich opportunities to address the difficulties of society today and in the future.</p>
         
        </div>
        <h2 class="text-center history__title mt-20 mb-6">History</h2>
        <p class="history__desc mb-6">Cataingan Polytechnic Institute started out as Cataingan Computer Tutorial School on October 2009. Its primary reason is to introduce to the locale of Cataingan the usefulness of computer of their every day jobs as well as provide transient task to the technology experts who suffered job loss due to the defunct of a computer college. The first few clients of the group had been the lecturers who were then eager to get helped by means of the computer. Followed through the youths who are willing to get educated and to be computer literate to have an edge in looking for a job. It changed well as time goes by when the small commercial enterprise risked to bid for a slot in the first automated electoral vote casting. The school were given its slot and trained a number of youth.</p>
         <p class="history__desc">There it begin the journey of Cataingan Polytechnic Institute. CPI officially applied for accreditation under the TESDA and was conceded to offer Computer Hardware Servicing NC II, Bread and Pastry NC II, Consumer Electronics Servicing NC II, Food and Beverage NC II and Housekeeping NC II. Additional TESDA courses was likewise offered, such as Hilot Wellness NC II, Bookkeeping NC III and Driving NC II. In 2015, it was granted an approval from DepEd to offer a Senior High School offering a Technical-Vocational-Livelihood track. A year after it was given grant from CHED to offer a multi year course BTBted, which give the understudy a choice to work as an educator or an employee in hospitality industry. Currently, CPI is working to expand and on its way to offer more courses that is in line with skills development.</p>
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
