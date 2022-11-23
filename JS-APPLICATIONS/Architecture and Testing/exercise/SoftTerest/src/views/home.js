
const homeSec = document.getElementById('dashboard-holder');
homeSec.remove();

export function showHome(context) {
    context.showSection(homeSec);
}