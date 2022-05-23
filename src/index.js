import Img from './asset/pizza.jpg'
import './style.css';

const body = document.querySelector('body').style.background = 'grey';

const nav = document.createElement('div');
nav.innerHTML = `<div class= "navbar" style= "background: red;">
  <nav>
    <ul>
      <li>Home</li>
      <li>Product</li>
      <li>Contact-us</li>
    <ul>
  </nav>
</div>`;

body.append(nav);


