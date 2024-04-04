const form = document.getElementById('form');
const userDetails = document.getElementById('users');

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        const data = { name, email, phone };
        axios.post('https://crudcrud.com/api/07e49f68aa0e4a97bb3d99ab509109b1/myData', data)
            .then(res => {
                console.log('Data Successfully sent', res.data);
                data._id = res.data._id;

                // Clear the user details form
                form.reset();

                // Update or add user details in UI
                const existingUser = userDetails.querySelector(`[data-user-id="${data._id}"]`);
                if (existingUser) {
                    existingUser.textContent = `Name: ${data.name}, EmailID: ${data.email}, Phone: ${data.phone}`;
                } else {
                    displayUserData(data);
                }
            })
            .catch(err => console.error('Error:in sending data', err));
    } else {
        console.error('Error: Please fill in all fields');
    }
}

function displayUserData(user) {
    const details = document.createElement('li');
    details.textContent = `Name: ${user.name}, EmailID: ${user.email}, Phone: ${user.phone}`;
    details.setAttribute('data-user-id', user._id);
    userDetails.appendChild(details);

    // Add edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edt-btn';
    editBtn.textContent = 'Edit';
    editBtn.style.backgroundColor = 'lightBlue';
    editBtn.style.border = '2px solid bisque';
    editBtn.style.borderRadius = '5px';
    details.appendChild(editBtn);

    // Add event listener for edit button
    editBtn.addEventListener('click', () => {
        const editedName = prompt('Enter Your Name:');
        const editedEmail = prompt('Enter your EmailId:');
        const editedPhone = prompt('Enter your contact Number:');

        if (editedName !== null && editedEmail !== null && editedPhone !== null) {
            const newData = {
                name: editedName || user.name,
                email: editedEmail || user.email,
                phone: editedPhone || user.phone
            };
            editUser(user._id, newData, details);
        }
    });
}

function editUser(userId, newData, userItem) {
    axios.put(`https://crudcrud.com/api/07e49f68aa0e4a97bb3d99ab509109b1/myData/${userId}`, newData)
        .then(res => {
            console.log('User data updated', res.data);

            // Update the user details in the UI
            userItem.textContent = `Name: ${newData.name}, EmailID: ${newData.email}, Phone: ${newData.phone}`;

            // Re-create the edit button
            const editBtn = document.createElement('button');
            editBtn.className = 'edt-btn';
            editBtn.textContent = 'Edit';
            editBtn.style.backgroundColor = 'lightBlue';
            editBtn.style.border = '2px solid bisque';
            editBtn.style.borderRadius = '5px';
            userItem.appendChild(editBtn);

            // Add event listener for edit button
            editBtn.addEventListener('click', () => {
                const editedName = prompt('Enter Your Name:');
                const editedEmail = prompt('Enter your EmailId:');
                const editedPhone = prompt('Enter your contact Number:');

                if (editedName !== null && editedEmail !== null && editedPhone !== null) {
                    const newData = {
                        name: editedName || user.name,
                        email: editedEmail || user.email,
                        phone: editedPhone || user.phone
                    };
                    editUser(userId, newData, userItem);
                }
            });
        })
        .catch(err => console.error('Error: in updating data', err));
}

