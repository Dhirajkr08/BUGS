const form = document.getElementById('form');

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;
    const option = document.getElementById('options').value;

    let list;
    switch (option) {
        case 'option1':
            list = document.getElementById('option1order');
            break;
        case 'option2':
            list = document.getElementById('option2order');
            break;
        case 'option3':
            list = document.getElementById('option3order');
            break;
        case 'option4':
            list = document.getElementById('option4order');
            break;
        default:
            console.error('Invalid option selected:', option);
            return; // Don't proceed further if the option is invalid
    }

    if (!list) {
        console.error('List not found for option:', option);
        return; // Don't proceed further if the list is not found
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${item} - $${price}`;

    const editButton = createEditButton(listItem, item, price, option);
    const deleteButton = createDeleteButton(listItem);

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append the created list item to the appropriate list on the screen
    list.appendChild(listItem);

    // Ensure data object is defined
    let data = JSON.parse(localStorage.getItem('item')) || { option1: [], option2: [], option3: [], option4: [] };

    // Save data to local storage
    data[option].push({ item, price });
    localStorage.setItem('item', JSON.stringify(data));

    // Display success message on the UI
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Item added successfully.';
    document.body.appendChild(successMessage);

    console.log('Item added:', { item, price, option });
}
