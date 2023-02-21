
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



let addEmployeeTable = document.querySelector ('#employeesData');
addEmployeeTable.innerHTML +=`
<tr>
    <td>${firstnameVal}</td>
    <td>${lastnameVal}</td>
    <td>${idVal}</td>
    <td>${titleVal}</td>
    <td>${salaryVal}</td>
    <td> <button id="delete" onClick = "removeRow(event)" > Delete</button></td>
    
</tr>
`
;
let monthlyamount= salaryVal / 12;
totalSalary = totalSalary + monthlyamount;
let totalmonthlySpan = document.querySelector ('#totalmonthly')
totalmonthlySpan.innerHTML = totalSalary

//if to compare total salary
if (totalSalary >= 20000) {


// change total monthly span color 
totalmonthlySpan.style.backgroundColor = 'red';
}
}



//? ive been working on my functions to calculate the monthly salary and i feel like im going 
//?in circles
// /let totalSalary += (salary/12);

//  for (let i=0; i<salaryVal.length; i++){
//         totalSalary += salaryVal[i] / 12;
//         return totalSalary
//         console.log(totalSlalary)
//     }

// function backgroundRed (salaryval){
// if (salaryVal =>20000){
// document.querySelector ('#salary-input').style.backgroundColor = 'red';
// } 
// else{
//   document.querySelector ('#salary-input').style.backgroundColor = 'white';
// }
// };

 function removeRow(event){
    event.target.closest('tr').remove();
}