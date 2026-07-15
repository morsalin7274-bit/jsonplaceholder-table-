

let a = document.getElementById("table-section");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {a.innerHTML =
            `<table class="table">
            <thead>
                <tr>
                    <th class="col">#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Buttons</th>
                </tr>
            </thead>
            <tbody>
                ${data.map(item => 
                    `<tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td><a href="">${item.email}</a></td>
                        <td><a href="">${item.website}</a></td>
                        <td>
                            <button class="btn btn-primary">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>`).join("")
                }
            </tbody>
        </table>`;
    });