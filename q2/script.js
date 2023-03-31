function addRows() {
    let rowsNumber = document.getElementById('txtNumRows').value;
    let table = document.getElementById('sampleTable')
    let lastTableLine = table.children[0].lastElementChild;
    let currentRow = Number(lastTableLine.children[0].innerHTML.split(' ')[1]);
    console.log(currentRow)


    let isValidRowsNumber = rowsNumber >= 1 && rowsNumber <= 10;

    if (!isValidRowsNumber) return alert('Digite apenas números entre 1 e 10!');

    for (let counter = 0; counter < rowsNumber; counter++) {
        currentRow++;        
        let newLine = lastTableLine.cloneNode(true);

        for (let currentCell = 0; currentCell < newLine.children.length; currentCell++) {
            newLine.children[currentCell].innerHTML = `Row ${currentRow} cell ${currentCell + 1}`;
        }

        table.children[0].appendChild(newLine);
    }





}