const animateBackground = canvas => {
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
};

/* 
React is not aware of the spinner component because it exists as a sibling of the "root" div. 
To be able to control it's display, it must be imepratively accessed in the DOM.
The show and hide functionalities are passed to a top React component as utility functions.
*/

const loader = document.querySelector('.loader');
const showLoader = () => {
  loader.style.display = 'block';
  setTimeout(() => {
    loader.classList.remove('loader--hide')
  }, 10);
};
const hideLoader = () => {
  loader.classList.add('loader--hide');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 200);
};

export {
  animateBackground,
  showLoader,
  hideLoader
};