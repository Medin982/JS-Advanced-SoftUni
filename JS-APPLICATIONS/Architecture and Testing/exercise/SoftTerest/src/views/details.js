
const detailsSec = document.getElementById('details-View');
detailsSec.remove();

export function showDetails(context) {
    context.showSection(detailsSec);
}