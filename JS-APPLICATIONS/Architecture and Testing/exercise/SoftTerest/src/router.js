export function initialize(views) {
    const main = document.getElementById('main-View');
    document.querySelector('nav').addEventListener('click', onNavigation);

    const context = {
        showSection,
        goTo,
        updateNav
    }

    function showSection(section) {
        main.replaceChildren(section);
    }

    function onNavigation(event) {
        event.preventDefault();
        const target = event.target;

        if (target.tagName === "A") {
            const name = target.textContent;
            goTo(name);
        } else if (target.tagName === 'IMG') {
            goTo('Home');
        }
    }


    function goTo(name, event) {
        const handler = views[name];
        if (typeof (handler) == 'function') {
            if (name === 'Details') {
                handler(context, event);
            }
            
            handler(context);
        }
    }

    function updateNav() {
        const user = sessionStorage.user;
        if (user) {
            [...document.querySelectorAll('.guest')]
                .forEach(a => a.style.display = 'none');

            [...document.querySelectorAll('.user')]
                .forEach(a => a.style.display = 'inline-block');
        } else {
            [...document.querySelectorAll('.guest')]
                .forEach(a => a.style.display = 'inline-block');

            [...document.querySelectorAll('.user')]
                .forEach(a => a.style.display = 'none');
        }

    }

    return context;
}