fetch("https://dummy.restapiexample.com/api/v1/employees")
.then(res=>res.json())
.then(res=>res.data.forEach(employer => {
    let employerData =
                     `<tr>
                        <th scope="row" class="e-id">${employer.id}</th>
                        <td>${employer.employee_name}</td>
                        <td>${employer.employee_age}</td>
                        <td>${employer.employee_salary} ₽</td>
                    </tr>`;
    let load = document.querySelector(".load");
    let table = document.querySelector(".table");
    let boss = document.querySelector(".boss");
    let tbody = document.querySelector("tbody");

    load.addEventListener("click",function(){
        load.classList.add("d-none");
        table.classList.remove("d-none");
        boss.classList.remove("d-none");
        
        //selecting table body for insertion
        tbody.innerHTML += employerData;
    })

    //deleting
    let fire = document.querySelector(".fire");
    let inputId = document.querySelector("input");
    inputId.addEventListener("change",function(){
        fire.addEventListener("click",function(){
            if(inputId.value == employer.id){
                tbody.deleteRow(inputId.value-1);
                inputId.value = "";
            }
        })
    })
}))
