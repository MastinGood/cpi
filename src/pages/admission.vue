<template>
  <Layout>
 
     <div class="flex flex-row container mx-auto head__container">
      
      <h1 class="admission__title text-center mx-auto">Admission</h1>
     
     </div>

    <div class="flex flex-row process__section">
      <div class="container mx-auto">
        <div class="w-full block">
          <h2 class="admin__process mx-auto text-center">Admission Process</h2>
          <div class="w-full mx-auto mt-2">
            <p class="process__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie massa at metus gravida efficitur. Aliquam felis risus, dapibus vitae nisl et, suscipit elementum leo. Vestibulum blandit nunc vitae dignissim imperdiet. Pellentesque vitae ante sit amet augue vestibulum dictum ac in nunc. Aliquam tristique ligula libero, quis ultrices turpis suscipit a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie massa at metus gravida efficitur.</p>
          </div>
      </div>
      </div>
    </div>
   <div class="flex flex-row mt-10">
     <div class="container mx-auto">
       <div class="w-full mx-auto">
      <h2 class="steps">Steps</h2>
        <div class="tabs">
          <div class="tab my-6">
            <input type="radio" id="rd1" name="rd">
            <label class="tab-label" for="rd1">1. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
            </div>
          </div>
          <div class="tab my-6">
            <input type="radio" id="rd2" name="rd">
            <label class="tab-label" for="rd2">2. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
          <div class="tab my-6">
            <input type="radio" id="rd3" name="rd">
            <label class="tab-label" for="rd3">3. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
          <div class="tab my-6">
            <input type="radio" id="rd2" name="rd">
            <label class="tab-label" for="rd2">4. Lorem, ipsum dolor sit amet</label>
            <div class="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
        </div>
     </div>
     </div>
   </div>
   <div class="container mx-auto mb-10">
      <div class="w-full mx-auto mt-10">
        <p class="process__desc">Lorem ipsum dolor sit ametss, consectetur adipiscing elit. Fusce molestie massa at metus gravida efficitur. Aliquam felis risus, dapibus vitae nisl et, suscipit elementum leo. Vestibulum blandit nunc vitae dignissim imperdiet. Pellentesque vitae ante sit amet augue vestibulum dictum ac in nunc. Aliquam tristique ligula libero, quis ultrices turpis suscipit a.</p>
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
    title: 'Admission'
  },
  
}

</script>
<style scoped lang="scss">
$midnight: #154071;
  .tabs {
  overflow: hidden;
}
input[type='radio'] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab {
  color: white;
  overflow: hidden;
  border-radius: 10px;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: $midnight;
    font-weight: bold;
    letter-spacing: 1.2px;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>
