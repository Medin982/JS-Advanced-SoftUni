
const createSec = document.getElementById('create-View');
createSec.remove();

export function showCreate(context) {
    context.showSection(createSec);
}