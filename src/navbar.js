const content = document.getElementById('content');
function renderNavbar() {
    const navbar = document.createElement('section');
    navbar.innerHTML = `
        <nav>
            <ul>
                <li id="home"><a>Home</a></li>
                <li id="menu"><a>Menu</a></li>
                <li id="contact"><a>Contact</a></li>
            </ul>
        </nav>
    `

    return navbar;
}

export {renderNavbar};