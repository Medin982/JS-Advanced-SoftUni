import { shonNavBar } from "./navBar";

const homeSection = document.getElementById('home-page');
const container = document.getElementById('container');

export function showHome() {
    container.replaceChildren(homeSection);
    shonNavBar();
}