<template>
  <section class="section works" id="works">
    <h2 class="h2">{{$t('works.h2')}}</h2>
    <p class="p">{{$t('works.p')}} </p>
    <div class="grid">
      <article class="container article">
        <a class="a" href="https://github.com/danielvito-pereira/whitepace" target="_blank" rel="noopener noreferrer" title="Whitepace">
          <figure class="figure">
            <img src="../assets/img/projetos/witspace.png" alt="Imagen" class="img" loading="lazy">
          </figure>
          <h4 class="h4"></h4>
          <div class="overlay"> 
            <div class = "items"></div>
            <div class = "items head">
              <p>{{ $t('works.articleWhitepace') }}</p>
            </div>
            <div class = "items price">
              <span class="svg" title="SCSS">
              <svg  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" style="fill:#cd6799"/></svg>
              </span>
              <span class="svg" title="VUE.JS">
                <svg  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883"/>
                <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E"/>
                </svg>
              </span>
            </div>
            <div class="items cart">
              <a  href="https://github.com/danielvito-pereira/whitepace" title="Whitepace github" target="_blank" rel="noopener noreferrer">
                <svg class="svg" height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                  <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
                </svg>
              </a>
            </div>          
          </div>
        </a>
      </article>
      <article class="container article">
        <a class="a" href="https://github.com/danielvito-pereira/NLW_Return" target="_blank" rel="noopener noreferrer" title="NLW_Return">
          <figure class="figure">
            <img src="../assets/img/projetos/NLW_Return.png" alt="Imagen" class="img" loading="lazy">
          </figure>
          <h4 class="h4"></h4>
          <div class="overlay"> 
            <div class = "items"></div>
            <div class = "items head">
              <p>{{$t('works.articleNlw')}}</p>
            </div>
            <div class = "items price">
              <span class="svg" title="HTML-5">
                <img src="../assets/img/html-5-svgrepo-com.svg" alt="html 5" srcset="html 5">
              </span>
              <span class="svg" title="CSS 3">
                <img src="../assets/img/css-3-svgrepo-com.svg" alt="css 3" srcset="css 3">
              </span>
              <span class="svg" title="JavaScript">
                 <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"></rect><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path></svg>
              </span>
            </div>
            <div class="items cart">
              <a  href="https://github.com/danielvito-pereira/NLW_Return" title="NLW_Return github" target="_blank" rel="noopener noreferrer">
                <svg class="svg" height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                  <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
                </svg>
              </a>
            </div>
          </div>
        </a>
      </article>
      <article class="container article">
        <a class="a" href="https://github.com/danielvito-pereira/clone-netflix" target="_blank" rel="noopener noreferrer" title="Clone Netflix">
          <figure class="figure">
            <img src="../assets/img/projetos/netflix.png" alt="Imagen" class="img" loading="lazy">
          </figure>
          <h4 class="h4"></h4>
          <div class="overlay"> 
            <div class = "items"></div>
            <div class = "items head">
              <p>{{$t('works.articleClone')}}</p>
            </div>
            <div class = "items price">
              <span class="svg" title="HTML-5">
                <img src="../assets/img/html-5-svgrepo-com.svg" alt="html 5" srcset="html 5">
              </span>
              <span class="svg" title="CSS 3">
                <img src="../assets/img/css-3-svgrepo-com.svg" alt="css 3" srcset="css 3">
              </span>
              <span class="svg" title="JavaScript">
                 <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"></rect><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path></svg>
              </span>
            </div>
            <div class="items cart">
              <a  href="https://github.com/danielvito-pereira/clone-netflix" title="Github clone-netflix" target="_blank" rel="noopener noreferrer">
                <svg class="svg" height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                  <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
                </svg>
              </a>
            </div>
          </div>
        </a>
      </article>
      <article class="container article">
        <a class="a" href="https://github.com/danielvito-pereira/Relogio_Analogico" target="_blank" rel="noopener noreferrer" title="Relógio Analógico">
            <figure class="figure">
              <img src="../assets/img/projetos/Relógio.png" alt="Imagen" class="img" loading="lazy">
            </figure>
            <h4 class="h4"></h4>
            <div class="overlay"> 
              <div class = "items"></div>
              <div class = "items head">
                <p>{{$t('works.articleRelogio')}}</p>
              </div>
              <div class = "items price">
                <span class="svg" title="HTML-5">
                  <img src="../assets/img/html-5-svgrepo-com.svg" alt="html 5" srcset="html 5">
                </span>
                <span class="svg" title="CSS 3">
                  <img src="../assets/img/css-3-svgrepo-com.svg" alt="css 3" srcset="css 3">
                </span>
                <span class="svg" title="JavaScript">
                 <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"></rect><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path></svg>
                </span>
              </div>
              <div class="items cart">
                <a  href="https://github.com/danielvito-pereira/Relogio_Analogico" title="Github Relogio_Analogico" target="_blank" rel="noopener noreferrer">
                  <svg class="svg" height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                  <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
                </svg>
                </a>
              </div>
            </div>
        </a>
      </article>
      <article class="container article">
        <a class="a" href="https://github.com/danielvito-pereira/Teste_de_digitar" target="_blank" rel="noopener noreferrer" title="Teste_de_digitar">
          <figure class="figure">                    
            <img src="../assets/img/projetos/Teste_de_Velocidade_de_Digitação.png" alt="Imagen" class="img" loading="lazy">          
          </figure>
          <h4 class="h4"></h4>
          <div class="overlay"> 
            <div class = "items"></div>
            <div class = "items head">
              <p>{{$t('works.articleTeste')}} </p>
            </div>
            <div class = "items price">
              <span class="svg" title="HTML-5">
                <img src="../assets/img/html-5-svgrepo-com.svg" alt="html 5" srcset="html 5">
              </span>
              <span class="svg" title="CSS 3">
                <img src="../assets/img/css-3-svgrepo-com.svg" alt="css 3" srcset="css 3">
              </span>
              <span class="svg" title="JavaScript">
                 <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"></rect><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path></svg>
              </span>
            </div>
            <div class="items cart">
              <a  href="https://github.com/danielvito-pereira/Teste_de_digitar" title="Github Teste_de_digitar" target="_blank" rel="noopener noreferrer">
                <svg class="svg" height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
                </svg>
              </a>
            </div>
          </div>
        </a>
      </article>     
      <article class="container article">
        <a class="a" href="https://github.com/danielvito-pereira/calculator_js" target="_blank" rel="noopener noreferrer" title="calculator_js">
          <figure class="figure">
            <img src="../assets/img/projetos/calculadora.png" alt="Imagen" class="img" loading="lazy">
          </figure>
          <h4 class="h4"></h4>
          <div class="overlay"> 
            <div class = "items"></div>
            <div class = "items head">
              <p>{{$t('works.articleCalc')}} </p>
            </div>
            <div class = "items price">
              <span class="svg" title="HTML-5">
                <img src="../assets/img/html-5-svgrepo-com.svg" alt="html 5" srcset="html 5">
              </span>
              <span class="svg" title="CSS 3">
                <img src="../assets/img/css-3-svgrepo-com.svg" alt="css 3" srcset="css 3">
              </span>
              <span class="svg" title="JavaScript">
                 <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"></rect><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path></svg>
                </span>
            </div>
            <div class="items cart">
              <a  href="https://github.com/danielvito-pereira/calculator_js" title="Github calculator_js" target="_blank" rel="noopener noreferrer">
                <svg class="svg" height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                  <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
                </svg>
              </a>
            </div>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionWorks",
}
</script>

