<template>
	<Layout>
		<div class="flex flex-row mt-10">
	     <div class="container mx-auto">
	       <div class="w-full mx-auto">
	      <h2 class="steps">Steps</h2>
	        <div class="tabs">
	          <div class="tab my-6" v-for="step in $page.allstep.edges" :key="step.node.id">
		            <input type="radio" name="rd">
		            <label class="tab-label">{{step.node.title}}</label>
		            <div class="tab-content">
		              {{step.node.description}}
		            </div>
	          </div>
	        </div>
	     </div>
	     </div>
   		</div>
	</Layout>
</template>
<page-query>
query{ 
  allstep : allStep {
    edges {
      node {
        title
        description
      }
    }
  }
}
</page-query>
