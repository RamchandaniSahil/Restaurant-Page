import { renderNavbar } from './navbar';

function renderContact () {
    renderNavbar();
    const contact = document.createElement('section');

    contact.innerHTML = `
        <main class="contact">
            <h1>Contact Us</h1>
            <h3>For more Details fill below form</h3>
            <div class="contactCard">
                <form action="#" method="post">
                    <label for="input">Full Name</label>
                    <input type="text" name="fullName" id="fullName" required>
                    <label for="input">Email</label>
                    <input type="email" name="email" id="email" required>
                    <label for="input">Message</label>
                    <textarea name="text" id="text" cols="20" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </main>
    `

    return contact;
}

export {renderContact};