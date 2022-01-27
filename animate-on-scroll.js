// DEBOUNCE: We will run this function at most X amount of frequency
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
    // slide in when halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    console.log(slideInAt);
    
    // for scrolling back up from bottom of page
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
    }
    else {
        sliderImage.classList.remove('active');
    }
    });
}

window.addEventListener('scroll', debounce(checkSlide));