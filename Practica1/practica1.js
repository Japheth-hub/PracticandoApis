const base_url = "https://jsonplaceholder.typicode.com";
const HTMLresponse = document.querySelector("#lista"); 


fetch(base_url + "/users")
    .then((response) => response.json())
    .then((users) => {
        // const tpl = users.map((user) => `<li>${user.name}</li>`)
        // console.log(tpl);
        // HTMLresponse.innerHTML = `<ul>${tpl}</ul>`;
        users.forEach(user => {
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let nombre = document.createElement("td");
            let email = document.createElement("td");
            id.appendChild(document.createTextNode(`${user.id}`))
            nombre.appendChild(document.createTextNode(`${user.name}`))
            email.appendChild(document.createTextNode(`${user.email}`))
            tr.appendChild(id)
            tr.appendChild(nombre);
            tr.appendChild(email);
            HTMLresponse.appendChild(tr);
        });
    });




