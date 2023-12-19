function createCarousel(carouselId, prevButtonId, nextButtonId) {
  const carousel = document.getElementById(carouselId);
  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);

  let currentIndex = 0;
  let translateX = 0;

  // Autoplay configuration
  const autoplayInterval = 3000; // 3 seconds
  let autoplayTimer;

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      showNext();
    }, autoplayInterval);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(${translateX}px)`;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    translateX = -currentIndex * carousel.clientWidth;
    updateCarousel();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    translateX = -currentIndex * carousel.clientWidth;
    updateCarousel();
  }

  // Attach event listeners
  prevButton.addEventListener('click', () => {
    stopAutoplay();
    showPrev();
  });

  nextButton.addEventListener('click', () => {
    stopAutoplay();
    showNext();
  });

  // Start autoplay
  startAutoplay();
}

createCarousel('carousel-slide1', 'prev1', 'next1');
createCarousel('carousel-slide2', 'prev2', 'next2');

// const carousel = document.getElementById('carousel-slide');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// let currentIndexNo = 0;
// let translateX = 0;

// // Autoplay configuration
// const autoplayInterval = 3000; // 3 seconds
// let autoplayTimer;

// function startAutoplay() {
//   autoplayTimer = setInterval(() => {
//     showNext();
//   }, autoplayInterval);
// }

// function stopAutoplay() {
//   clearInterval(autoplayTimer);
// }

// function updateCarousel() {
//   carousel.style.transform = `translateX(${translateX}px)`;
// }

// function showPrev() {
//   currentIndexNo = (currentIndexNo - 1 + carousel.children.length) % carousel.children.length;
//   translateX = -currentIndexNo * carousel.clientWidth;
//   updateCarousel();
// }

// function showNext() {
//   currentIndexNo = (currentIndexNo + 1) % carousel.children.length;
//   translateX = -currentIndexNo * carousel.clientWidth;
//   updateCarousel();
// }

// // Attach event listeners
// prevButton.addEventListener('click', () => {
//   stopAutoplay();
//   showPrev();
// });

// nextButton.addEventListener('click', () => {
//   stopAutoplay();
//   showNext();
// });

// // Start autoplay
// startAutoplay();


// const slides = document.querySelectorAll(".slide");
// let counter = 1;
// // console.log(slides);
// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const goPrev = () => {
//   counter--;
//   slideImage();
// };

// const goNext = () => {
//   counter++;
//   slideImage();
// };

// const slideImage = () => {
//   slide.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// };



var tabButtons = document.querySelectorAll(".tablinks");

function updateTabStyles() {
  // Get the window width
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Loop through each tab button
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
      var tabName = this.dataset.tab;
      var tabContent = document.getElementById(tabName);
      var allTabContent = document.querySelectorAll(".tabcontent");
      var allTabButtons = document.querySelectorAll(".tablinks");

      for (var j = 0; j < allTabContent.length; j++) {
        allTabContent[j].style.display = "none";
      }

      for (var k = 0; k < allTabButtons.length; k++) {
        allTabButtons[k].classList.remove("active");
      }

      // Check window width and apply appropriate display style
      if (windowWidth <= 767) {
        tabContent.style.display = "inline-block";
      } else {
        tabContent.style.display = "flex";
      }

      this.classList.add("active");
    });
  }
}

// Initial call to set the initial display style
updateTabStyles();

// Event listener to update display style on window resize
window.addEventListener('resize', updateTabStyles);

// Trigger a click on the first tab button
document.querySelector(".tablinks").click();


// const slideshowElements = document.querySelectorAll(".slideshow-element");

// let countElements = 1;

// setInterval(() => {
//     countElements ++;
//     let currentElement = document.querySelector(".current");

//     currentElement.classList.remove("current");

//     if (countElements > slideshowElements.length) {
//         slideshowElements[0].classList.add("current");
//         countElements = 1;
//     } else{
//         currentElement.nextElementSibling.classList.add("current");
//     }
// }, 2000);

var tabButtons = document.querySelectorAll(".tablinks");

    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener("click", function () {
        var tabName = this.dataset.tab;
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll(".tabcontent");
        var allTabButtons = document.querySelectorAll(".tablinks");

        for (var j = 0; j < allTabContent.length; j++) {
          allTabContent[j].style.display = "none";
        }

        for (var k = 0; k < allTabButtons.length; k++) {
          allTabButtons[k].classList.remove("active");
        }
        
        tabContent.style.display = "flex";
        this.classList.add("active");
      });
    }

    document.querySelector(".tablinks").click();

// card slider 

const cardSlider = document.getElementById('cardSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const cards = document.querySelectorAll('.mini-card');
    const totalCards = cards.length;

    function showCard(index) {
        const cardWidth = cards[0].offsetWidth;
        cardSlider.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    function handlePrev() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        showCard(currentIndex);
    }

    function handleNext() {
        currentIndex = (currentIndex + 1) % totalCards;
        showCard(currentIndex);
    }

    function startAutoplaySys() {
        setInterval(() => {
            handleNext();
        }, 3000); // Change 3000 to the desired autoplay interval in milliseconds
    }
    startAutoplaySys();

    prevBtn.addEventListener('click', handlePrev);
    nextBtn.addEventListener('click', handleNext);