const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

   
const pular = () => {
    mario.classList.add('pulo')
    
    setTimeout(() =>{mario.classList.remove('pulo')}, 500)
}

const colisao = setInterval(() =>{
    const posicaoCano = cano.offsetLeft
    const posicaoMario =  +window.getComputedStyle(mario).bottom.replace('px','')
    if(posicaoCano <= 120 && posicaoCano>0 && posicaoMario < 80){
        cano.style.animation = 'none'
        cano.style.left = `${posicaoCano}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        mario.src = 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px' 

        clearInterval(colisao)
    }
}, 10)


document.addEventListener('keydown', pular)
