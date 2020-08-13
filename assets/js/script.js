/* Author: 

*/
var row = null

function onFormSubmit() {
    var formSdata = readFormData();
    insertNewRecord(formSdata);
    cancelform()
}
function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["gender"] = document.getElementById("gender");
    formData["address"] = document.getElementById("address").value;
    return formData;

}

function insertNewRecord(data) {
    if(data.firstname == "" || data.lastname == "" || data.address == "")
     {
        alert("No blank Values allowed");
      }
    else {
        if (terms.checked == true){
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.gender;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = "<button onclick='edit(this)'>Edit</button>";
    cell4 = newRow.insertCell(5);
    cell4.innerHTML ="<button onclick='ondelete(this)'>delete</button>"; 
    alert("thank you")
    } 
    else {
        alert("Please check on Terms to proceed");
     } 
    }
                   
}
function cancelform(){
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("gender").value = "";
    
}

function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("firstname").value = row.cells[0].innerHTML;
    document.getElementById("lastname").value = row.cells[1].innerHTML;
    document.getElementById("address").value = row.cells[2].innerHTML;
    document.getElementById("gender").value = row.cells[3].innerHTML;
}
function ondelete(td){
    if(confirm("are u sure?")){
    row = td.parentElement.parentElement;
    document.getElementById("List").deleteRow(row.rowIndex);
    cancelform();
}
}



















