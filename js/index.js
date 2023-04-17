const arrayForObserving = document.querySelectorAll('.for-observer')

let indexOf = 0

const observer = new IntersectionObserver(observing = (observingElement) => {
    observingElement.forEach(element => {
        if (element.isIntersecting) {
            arrayForObserving[indexOf].classList.add('smooth-appearance')
            indexOf++
        }
    });
})

arrayForObserving.forEach((entry) => observer.observe(entry))
