
'use strict';

let tableFromJson = () => {
  // the json data.
  const idbtn = document.getElementById('load');
  idbtn.value = 'Refresh Data';
  const data = [
    {
      
      firstName: 'sachin',
      middleName: 'kumar',
      lastName: 'yadav',
      email: 'sachin.yadav@gmail.com',
      phone: '7247051932',
      role: 'Trainee',
      address: 'Mukherjee Nagar, Dewas',
    },

    {
      
      firstName: 'Sourabh',
      middleName: 'Suresh',
      lastName: 'Jain',
      email: 'sourab.jain@gmail.com',
      phone: '9087248932',
      role: 'Trainee',
      address: 'Sector 71, Noida',
    },
    {
      
      firstName: 'Prakhar',
      middleName: 'Sudhir',
      lastName: 'Bhatele',
      email: 'prakhar.bhatele@gmail.com.com',
      phone: '9321247507',
      role: 'Trainee',
      address: 'Silicon City, Indore',
    },
  ];
  let col = [];
  for (let i = 0; i < data.length; i++) {
    for (let key in data[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  // Create a table.
  const table = document.createElement('table');
  table.setAttribute('id', 'wrapper');
  // Create table header row using the extracted headers above.
  let tr = table.insertRow(-1); // table row.

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement('th'); // table header.
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  function deleteRow(no) {
    document.getElementsByTagName('table').deleteRow(no);
  }
  let rowN = 1;
  let firstName_d;
  let middleName_d;
  let lastName_d;
  let email_d;
  let phone_d;
  let role_d;
  let address_d;
  // add json data to the table as rows.
  for (let i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);
    let id = 'row' + rowN;
    tr.setAttribute('id', id);
    for (let j = 0; j < col.length + 1; j++) {
      let tabCell = tr.insertCell(-1);
      if (data[i][col[j]] === undefined) {
        let button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Edit');
        button.setAttribute('id', `edit-button${rowN}`);
        button.addEventListener('click', function () {
          document.getElementById(
            'edit-button' + data[i]['sno']
          ).style.display = 'none';
          document.getElementById(
            'delete-button' + data[i]['sno']
          ).style.display = 'none';
          document.getElementById(
            'save-button' + data[i]['sno']
          ).style.display = 'block';
          document.getElementById(
            'cancel-button' + data[i]['sno']
          ).style.display = 'block';
          let firstName = document.getElementById(id + '-firstName');
          let middleName = document.getElementById(id + '-middleName');
          let lastName = document.getElementById(id + '-lastName');
          let email = document.getElementById(id + '-email');
          let phone = document.getElementById(id + '-phone');
          let role = document.getElementById(id + '-role');
          let address = document.getElementById(id + '-address');

          let firstName_data = firstName.innerHTML;
          let middleName_data = middleName.innerHTML;
          let lastName_data = lastName.innerHTML;
          let email_data = email.innerHTML;
          let phone_data = phone.innerHTML;
          let role_data = role.innerHTML;
          let address_data = address.innerHTML;

          firstName_d = firstName_data;
          middleName_d = middleName_data;
          lastName_d = lastName_data;
          email_d = email_data;
          phone_d = phone_data;
          role_d = role_data;
          address_d = address_data;

          firstName.innerHTML =
            "<input type='text' id='firstName_text" +
            data[i]['sno'] +
            "' value='" +
            firstName_data +
            "'>";
          lastName.innerHTML =
            "<input type='text' id='lastName_text" +
            data[i]['sno'] +
            "' value='" +
            lastName_data +
            "'>";
          middleName.innerHTML =
            "<input type='text' id='middleName_text" +
            data[i]['sno'] +
            "' value='" +
            middleName_data +
            "'>";
          email.innerHTML =
            "<input type='text' id='email_text" +
            data[i]['sno'] +
            "' value='" +
            email_data +
            "'>";
          phone.innerHTML =
            "<input type='text' id='phone_text" +
            data[i]['sno'] +
            "' value='" +
            phone_data +
            "'>";
          role.innerHTML =
            "<input type='text' id='role_text" +
            data[i]['sno'] +
            "' value='" +
            role_data +
            "'>";
          address.innerHTML =
            "<input type='text' id='address_text" +
            data[i]['sno'] +
            "' value='" +
            address_data +
            "'>";
        });

        tabCell.appendChild(button);
        let saveBtn = document.createElement('input');
        saveBtn.setAttribute('type', 'button');
        saveBtn.setAttribute('value', 'Save');
        saveBtn.setAttribute('class', 'save');
        saveBtn.setAttribute('id', `save-button${rowN}`);
        saveBtn.addEventListener('click', function () {
          let firstName_val = document.getElementById(
            'firstName_text' + data[i]['sno']
          ).value;
          let middleName_val = document.getElementById(
            'middleName_text' + data[i]['sno']
          ).value;
          let lastName_val = document.getElementById(
            'lastName_text' + data[i]['sno']
          ).value;
          let email_val = document.getElementById(
            'email_text' + data[i]['sno']
          ).value;
          let phone_val = document.getElementById(
            'phone_text' + data[i]['sno']
          ).value;
          let role_val = document.getElementById(
            'role_text' + data[i]['sno']
          ).value;
          let address_val = document.getElementById(
            'address_text' + data[i]['sno']
          ).value;
          document.getElementById(id + '-firstName').innerHTML = firstName_val;
          document.getElementById(id + '-middleName').innerHTML =
            middleName_val;
          document.getElementById(id + '-lastName').innerHTML = lastName_val;
          document.getElementById(id + '-email').innerHTML = email_val;
          document.getElementById(id + '-phone').innerHTML = phone_val;
          document.getElementById(id + '-role').innerHTML = role_val;
          document.getElementById(id + '-address').innerHTML = address_val;
          document.getElementById(
            'edit-button' + data[i]['sno']
          ).style.display = 'block';
          document.getElementById(
            'save-button' + data[i]['sno']
          ).style.display = 'none';
          document.getElementById(
            'cancel-button' + data[i]['sno']
          ).style.display = 'none';
          document.getElementById(
            'delete-button' + data[i]['sno']
          ).style.display = 'block';
        });
        tabCell.appendChild(saveBtn);
        let cnclButton = document.createElement('input');
        cnclButton.setAttribute('type', 'button');
        cnclButton.setAttribute('value', 'Cancel');
        cnclButton.setAttribute('class', 'save');
        cnclButton.setAttribute('id', `cancel-button${rowN}`);
        cnclButton.addEventListener('click', function () {
          document.getElementById(id + '-firstName').innerHTML = firstName_d;
          document.getElementById(id + '-middleName').innerHTML = middleName_d;
          document.getElementById(id + '-lastName').innerHTML = lastName_d;
          document.getElementById(id + '-email').innerHTML = email_d;
          document.getElementById(id + '-phone').innerHTML = phone_d;
          document.getElementById(id + '-role').innerHTML = role_d;
          document.getElementById(id + '-address').innerHTML = address_d;
          document.getElementById(
            'delete-button' + data[i]['sno']
          ).style.display = 'block';
          document.getElementById(
            'edit-button' + data[i]['sno']
          ).style.display = 'block';
          document.getElementById(
            'save-button' + data[i]['sno']
          ).style.display = 'none';
          document.getElementById(
            'cancel-button' + data[i]['sno']
          ).style.display = 'none';
        });
        tabCell.appendChild(cnclButton);
        let dltbutton = document.createElement('input');
        dltbutton.setAttribute('type', 'button');
        dltbutton.setAttribute('value', 'Delete');
        dltbutton.setAttribute('id', `delete-button${rowN}`);
        dltbutton.addEventListener('click', function () {
          let row = document.getElementById(id);
          row.outerHTML = '';
        });
        tabCell.appendChild(dltbutton);
      } else {
        tabCell.innerHTML = data[i][col[j]];
        tabCell.setAttribute('id', `row${rowN}-${col[j]}`);
      }
    }

    rowN++;
  }
  // Now, add the newly created table with json data, to a container.
  const divShowData = document.getElementById('showData');
  divShowData.innerHTML = '';
  divShowData.appendChild(table);
};
