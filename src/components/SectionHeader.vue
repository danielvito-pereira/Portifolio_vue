<template>
  <header class="section header" id="inicio">
    <AlterarIdioma/>
    <section class="section info">
      <h2 class="h2">Daniel Vitor</h2>
      <h3 class="h3">Frontend Developer</h3>
      
      <ul class="ul">
        <li class="li">
          <a href="https://github.com/danielvito-pereira" target="_blank" rel="noopener noreferrer" class="a btn" title="Github">{{ $t('buttonsHead.b1') }}</a>
        </li>
        <li class="li">
          <a href="https://www.linkedin.com/in/daniel-vitor-pereira-da-silva/" target="_blank" rel="noopener noreferrer" class="a btn" title="LinkedIn">{{$t('buttonsHead.b2')}}</a>
        </li>
      </ul>
    </section>
    <!--
  <div class="ca">
        <span @click="setLocale('pt-BR')">PT-BR</span>
        <span>|-|</span>
        <span @click="setLocale('es')">ES</span>
        <span>|-|</span>
        <span @click="setLocale('en')">EN</span>
      </div>
 -->  
  </header>
</template>

<script>
  import AlterarIdioma from './AlterarIdioma.vue'  
  export default {
    name: 'SectionHeader',
    components:{
      AlterarIdioma,
    }
  }
</script>

<style lang="scss">

.header{
  background: var(--negro-7);
  text-align: center;
  position: relative;
  z-index: 2;
}
.section{
  width: 100%;
  min-height: 100vh;
  padding: 2em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.section .info{
  font-size: 1.2em;
  animation: aparecer1 2s ease 1 both ;
}
.section .ul{
  margin: 2em 0 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  .li{
    margin: 0 1em;
  }
}
.section .ul .a{
  border:1px solid rgba(255,255,255,.2);
  border-radius: 5px;
  padding: 1em 1em 1em;
  text-transform: uppercase;
  font-weight: 600;
  transition: all .5s ease;
  animation: aparecer1 2s ease 1 backwards;
}
.section .ul>:nth-child(2) .a{
  animation-delay: .2s;
}
.section .ul .a:hover{
  border-color: var(--blanco);
}
.btn:link,
.btn:visited {
 text-transform: uppercase;
 text-decoration: none;
 color: var(--blanco);
 padding: 10px 30px;
 border: 1px solid;
 border-radius: 1000px;
 display: inline-block;
 -webkit-transition: all .2s;
 transition: all .2s;
 position: relative;
}

.btn:hover {
 -webkit-transform: translateY(-5px);
     -ms-transform: translateY(-5px);
         transform: translateY(-5px);
 -webkit-box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
         box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
}

.btn:active {
 -webkit-transform: translateY(-3px);
     -ms-transform: translateY(-3px);
         transform: translateY(-3px);
}

.btn::after {
 content: "";
 display: inline-block;
 height: 100%;
 width: 100%;
 top: 0;
 left: 0;
 position: absolute;
 z-index: -1;
 -webkit-transition: all .3s;
 transition: all .3s;
}

.btn:hover::after {
 -webkit-transform: scaleX(1.4) scaleY(1.5);
     -ms-transform: scaleX(1.4) scaleY(1.5);
         transform: scaleX(1.4) scaleY(1.5);
 opacity: 0;
}

.section .h2{
  font-family: var(--tipo-titular);
  font-weight: 600;
  font-size: 5em;
  line-height:1em;
  color:var(--blanco);
  mix-blend-mode: exclusion;
}
.section .h3{
  font-family: var(--tipo-titular);
  font-size: 4.3em;
}

.section .h4{
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  backdrop-filter: blur(1rem);
  position: absolute;
  bottom:0;
  left:0;
  display: flex;
  flex-flow: row wrap ;
  justify-content: center;
  align-items: center;
  color:var(--blanco);
  font-size: 1.8em;
  font-family: var(--tipo-titular);
  font-style: italic;
  opacity: 0;
  transform:translateZ(1) scale(1.5);
  transition: all .5s ease;
  .article:hover .h4{
    opacity: 1;
    transform:translateZ(1) scale(1);
  }
}

</style>