
const dashboardSec = document.getElementById('dashboard-holder');
dashboardSec.remove();

export function showDashboard(context) {
    context.showSection(dashboardSec);
}