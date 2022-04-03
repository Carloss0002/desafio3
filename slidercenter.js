//Slider do  Centro
let picture = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
   
  ]
  const templete = document.createElement('template')
  
  templete.innerHTML = `
    <div class="container">
     <button class="forward">&#155;</button>
       <div class="scroll"></div>
      <button class="prev">&#155;</button>   
    </div>
  `
  
  class cardSlider extends HTMLElement{
    constructor(){
      super()
  
      this.attachShadow({mode:'open'})

      const importCss = document.createElement('style')
      importCss.innerHTML = `@import\'slider.css\'`
      this.shadowRoot.appendChild(importCss)

  
      this.shadowRoot.appendChild(templete.content.cloneNode(true))
      
      let list = ''
      let index = 0
  
      picture.forEach(component)
      
  
      function component(model){
          index += 1
          if(index === 1){
            list += `
              <section id="${index}" class="active">
                 <img src="${model}" width="200" height="128">
                 <span class="title">lorem ipsum</span><br><br>
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida, velit a maximus tempus, lectus libero gravida risus, a maximus lectus diam id est.</span>
              </section>
            ` 
          } else{
            list += `
             <section id="${index}">
              <img src="${model}" width="200" height="128">
              <span class="title">lorem ipsum</span><br><br>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida, velit a maximus tempus, lectus libero gravida risus, a maximus lectus diam id est.</span>
             </section>
            `
          }
          
        }
       const scroll = this.shadowRoot.querySelector('.scroll')
       scroll.innerHTML = list
    }  
  }
  window.customElements.define('card-slider', cardSlider)

  //Actions

  const forward = document.querySelector('card-slider').shadowRoot.querySelector('.forward')
  const backward = document.querySelector('card-slider').shadowRoot.querySelector('.prev')
  const scroll = document.querySelector('card-slider').shadowRoot.querySelector('.scroll')
  const elements = document.querySelector('card-slider').shadowRoot.querySelectorAll('section').length

  let position = 1
  
  forward.addEventListener('click',()=>{
      const img = document.querySelector('card-slider').shadowRoot.getElementById(position)
      img.classList.remove('active')

      if(position < elements){
        const next = document.querySelector('card-slider').shadowRoot.getElementById(position + 1)
        next.classList.add('active')
        next.scrollIntoView({block:'center'})
        position++
      } else{
        position = 1
        const next = document.querySelector('card-slider').shadowRoot.getElementById(position + 1)
        next.classList.add('active')
        next.scrollIntoView({block:'center'})  
      }
  })
  backward.addEventListener('click',()=>{
      const img = document.querySelector('card-slider').shadowRoot.getElementById(position)
      img.classList.remove('active')

      if(position > 1){
        const next = document.querySelector('card-slider').shadowRoot.getElementById(position - 1)
        next.classList.add('active')
        next.scrollIntoView({block:'center'})
        position--
      } else{
        position = elements
        const next = document.querySelector('card-slider').shadowRoot.getElementById(position + 1)
        next.classList.add('active')
        next.scrollIntoView({block:'center'})  
      }
  })

  let isMousedown = false
  let scrollleft;
  let xAxisStarPosition;

 
