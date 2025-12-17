const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      //... Se pueden agregar más registros de empleados aquí
];

function getEmployeeData(employee){
return  `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
}


// Función para mostrar todos los empleados
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => getEmployeeData(employee))
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => getEmployeeData(employee)).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function displayEmployeeInfo(foundEmployee){
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = getEmployeeData(foundEmployee);
        }
    else{
          document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado';
    }
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      displayEmployeeInfo(foundEmployee) 
}

function findSpecialization(specialization){
    const foundEmployee = employees.find(employee => employee.specialization === specialization);
    displayEmployeeInfo(foundEmployee)
}