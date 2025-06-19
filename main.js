const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const auto = false
const intervalTime = 5000
let slideInterval

const nextSlide = () => {
    const current = document.querySelector('.current') // GET CURRENT CLASS
    current.classList.remove('.current') // REMOVE CURRENT CLASS
    // CHECK FOR NEXT SLIDE
    if(current.nextElementSibling){
        // ADD CURRENT TO NEXT SIBLING
        current.nextElementSibling.classList.add('current')
    } else{
        // ADD CURRENT TO START
        slides[0].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}

const prevSlide = () => {
    const current = document.querySelector('.current') // GET CURRENT CLASS
    current.classList.remove('current') // REMOVE CURRENT CLASS
    // CHECK FOR PREVIOUS SLIDE
    if(current.previousElementSibling){
        // ADD CURRENT TO PREVIOUS SIBLING
        current.previousElementSibling.classList.add('current')
    } else{
        // ADD CURRENT TO END
        slides[slides.length - 1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}

// BUTTON EVENTS
next.addEventListener('click', e => {
    nextSlide()
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})
prev.addEventListener('click', e => {
    prevSlide()
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})

// AUTO SLIDE
if(auto){
    // RUN NEXT SLIDE AT INTERVAL
    slideInterval = setInterval(nextSlide, intervalTime)
}