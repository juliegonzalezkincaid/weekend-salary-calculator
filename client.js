
console.log("working");


let currentIndex=0;

function submitForm(event){
    console.log('submitForm');
    event.preventDefault();


let firstnameVal = document.querySelector('#firstname-input').value;
console.log(firstnameVal);

let lastnameVal = document.querySelector ('#lastname-input').value;
console.log(lastnameVal);

let idVal= document.querySelector ('#id-input').value;
console.log(idVal);

let titleVal= document.querySelector ('#title-input').value;
console.log(titleVal);

let salaryVal=document.querySelector ('#salary-input').value;
console.log(salaryVal);



let addEmployeeTable = document.querySelector ('#employeesData');
addEmployeeTable.innerHTML +=`
<tr>
    <td>${firstnameVal}</td>
    <td>${lastnameVal}</td>
    <td>${idVal}</td>
    <td>${titleVal}</td>
    <td>${salaryVal}</td>
</tr>
`
;
currentIndex += 1;

function removeRow(event){
    event.target.closest('tr').remove();
}
}