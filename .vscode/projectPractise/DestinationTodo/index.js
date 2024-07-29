function handleSubmit(e) {
    e.preventDefault();

    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    if (image && description) {
        const data = { image, description, Completed: false };

        axios.post('https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/destinationList', data)
            .then((res) => {
                console.log('successfully submitted data', res.data);
                const userId = res.data._id;
                displayData(userId, data);
            })
            .catch((err) => console.error('Something Error', err));
    } else {
        console.log('fill all the input');
    }
    document.getElementById('image').value = '';
    document.getElementById('description').value = '';
}

function displayData(userId, data) {
    axios.get(`https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/destinationList/${userId}`)
        .then((res) => {
            console.log('successfully getting the data', res.data);
            const list = document.createElement('li');
            list.innerHTML = `
                <img src='${data.image}' style="width:200px; height:150px;"><br>
                Description: ${data.description}<br>
                <button type='button' class='edit' style='background-color:yellow;border:none;border-radius:5px;'>🅴🅳🅸🆃</button>
                <button type='button' class='done' style='background-color:green;border:none;border-radius:5px;'>🅳🅴🅻🅴🆃🅴</button>
            `;
            const pendingList = document.getElementById('pending');
            pendingList.appendChild(list);

            const editBtn = list.querySelector('.edit');
            editBtn.addEventListener('click', function(e) {
                editFunction(list, data, userId);
            });

            const doneBtn = list.querySelector('.done');
            doneBtn.addEventListener('click', function(e) {
                doneFunction(list, userId);
            });
        })
        .catch((err) => console.error(err));
}

function editFunction(list, data, userId) {
    document.getElementById('image').value = data.image;
    document.getElementById('description').value = data.description;

    const submitBtn = document.getElementById('submit');
    submitBtn.removeEventListener('click', handleSubmit);
    submitBtn.addEventListener('click', function updateSubmit(e) {
        e.preventDefault();

        const updateData = {
            image: document.getElementById('image').value,
            description: document.getElementById('description').value,
            Completed: false
        };
        
        axios.put(`https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/destinationList/${userId}`, updateData)
            .then((res) => {
                console.log('successfully edited the data', res.data);
                list.innerHTML = `
                    <img src='${updateData.image}' style="width:200px;height:100px"><br>
                    Description: ${updateData.description}<br>
                    <button type='button' class='edit' style='background-color:yellow;border:none;border-radius:5px;'>🅴🅳🅸🆃</button>
                    <button type='button' class='done' style='background-color:green;border:none;border-radius:5px;'>🅳🅴🅻🅴🆃🅴</button>
                `;
                const doneList=document.getElementById('successfull')
                doneList.appendChild(list)

                const editBtn = list.querySelector('.edit');
                editBtn.addEventListener('click', function(e) {
                    editFunction(list, updateData, userId);
                });

                const doneBtn = list.querySelector('.done');
                doneBtn.addEventListener('click', function(e) {
                    doneFunction(list, userId);
                });

                submitBtn.removeEventListener('click', updateSubmit);
                submitBtn.addEventListener('click', handleSubmit);
            })
            .catch((err) => console.error(err));
    });
}

function doneFunction(list, userId) {
    axios.delete(`https://crudcrud.com/api/b20089a71e784825a5818b8122d7a609/destinationList/${userId}`)
        .then((res) => {
            console.log('successfully deleted');
            list.remove();
        })
        .catch((err) => console.error(err));
}
