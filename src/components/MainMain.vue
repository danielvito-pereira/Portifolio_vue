<template>
  <main class="main">
    <SectionWorks/>
    <SectionAbout/>
  </main>
</template>

<script>
  import SectionWorks from './SectionWorks.vue'
  import SectionAbout from './SectionAbout.vue'

  export default {
      name : 'MainMain',
      components: { 
        SectionWorks,
        SectionAbout,

    }
  }
</script>

<style lang="scss">
  .main{
    background: var(--negro-7);
    text-align: center;
    position: relative;
    z-index: 1;
  }
</style>