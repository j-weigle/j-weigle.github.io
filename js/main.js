function smoothScrollTo(elementId) {
  let element = document.getElementById(elementId).offsetTop;

  let windowWidth = window.matchMedia('(min-width: 736px) and (max-width: 1280px)');
  if (windowWidth.matches) {
    let contentWrapper = document.getElementsByClassName('content-wrapper');
    if (contentWrapper.length > 0) {
      let marginTop = parseFloat(window.getComputedStyle(contentWrapper[0], null).getPropertyValue('margin-top'));
      element -= marginTop;
    }
  }

  window.scroll({
    top: element,
    behavior: 'smooth'
  });
}
