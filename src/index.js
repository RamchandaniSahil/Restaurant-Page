import _ from 'lodash';
import '../dist/style.css';
import {renderNavbar} from './navbar';
import {renderHome} from './home';
import { renderMenu } from './menu';
import { renderContact } from './contact';

const content = document.getElementById('content');
content.appendChild(renderNavbar());
content.appendChild(renderHome());

function changeTabs () {
    const home = document.getElementById('home');
    home.style.borderBottom = '3px solid white';

    home.addEventListener ('click', () => {
        content.removeChild(content.lastElementChild);
        menu.style.borderBottom = 'none';
        contact.style.borderBottom = 'none';
        home.style.borderBottom = '3px solid white';
        content.appendChild(renderHome());
    });

    
    const menu = document.getElementById('menu');
    menu.addEventListener ('click', () => {
        content.removeChild(content.lastElementChild);
        home.style.borderBottom = 'none';
        contact.style.borderBottom = 'none';
        menu.style.borderBottom = '3px solid white';
        content.appendChild(renderMenu());
    });

    const contact = document.getElementById('contact');
    contact.addEventListener('click', () => {
        content.removeChild(content.lastElementChild);
        home.style.borderBottom = 'none';
        menu.style.borderBottom = 'none';
        contact.style.borderBottom = '3px solid white';
        content.appendChild(renderContact());
    });

    const orderNow = document.querySelector('.btn');
    orderNow.addEventListener('click', () => {
        content.removeChild(content.lastElementChild);
        home.style.borderBottom = 'none';
        contact.style.borderBottom = 'none';
        menu.style.borderBottom = '3px solid white';
        content.appendChild(renderMenu());
    })
}
changeTabs()