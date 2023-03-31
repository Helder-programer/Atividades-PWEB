const isValidDate = (day, month, year) => {
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // let date = new Date();

    let isValidYear = year >= 1000 || year <= date.getFullYear();
    let isValidMonth = month >= 1 && month <= 12;

    if (!(isValidYear && isValidMonth)) return false;

    let isLeadYear = (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0));

    if (isLeadYear) monthLength[1] = 29;

    let isValidDay = day > 0 && day <= monthLength[month - 1];

    if (!isValidDay) return false;

    return true;

};

let database = [];

function addExtract(event) {
    event.preventDefault();
    let categoryInput = document.getElementById('categories');
    let valueInput = document.getElementById('value');
    let dayInput = document.getElementById('day');
    let monthInput = document.getElementById('month');
    // let yearInput = document.getElementById('year');
    let tableBody = document.getElementById('extracts').children[2];


    let category = categoryInput.value,
        value = Number(valueInput.value.replace(',', '.')),
        day = Number(dayInput.value),
        month = Number(monthInput.value),
        year = 2023,
        date = '';

    let isValidValues = category != '' && value > 0 && isValidDate(day, month, 2023);
    if (!isValidValues) return alert('Digite apenas valores válidos!');

    date = new Date(year, month - 1, day);
    const newExtract = { category, value, date };
    database.push(newExtract);


    date = new Date(year, month - 1, day).toLocaleDateString('BR');

    let newRow = document.createElement('tr');
    let datas = [category, value, date];

    datas.forEach(currentColumn => {
        let newData = document.createElement('td');
        newData.textContent = currentColumn;
        newRow.appendChild(newData);
    });

    localStorage.setItem('database', JSON.stringify(database));
    tableBody.appendChild(newRow);
}