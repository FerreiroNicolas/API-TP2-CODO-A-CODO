
// VALIDACION FORMULARIO Y API PARA QUE MANDE EMAILS

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form1');
    const errorDiv = document.querySelector('#error');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullname = document.querySelector('#fullname').value;
        const email = document.querySelector('#correo').value;
        const phone = document.querySelector('#telefono').value;
        const affair = document.querySelector('#localidad').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (fullname === '' || email === '' || phone === '' || affair === '' || message === '') {
            errorDiv.textContent = 'Por favor, complete todos los campos obligatorios.';
        } else {
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    form.reset();
                    swal.fire({
                        title: 'Formulario enviado',
                        text: 'Gracias por contactarnos, te escribiremos pronto.',
                        icon: 'success'
                    });
                } else {
                    errorDiv.textContent = 'Hubo un problema al enviar el formulario. Inténtelo de nuevo más tarde.';
                }
            })
            .catch(error => {
                console.error(error);
                errorDiv.textContent = 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.';
            });
        }
    });
});

const API__URL ='https://jsonplaceholder.typicode.com'

const HTMLResponse = document.querySelector("#form");
const ul = document.createElement('ul');

fetch(`${API__URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach( user=> {
            let elem = document.createElement("li")
            elem.appendChild(document.createTextNode(`${user.name} ${user.email}`));
            ul.appendChild(elem);
        });


        //const tpl = users.map((user) => `<li>${user.name} ${user.email}</li>`);
        //HTMLResponse.innerHTML = `<ul>${tpl} </ul>`;
    });

