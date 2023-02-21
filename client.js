
console.log("working");


let totalSalary=0;

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

let totalSalary += (salary/12);


let addEmployeeTable = document.querySelector ('#employeesData');
addEmployeeTable.innerHTML +=`
<tr>
    <td>${firstnameVal}</td>
    <td>${lastnameVal}</td>
    <td>${idVal}</td>
    <td>${titleVal}</td>
    <td>${salaryVal}</td>
    <td> <button onClick = "removeRow(event)" > Delete</button></td>
    
</tr>
`
;
// let mnthlysalaryDiv= document.querySelector ('#mnthlysalary-input').value;
// console.log(mnthlysalary)
//  for (let i=0; i<salaryVal.length; i++){
//         totalSalary += salaryVal[i] / 12;
//         return totalSalary
//         console.log(totalSlalary)
//     }
//if (salaryVal =>$20,000);
    if (totalMonthlyCost >= 20000) {
        monthlySalaryDiv.style.backgroundColor = 'red';
        monthlySalaryDiv.style.color = 'white';

     } 

function removeRow(event){
    event.target.closest('tr').remove()
};
}