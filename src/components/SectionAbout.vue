<template>
  <section class="section about" id="about">
    <h2 class="h2">{{$t('about.h2')}}</h2>
    <p class="p">{{$t('about.p1')}}</p>
    <p class="p">{{$t('about.p2')}}</p>
    <p class="p">{{$t('about.p3')}}</p>
    <p class="p">{{$t('about.p4')}}</p>
    <p class="p">{{$t('about.p5')}}</p>
    <ul class="rrss">
      <SocialButton/>
    </ul>
  </section>
</template>

<script>
  import  SocialButton from './SocialButton.vue'
  export default {
    name: 'SectionAbout',
    components:{
      SocialButton,
    }
  }
</script>
<style lang="scss">
 
.about .h2{
  margin: 0 0 2rem;
}
.about .p{
  max-width: 40rem;
  margin: 0 0 2rem;
  font-size: 1.1em ;
  text-align: justify;
}
.about .rrss{
  width:100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.about .li{
  margin: 0 1em;
}
.about .svg{
  width:3em;
  height:3em;
}
</style>
