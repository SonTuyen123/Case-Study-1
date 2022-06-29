let users = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];

function showListUser() {
   let data = `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
        </tr>`
    users.map((value, index) => {
        data += `<tr>
             <td>${index + 1}</td>
             <td>${value.name}</td>
             <td>${value.email}</td>
             <td>${value.password}</td>
           <td>
                  <button  style="background-color: #4e4ed0" onclick="edit(${index})" >Edit</button>
                  <button  style="background-color: #d74b4b" onclick="deleteList(${index})">Delete</button>
           </td>
         </tr>`
    })
    document.getElementById('body-table').innerHTML = data;

}
function deleteList(index) {
     users = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];
    if (confirm("Are you sure you want to delete ?")) {
        users.splice(index, 1);
    }

    localStorage.setItem('players', JSON.stringify(users))
    showListUser();
}
showListUser();


function edit(index){
    let userEdit = users[index];

    document.getElementById('first-name').value = userEdit.name;
    document.getElementById('last-name').value = userEdit.lastName;
    document.getElementById('email').value = userEdit.email;
    document.getElementById('id').value = index;


    let modelEdit = document.getElementById('contact-modal');
    modelEdit.style.display = "block";

}

function closeModal(){
    let modelEdit = document.getElementById('contact-modal');
    modelEdit.style.display = "none";
}


function update() {
    let index = document.getElementById('id').value;
    let name = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;

    let userEdit = users[index];
    userEdit.name = name;
    userEdit.lastName = lastName;
    userEdit.email = email;

    console.log(users)



    localStorage.setItem('players', JSON.stringify(users))

    closeModal();
    showListUser()
}
// })

