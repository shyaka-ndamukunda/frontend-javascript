interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith', 
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const container = document.createElement('div');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create header row
  const headerRow = document.createElement('tr');
  ['First Name', 'Location'].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Create student rows
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
  document.body.appendChild(container);
}

// Render table when page loads
document.addEventListener('DOMContentLoaded', renderTable);