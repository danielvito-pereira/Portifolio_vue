<template>
  <CirculosBk/>
  <SectionHeader/>
  <MainMain/>
  <SectionFooter/>
</template>

<script>
import CirculosBk from './components/CirculosBk.vue'
import SectionHeader from './components/SectionHeader.vue'
import MainMain from './components/MainMain.vue'
import SectionFooter from './components/SectionFooter.vue'
export default {
  name: 'App',
  components: {
    CirculosBk,
    SectionHeader,
    MainMain,
    SectionFooter,
  }
}
</script>

<style lang="scss">
:root {
  --blanco: #e0e0e0;
  --blanco-2: rgba(255,255,255,.2);
  --negro: #181818;
  --negro-5: rgba(0, 0, 0, 0.5);
  --negro-7: rgba(0, 0, 0, 0.75);
  --tipo-titular:'Playfair Display', serif;
  --tipo-principal:'Inter', sans-serif;
}

@media screen and (prefers-color-scheme:light){
    :root {
      --blanco: #181818;
      --blanco-2: rgba(0,0,0,.2);
      --negro: #e0e0e0;
      --negro-5: rgba(255, 255, 255, 0.5);
      --negro-7: rgba(255, 255, 255, 0.75);
    }
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  img , figure{
    max-width: 100%;
    width: 100%;
    display: flex;
    object-fit: cover ;
    object-position: center center;
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  ;
  }
  video {
    max-width: 100%;
    width: 100%;
    display: flex;
    object-fit: cover;
    object-position: center center;
  }
  p a {
    display: inline;
  }
  li {
    list-style-type: none;
  }
  table,tr,td {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  h1,h2,h3,h4,h5,h6 {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
  form, button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    -webkit-hyphens: auto;
            hyphens: auto;
    background-color: transparent;
    display: flex;
    color: inherit;
  }
  body {
    font-family: var(--tipo-principal);
    font-size: 100%;
    min-height: 100vh;
    background-color: var(--negro);
    color: var(--blanco);
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

 
</style>
