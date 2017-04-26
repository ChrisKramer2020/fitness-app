import './styles/screen.scss'

const main = () => {
  document.querySelector('h1').textContent += ''
}

var el = document.createElement('button')
document.body.appendChild(el)
el.className = 'container'
el.style.marginTop = '300px'
el.style.width = '300px'
el.style.height = '40px'
el.style.color = '#ff30'

var element = document.createElement('canvas')
document.getElementsByClassName(element)
element.className = 'canvas'
el.style.width = '300px'
el.style.color = '#ee33'

console.log(element)
document.addEventListener('DOMContentLoaded', main)

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
