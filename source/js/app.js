import '../js/index';
import '../js/swiper';
import {workersSlider} from './workers-slider';
import {modal} from './modal';
import {mask} from './imask';
import {mainMenu} from './menu';

window.addEventListener('DOMContentLoaded', () => {
  modal();
  mainMenu();
  workersSlider();
  mask();
});

