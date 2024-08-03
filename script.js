let id = 1;
let addEmp = document.querySelector(".add-emp");
let warningMessage = document.querySelector(".warning-message");
let deleteBtn = document.querySelector(".delete-btn");
let zeroEmpWarning = document.querySelector(".zero-emp-message");
let empArray = [];
let names, profession, age;

function handleSubmit(event) {
  event.preventDefault();

  names = document.getElementById("name").value;
  profession = document.getElementById("profession").value;
  age = document.getElementById("age").value;

  if (!names || !profession || !age) {
    warningMessage.innerText =
      "Error: Please Make sure All the fileds are filled before adding in the employees!";
    warningMessage.className = "warning-message";
    // setTimeout(() => {
    //   warningMessage.innerText = "";
    //   warningMessage.className = "";
    // }, 4000);
    return;
  }
  // console.log(name, profession, age);
  let empDetails = {
    id: id++,
    name: names,
    profession: profession,
    age: age,
  };
  empArray.push(empDetails);
  console.log(empArray);
  updateEmployees();
  event.target.reset();
  warningMessage.innerText = "Suceess: Employee Added!";
  warningMessage.className = "success-message";

  //   setTimeout(() => {
  //     warningMessage.className = "";
  //     warningMessage.innerText = "";
  //   }, 2000);

  checkEmpLength();
}

function updateEmployees() {
  addEmp.innerHTML = "";
  empArray.forEach((item) => {
    const row = document.createElement("row");
    row.classList.add("row");
    row.innerHTML = `
            <div class="row">
            <div class="emp-cell">
              <div class="emp-id">ID:${item.id}</div>
              <div class="emp-name">Name: ${item.name}</div>
              <div class="emp-prof">Profession: ${item.profession}</div>
              <div class="emp-age">Age: ${item.age}</div>
            </div>
            <div class="delete-btn"><button onClick="handleDelete(${item.id})">Delete</button></div>
          </div>
        `;
    addEmp.append(row);
  });
  checkEmpLength();
}

function handleDelete(id) {
  empArray = empArray.filter((emp) => emp.id !== id);
  updateEmployees();
  checkEmpLength();
  warningMessage.className = "";
  warningMessage.innerText = "";
}

function checkEmpLength() {
  if (empArray.length != 0) {
    zeroEmpWarning.style.display = "none";
  } else if (empArray.length === 0) {
    zeroEmpWarning.style.display = "block";
  }
  console.log(empArray.length);
}
