export function initialize(views) {
    const main = document.getElementById('main-View');
    document.querySelector('nav').addEventListener('click', onNavigation);

    const context = {
        showSection,
        goTo
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


    function goTo(name) {
        const handler = views[name];
        if (typeof (handler) == 'function') {
            handler(context);
        }
    }

    return context;
}