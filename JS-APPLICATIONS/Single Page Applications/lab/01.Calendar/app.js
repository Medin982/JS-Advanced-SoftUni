
const body = document.querySelector('body');
Array.from(body.children)
    .forEach((s, i) => {
        if (i != 0) {
            s.style.display = 'none';
        }
    });
const years = document.getElementById('years');
[...years.getElementsByClassName('year')]
    .forEach(d => d.addEventListener('click', loadYear));

function loadYear(event) {
    const year = event.target.children[0].textContent;
    hideYear(document.querySelectorAll('section[style="display: block;"]'));
    let yearsMonths = undefined;
    switch (year) {
        case '2020':
            yearsMonths = document.getElementById('year-2020');
            yearsMonths.style.display = 'block';
            break;
        case '2021':
            yearsMonths = document.getElementById('year-2021');
            yearsMonths.style.display = 'block';
            break;
        case '2022':
            yearsMonths = document.getElementById('year-2022');
            yearsMonths.style.display = 'block';
            break
        case '2023':
            yearsMonths = document.getElementById('year-2023');
            yearsMonths.style.display = 'block';
            break;
    }
    [...yearsMonths.getElementsByClassName('day')]
        .forEach(m => m.addEventListener('click', (event) => { loadMonth(event, year) }));
}

function loadMonth(event, year) {
    const month = event.target.children[0].textContent;
    let monthDays = undefined;
    hideMonth(document.querySelectorAll('section[style="display: block;"]')[1]);
    switch (month) {
        case 'Jan':
            monthDays = document.getElementById(`month-${year}-1`);
            monthDays.style.display = 'block';
            break;
        case 'Feb':
            monthDays = document.getElementById(`month-${year}-2`);
            monthDays.style.display = 'block';
            break;
        case 'Mar':
            monthDays = document.getElementById(`month-${year}-3`);
            monthDays.style.display = 'block';
            break;
        case 'Apr':
            monthDays = document.getElementById(`month-${year}-4`);
            monthDays.style.display = 'block';
            break;
        case 'May':
            monthDays = document.getElementById(`month-${year}-5`);
            monthDays.style.display = 'block';
            break;
        case 'Jun':
            monthDays = document.getElementById(`month-${year}-6`);
            monthDays.style.display = 'block';
            break;
        case 'Jul':
            monthDays = document.getElementById(`month-${year}-7`);
            monthDays.style.display = 'block';
            break;
        case 'Aug':
            monthDays = document.getElementById(`month-${year}-8`);
            monthDays.style.display = 'block';
            break;
        case 'Sept':
            monthDays = document.getElementById(`month-${year}-9`);
            monthDays.style.display = 'block';
            break;
        case 'Oct':
            monthDays = document.getElementById(`month-${year}-10`);
            monthDays.style.display = 'block';
            break;
        case 'Nov':
            monthDays = document.getElementById(`month-${year}-11`);
            monthDays.style.display = 'block';
            break;
        case 'Dec':
            monthDays = document.getElementById(`month-${year}-12`);
            monthDays.style.display = 'block';
            break;
    }
}

function hideMonth(monthELement) {
    if (monthELement) {
        monthELement.style.display = 'none';
    }
}

function hideYear(yearELement) {
    if (yearELement.length) {
        yearELement.forEach(e => e.style.display = 'none');
    }
}