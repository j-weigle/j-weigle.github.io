window.onload = setActiveNavOnScrollPosition();

window.addEventListener('scroll', debounce(() => {
  setActiveNavOnScrollPosition();
}, 300));

function smoothScrollTo(elementId) {
  let elementY = document.getElementById(elementId).offsetTop;

  let windowWidth = window.matchMedia('(min-width: 736px) and (max-width: 1280px)');
  if (windowWidth.matches) {
    let contentWrapper = document.querySelector('.content-wrapper');
    if (contentWrapper) {
      let marginTop = parseFloat(window.getComputedStyle(contentWrapper, null).getPropertyValue('margin-top'));
      elementY -= marginTop;
    }
  }

  window.scroll({
    top: elementY,
    behavior: 'smooth'
  });
}

function setActiveNav(elemA) {
  let navi = document.querySelector('#navigation');
  let naviItems = Array.from(navi.getElementsByTagName('li'));
  for (let i in naviItems) {
    if (naviItems[i] === elemA.parentElement) {
      naviItems[i].classList.add('active');
    } else {
      naviItems[i].classList.remove('active');
    }
  }
}

function setActiveNavOnScrollPosition () {
  let navi = document.querySelector('#navigation');
  let naviItems = Array.from(navi.getElementsByTagName('li'));
  let sections = Array.from(document.getElementsByClassName('content-section'));
  if (naviItems.length !== sections.length) return;

  let rectYVals = new Array(sections.length);
  for (let i in sections) {
    rectYVals[i] = Math.abs(sections[i].getBoundingClientRect().y);
  }
  let minVal = Math.min(...rectYVals);
  for (let i in rectYVals) {
    if (minVal === rectYVals[i]) {
      naviItems[i].classList.add('active');
    } else {
      naviItems[i].classList.remove('active');
    }
  }
}

function debounce (callback, wait) {
  let timeout;
  return (...args) => {
    if (timeout) { clearTimeout(timeout) }
    timeout = setTimeout(() => callback.apply(this, args), wait);
  }
}