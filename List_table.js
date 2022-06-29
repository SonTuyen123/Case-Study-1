function List() {
    let list = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];
    data = `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
        </tr>`
    list.map((value, index) => {
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
    let list = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];
    if (confirm("Are you sure you want to delete ?")) {
        list.splice(index, 1);
    }

    localStorage.setItem('players', JSON.stringify(list))
    List();
}
List();

// let modal = document.getElementById('contact-modal'),
//     openModal = modal.getElementById('edit'),
//     closeModal = modal.getElementById('.close-modal');
// openModal.addEventListener('click', function () {
//     modal.style.display = 'block';
// });
// closeModal.addEventListener('click', function () {
//     modal.style.display = 'none';
// })
// window.addEventListener('click' , function (e) {
//     if(e.target === modal) {
//         modal.style.display = 'none'
//     }
// })

