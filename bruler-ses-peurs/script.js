Splitting({
	whitespace: true
})


const doc = window.document,
  contextLoop = doc.querySelector('.js-loop'),
  clones = contextLoop.querySelectorAll('.is-clone'),
  section = contextLoop.querySelectorAll('section')
  
let scrollHeight = 0,
  scrollPos = 0,
  disableScroll = false,
  clonesHeight = 0,
  i = 0;

function getScrollPos () {
  return (contextLoop.pageYOffset || contextLoop.scrollTop) - (contextLoop.clientTop || 0);
}

function setScrollPos (pos) {
    if(contextLoop) {
        contextLoop.scrollTop = pos;
    }
}

function getClonesHeight () {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc () {
    console.log(section)
    section.forEach(element => {

        const title = element.querySelector('.title')
        console.log(title.style.clientHeight)

        element.style.height = title.style.offsetHeight + 'px'
    })

  scrollPos = getScrollPos();
  scrollHeight = contextLoop.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
    console.log('scroll update')
  if (!disableScroll) {

    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {

  reCalc();
  
  contextLoop.addEventListener('scroll', function () {
    console.log('scroll')
    window.requestAnimationFrame(scrollUpdate);
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}

