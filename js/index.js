const arrayForObserving = document.querySelectorAll('.for-observer')

let indexOf = 0

const observer = new IntersectionObserver(observing = (observingElement) => {
    observingElement.forEach(element => {
        if (element.isIntersecting) {
            switch (indexOf) {
                case 0:
                    arrayForObserving[0].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 1:
                    arrayForObserving[1].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 2:
                    arrayForObserving[2].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 3:
                    arrayForObserving[3].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 4:
                    arrayForObserving[4].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 5:
                    arrayForObserving[5].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 6:
                    arrayForObserving[6].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 7:
                    arrayForObserving[7].classList.add('smooth-appierence')
                    indexOf++
                    break
                case 8:
                    arrayForObserving[8].classList.add('smooth-appierence')
                    indexOf++
                    break
            }
        }
    });
})

arrayForObserving.forEach((entry) => observer.observe(entry))
