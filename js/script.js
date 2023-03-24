//DOM HELPER FUNCTION
const $ = (id) => document.getElementById(id)

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = $('addForm')
let employeeTable = $('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
function updateEmployeeCount() {
    let employeeCount = employeeTable.rows.length-1
    console.log(employeeCount)
    $("empCount").value = (`(${employeeCount})`)
}

window.addEventListener('load', (e) => {
updateEmployeeCount()
})

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = $('id').value
    let employeeName = $('name').value
    let extension = $('extension').value
    let email = $('email').value
    let department = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    function addRow(tableID) {
        let tableReference = (tableID);
        let newRow = tableReference.insertRow(-1);
        
        // CREATE THE DELETE BUTTON
        let deleteBtn = document.createElement('button');
        let deleteBtnText = document.createTextNode('X');
        deleteBtn.appendChild(deleteBtnText);
        deleteBtn.className = 'btn btn-danger btn-sm';

        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let newCellID = newRow.insertCell(0);
        let newCellName = newRow.insertCell(1);
        let newCellExtension = newRow.insertCell(2);
        let newCellEmail = newRow.insertCell(3);
        let newCellDepartment = newRow.insertCell(4);
        let newCellDeleteBtn = newRow.insertCell(5);

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        let newCellIDText = document.createTextNode(employeeID);
        let newCellNameText = document.createTextNode(employeeName);
        let newCellExtensionText = document.createTextNode(extension);
        let newCellEmailText = document.createTextNode(email);
        let newCellDepartmentText = document.createTextNode(department);

        newCellID.appendChild(newCellIDText);
        newCellName.appendChild(newCellNameText);
        newCellExtension.appendChild(newCellExtensionText);
        newCellEmail.appendChild(newCellEmailText);
        newCellDepartment.appendChild(newCellDepartmentText);
        newCellDeleteBtn.appendChild(deleteBtn);
    }
    addRow(employeeTable)
    
    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    updateEmployeeCount()
})

// DELETE EMPLOYEE
employeeTable.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        if(confirm('Are you sure you want to delete this employee?')) {
            employeeTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            updateEmployeeCount()
        }
    }
})