<style lang="scss">
  .works{
    color:var(--blanco);
    gap: 3.125rem;
    min-height: 60vh;
    
    .h2{
      margin: 0 0 1rem;
      color:inherit;
    }
  }
  .tecnologia{
    gap: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5em;
    min-height: 60vh;
  }
  .i{
    width: 20%;
  }
  .container {
    bottom: 0;
    margin: auto;
    -webkit-box-shadow: 0 0 5px rgb(0, 0, 0);
    box-shadow: 0 0 5px #000;
    cursor: pointer;
    .a{
      .figure{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
        .img {
          background: #4158D0;
          background-image: linear-gradient(45deg, #4158D0, #C850C0);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .h4 {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .2);
        backdrop-filter: blur(1rem);
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        color: var(--blanco);
        font-size: 1.8em;
        font-family: var(--tipo-titular);
        font-style: italic;
        opacity: 0;
        transform: scale(1.5) translateZ(1);
        transition: all .5s ease;
      }
    }
    .overlay {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content:center;
      gap: 5em;
      padding: 1em;
      color: white;
      opacity: 0;
      transition: all 0.5s;
      font-family: "Playfair Display", serif;

      .a{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        gap: 2em;
        width: 90%;
      }
    }
    .head {
      font-size: 30px;
      line-height: 40px;
      transform: translateY(40px);
      transition: all 0.7s;
    }
    .price {
      font-size: 22px;
      line-height: 10px;
      font-weight: bold;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.7s;
      margin-bottom: 2em;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content:space-around;
      width: 90%;
    }
    .cart {
      font-size: 12px;
      opacity: 0;
      letter-spacing: 1px;
      font-family: "Lato", sans-serif;
      transform: translateY(40px);
      transition: all 0.7s;
      span{
        margin-left: 0.625rem;
      }
    }
    &:hover{
      .h4{
        opacity: 1;
      }
      .overlay{
        opacity: 1;
        .head{
          transform: translateY(0px);
        }
        hr{
          width: 4.6875rem;
          transition-delay: 0.4s;
        }
        .price{
          transform: translateY(0px);
          transition-delay: 0.3s;
          opacity: 1;
        }
        .cart{
          transform: translateY(0px);
          transition-delay: 0.6s;
          opacity: 1;
          
        }
      }
    }
  }
  .svg{
    width:3em;
    height:3em;
  }
  .section .grid{
    width: 90%;
    max-width: 68rem;
    margin: 1em 0;
    display: grid;
    grid-template-columns: repeat( auto-fit , minmax( 15.625rem , 1fr) );
    gap:2em;
    justify-content: center;
  }   
  .section .article{
    width: 100%;
    min-height: 15vh;
    max-height: 31.25rem ;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 1em;
    
  }

</style>