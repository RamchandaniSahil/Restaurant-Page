import { renderNavbar } from './navbar';

const content = document.getElementById('content');
function renderMenu () {
    renderNavbar();
    const menu = document.createElement('section');
    menu.innerHTML = `
        <main class="menu">
            <h1>Menu</h1>
            <div class="main">

                <div class="menuCard">
                    <h2>Burger</h2>
                    <p>Buns, patty, tomato, onions, lettuce, cheese and our secret family recipe.</p>
                    <img src="./images/burger (1).png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Pizza</h2>
                    <p>Pizza with tomato, onions and cheese. you can add on your topping like corn, mashrooms.</p>
                    <img src="./images/pizza.png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Combo</h2>
                    <p>In this you get 3 thing together Burger, Fries and Cock with extra souses.</p>
                    <img src="./images/burger.png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Burger with Cock</h2>
                    <p>In this You get a Large Cock with your Burger.</p>
                    <img src="./images/burger (2).png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Pizza with Cock</h2>
                    <p>In this You get a Large Cock with your Burger.</p>
                    <img src="./images/pizza (1).png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Colddrink</h2>
                    <p>You get Your Favourite Colddrink lick Cock, Thums-Up, Sprite, Maza etc...</p>
                    <img src="./images/drink.png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Fruit Juice</h2>
                    <p>You get Juice of different Freash Fruits like Waterlemon, Banana, Orange, Mango</p>
                    <img src="./images/drink.png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Noodles</h2>
                    <p>You get your favourite Noodles and get in different flavour of Noodles.</p>
                    <img src="./images/dish.png" alt="">
                </div>
                <div class="menuCard">
                    <h2>Burrito</h2>
                    <p>You get your Favourite Burrito.</p>
                    <img src="./images/burrito.png" alt="">
                </div>
            </div>
        </main>
    `

    return menu;
}

export {renderMenu};