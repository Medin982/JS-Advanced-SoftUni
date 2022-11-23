
const homeSec = document.getElementById('home-View');
homeSec.remove();

export function showHome(context) {
    context.showSection(homeSec);
    context.updateNav();
}