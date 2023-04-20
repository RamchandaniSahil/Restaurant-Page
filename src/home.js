import { renderNavbar } from './navbar';

const content = document.getElementById('content');
function renderHome() {
    renderNavbar();
    const home = document.createElement('section');
    home.innerHTML = `
        <main class="home">
            <div class="image">
                <img src="./images/vegetables-set-left-black-slate.jpg" alt="">
            </div>
            <div class="homeCard">
                <h1>Eat Your Favourite Fast-Food</h1>
                <div class="timing">
                    <h3>Opening Time:- </h3>
                    <div class="daily-time">
                    <p class="firstPara">Monday-Friday: 9am - 9pm</p>
                    <p>Saturday-Sunday: 9am - 11pm</p>
                    </div>
                </div>
                <button class="btn">Order Now</button>
            </div>
        </main>
    `

    return home;
}


export {renderHome};