# Simple Employee Management App

A simple web application that allows users to add and manage employees. The app provides a form to input employee details, displays the list of added employees, and allows users to delete entries.

## Features
- User-friendly form for inputting employee details: name, profession, and age.
- Displays the current count of added employees.
- Shows error messages in red when required fields are empty.
- Displays success messages in green when an employee is added successfully.
- Allows deletion of employees from the list.

## Functionality
1. **Form Inputs**:
   - The form contains three required fields: 
     - Name
     - Profession
     - Age
   - A button to add employees.

2. **Employee Array**:
   - Employees are stored in an array with the following structure:
     ```javascript
     [{ id: 1, name: "jack", profession: "developer", age: 20 }, { id: 2, name: "john", profession: "admin", age: 28 }, ...]
     ```
   - Each employee is assigned a unique ID automatically.

3. **Adding Employees**:
   - On clicking the "Add Employee" button, the employee details are validated and appended to the array.
   - A success message is displayed if the employee is added successfully.

4. **Displaying Employees**:
   - The app maps the array of added employees and displays them under the "Added Employees" heading.

5. **Deleting Employees**:
   - Each employee entry has a "Delete" button.
   - Clicking this button removes the specific employee from the array and updates the UI accordingly.



## Relevant Links
- Live Demo: [Employee Management App](https://imsunokdir.github.io/Manage-Employee/)


