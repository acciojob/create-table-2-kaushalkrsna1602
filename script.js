function createTable() {
    
    const table = document.getElementById('myTable');
    
    
    table.innerHTML = '';

    
    const rows = parseInt(prompt('Input number of rows'), 10);
    const cols = parseInt(prompt('Input number of columns'), 10);

    
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(); 
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell(); 
            cell.textContent = `Row-${i} Column-${j}`; 
        }
    }
}
