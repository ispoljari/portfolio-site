import FontFaceObserver from 'fontfaceobserver';

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

const FONT_LATO = new FontFaceObserver('Lato');
const FONT_PLAYFAIR = new FontFaceObserver('Playfair Display');

export {
  showLoader,
  hideLoader,
  FONT_LATO,
  FONT_PLAYFAIR
};