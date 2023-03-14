
const form = document.getElementById('registration-form');
const entriesTable = document.getElementById('entries-table');
const entriesTableBody = document.getElementById('entries-table-body');

// handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dateOfBirth = document.getElementById('date-of-birth').value;
  const acceptTerms = document.getElementById('accept-terms').checked;
  
  // add entry to table
  const newRow = entriesTableBody.insertRow(-1);
  const nameCell = newRow.insertCell(0);
  const emailCell = newRow.insertCell(1);
  const passwordCell = newRow.insertCell(2);
  const dateOfBirthCell = newRow.insertCell(3);
  const acceptTermsCell = newRow.insertCell(4);
  nameCell.textContent = name;
  emailCell.textContent = email;
  passwordCell.textContent = password;
  dateOfBirthCell.textContent = dateOfBirth;
  acceptTermsCell.textContent = acceptTerms ? 'Yes' : 'No';
  
  // show table if it's hidden
  if (entriesTable.classList.contains('hidden')) {
    entriesTable.classList.remove('hidden');
  }
  
  // reset form
  form.reset();
});