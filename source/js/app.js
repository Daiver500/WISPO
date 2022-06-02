import '../js/index';
import '../js/swiper';
import {workersSlider} from './workers-slider';
import {modal} from './modal';
//import {mainMenu} from './menu';
//import {tabs} from './tabs';

window.addEventListener('DOMContentLoaded', () => {
  modal();
  //mainMenu();
  //tabs();
  workersSlider();
});

