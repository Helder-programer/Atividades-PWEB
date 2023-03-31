const database = JSON.parse(localStorage.getItem('database'));
let newElement = '';

const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
})

const calculateTotalExtracts = () => {
    let totalValue = 0;

    database.forEach(currentExtract => {
        totalValue += currentExtract.value;
    });

    return totalValue;
}

const calculateExtractsPerMonth = () => {
    const months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    database.forEach(currentExtract => {
        let date = new Date(currentExtract.date);
        months[date.getMonth()] = currentExtract.value;
    });

    return months;
}

const calculateExtractsPerCategory = () => {
    const categories = {};

    //CRIAR CATEGORIAS
    database.forEach(currentExtract => {
        categories[currentExtract.category] = 0;
    });

    database.forEach(currentExtract => {
        categories[currentExtract.category] += currentExtract.value;
    });

    return categories;
}



















function showCalcExtracts() {
    const totalValueDiv = document.getElementById('total-value');
    const totalPerMonthsDiv = document.getElementById('months');
    const totalPerCategoriesDiv = document.getElementById('categories');

//TOTAL GERAL
    newElement = document.createElement('h1');
    newElement.textContent = `Total: ${formatter.format(calculateTotalExtracts())}`;
    totalValueDiv.appendChild(newElement);

//TOTAL POR MÊS
    let monthsValue = calculateExtractsPerMonth();

    monthsValue.forEach((currentMonth, index) => {
        newElement = document.createElement('h3');

        let valueFormatted = formatter.format(currentMonth);

        newElement.textContent = `Total do mês ${index + 1}: ${valueFormatted}`;
        totalPerMonthsDiv.appendChild(newElement);
    });


//TOTAL POR CATEGORIA
    let categoriesValues = calculateExtractsPerCategory();

    for (let currentCategory in categoriesValues) {
        newElement = document.createElement('h3');

        let valueFormatted = formatter.format(categoriesValues[currentCategory]);

        newElement.textContent = `Total de gastos com ${currentCategory}: ${valueFormatted}`;

        totalPerCategoriesDiv.appendChild(newElement);
    }

    localStorage.clear();
}



document.addEventListener('DOMContentLoaded', showCalcExtracts);