<template>
  <div class="selectLang" @click="toggleShare">
    <div class="iconeWorld">
      <img src="../assets/img/18461902111628783618.svg" alt="" srcset="">
    </div>
    <div class="langue">{{ selectedLanguage }}</div>
    <div class="share" :class="{ active: showShare }">
      <button class="btn" @click="setLocale('pt-BR')" title="Português br">
       <!--<?xml version="1.0" encoding="UTF-8" standalone="no"?>--> 
        <svg width="80" height="85" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M480 96H32V416H480V96Z" fill="#32AB45"/>
          <path d="M256 144L88 258.383L256 368L424 258.383L256 144Z" fill="#FFE70E"/>
          <path d="M320 256C320 291.346 291.346 320 256 320C220.654 320 192 291.346 192 256C192 220.654 220.654 192 256 192C291.346 192 320 220.654 320 256Z" fill="#2A2FAF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M201.428 222.56C208.684 220.885 216.242 220 224.007 220C264.861 220 299.993 244.498 315.513 279.606C311.761 289.056 305.823 297.4 298.323 304.015C290.981 269.717 260.497 244 224.007 244C212.652 244 201.879 246.49 192.203 250.954C193.01 240.603 196.28 230.943 201.428 222.56Z" fill="#FBFBFB"/>
        </svg>

      </button>
      <button class="btn" @click="setLocale('es')" title="Español">
       <!--<?xml version="1.0" encoding="UTF-8" standalone="no"?>-->  
       <svg width="80" height="85" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 96H480V416H32V96Z" fill="#E92B2B"/>
          <path d="M32 200H480V312H32V200Z" fill="#FFD02B"/>
        </svg>

      </button>
      <button class="btn" @click="setLocale('en')" title="Ingles">
       <!-- <?xml version="1.0" encoding="UTF-8" standalone="no"?>--> 
        <svg width="80" height="85" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 96H480V416H32V96Z" fill="#E92B2B"/>
          <path d="M32 336H480V376H32V336Z" fill="#FBFBFB"/>
          <path d="M32 256H480V296H32V256Z" fill="#FBFBFB"/>
          <path d="M32 176H480V216H32V176Z" fill="#FBFBFB"/>
          <path d="M32 96H480V136H32V96Z" fill="#FBFBFB"/>
          <path d="M32 96H240V256H32V96Z" fill="#2A2FAF"/>
          <path d="M63.9982 112L67.5904 123.056H79.2151L69.8105 129.889L73.4027 140.944L63.9982 134.111L54.5936 140.944L58.1858 129.889L48.7812 123.056H60.4059L63.9982 112Z" fill="#FBFBFB"/>
          <path d="M63.9982 160L67.5904 171.056H79.2151L69.8105 177.889L73.4027 188.944L63.9982 182.111L54.5936 188.944L58.1858 177.889L48.7812 171.056H60.4059L63.9982 160Z" fill="#FBFBFB"/>
          <path d="M63.9982 208L67.5904 219.056H79.2151L69.8105 225.889L73.4027 236.944L63.9982 230.111L54.5936 236.944L58.1858 225.889L48.7812 219.056H60.4059L63.9982 208Z" fill="#FBFBFB"/>
          <path d="M111.998 112L115.59 123.056H127.215L117.81 129.889L121.403 140.944L111.998 134.111L102.594 140.944L106.186 129.889L96.7812 123.056H108.406L111.998 112Z" fill="#FBFBFB"/>
          <path d="M111.998 160L115.59 171.056H127.215L117.81 177.889L121.403 188.944L111.998 182.111L102.594 188.944L106.186 177.889L96.7812 171.056H108.406L111.998 160Z" fill="#FBFBFB"/>
          <path d="M111.998 208L115.59 219.056H127.215L117.81 225.889L121.403 236.944L111.998 230.111L102.594 236.944L106.186 225.889L96.7812 219.056H108.406L111.998 208Z" fill="#FBFBFB"/>
          <path d="M159.998 112L163.59 123.056H175.215L165.81 129.889L169.403 140.944L159.998 134.111L150.594 140.944L154.186 129.889L144.781 123.056H156.406L159.998 112Z" fill="#FBFBFB"/>
          <path d="M159.998 160L163.59 171.056H175.215L165.81 177.889L169.403 188.944L159.998 182.111L150.594 188.944L154.186 177.889L144.781 171.056H156.406L159.998 160Z" fill="#FBFBFB"/>
          <path d="M159.998 208L163.59 219.056H175.215L165.81 225.889L169.403 236.944L159.998 230.111L150.594 236.944L154.186 225.889L144.781 219.056H156.406L159.998 208Z" fill="#FBFBFB"/>
          <path d="M207.998 112L211.59 123.056H223.215L213.81 129.889L217.403 140.944L207.998 134.111L198.594 140.944L202.186 129.889L192.781 123.056H204.406L207.998 112Z" fill="#FBFBFB"/>
          <path d="M207.998 160L211.59 171.056H223.215L213.81 177.889L217.403 188.944L207.998 182.111L198.594 188.944L202.186 177.889L192.781 171.056H204.406L207.998 160Z" fill="#FBFBFB"/>
          <path d="M207.998 208L211.59 219.056H223.215L213.81 225.889L217.403 236.944L207.998 230.111L198.594 236.944L202.186 225.889L192.781 219.056H204.406L207.998 208Z" fill="#FBFBFB"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlterarIdioma',
  data() {
    return {
      selectedLanguage: '',// Variável para armazenar a língua selecionada
      showShare: false // Adiciona uma variável para controlar a exibição da div share
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.selectedLanguage = locale;// Atualiza a variável com a língua selecionada
      this.showShare = false; // Esconde a div share quando uma linguagem é selecionada
      this.closeShare(); // Adicionado para fechar a div quando um idioma é selecionado
    },
    toggleShare() {
      this.showShare = !this.showShare; // Alterna a exibição da div share ao clicar no botão
    },
    closeShare() {
      this.showShare = false;
    }
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.selectLang')) {
        this.showShare = false; // Esconde a div share quando clicar fora da div selectLang
      }
    });
  },
  unmounted() {
  document.removeEventListener('click', () => {}); // Remove o evento de click no documento quando o componente é desmontado
}
};
</script>

<style lang="scss" scoped>
.selectLang {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: center;
  height: 36px;
  width:  100px;
  left: 40%;
  border-radius: 8px;
  position: relative; // Adiciona uma posição relativa para a div poder ter um elemento filho absoluto
  cursor: pointer;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  .iconeWorld {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
  }

  .langue {

  }

  .share {
    position: absolute;
    top: 80%;
    left: 0;
    display: none;
    flex-direction: column;
    gap: 2rem;
    transition: 0.4s ease-in-out;
    width: 100%;
    padding: 2.5rem;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    &.active {
      display: flex;
      align-items: center;
      z-index: 2;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 2.5em;
    outline: none;
    border: none;
    background-color: transparent;
    transition: 0.4s all;
    cursor: pointer;
    }
  }
</style>
