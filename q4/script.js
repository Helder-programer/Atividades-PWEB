class Extract {
    #category = '';
    #value = 0;
    #date = 0;

    constructor(category, value, date) {
        this.#category = category;
        this.#value = value;
        this.#date = date;
    }

    getCategory() {
        return this.#category;
    }

    getValue() {
        return this.#value;
    }

    getDate() {
        return this.#date;
    }    
}


let database = [];

function addExtract(event) {
    event.preventDefault();
    let categoryInput = document.getElementById('categories');
    let valueInput = document.getElementById('value');
    let dateInput = document.getElementById('date');
    let tableBody = document.getElementById('extracts').children[2];

    let category = categoryInput.value,
        value = Number(valueInput.value),
        date = dateInput.value
        
        console.log(date);
    let isValidValues = category != '' && value != 0 && date != '';

    if (!isValidValues) return alert('Digite apenas valores válidos!');



    const newExtract = new Extract(category, value, date);
    
    let newRow = document.createElement('tr');
    let datas = [category, value, date];

    datas.forEach(currentColumn => {
        let newData = document.createElement('td');
        newData.textContent = currentColumn;
        newRow.appendChild(newData);
    });
    
    database.push(newExtract);
    localStorage.setItem('database', database);
    tableBody.appendChild(newRow);
    
}