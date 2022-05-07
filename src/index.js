// import Img from './asset/food.jpg';
import Img from './asset/food.jpg'

const color = document.querySelector('body');

const banner = document.createElement('div');
banner.innerHTML = `<img src=${Img}>`;
color.appendChild(banner);


