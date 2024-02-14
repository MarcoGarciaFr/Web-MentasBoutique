const form = document.getElementById('register-form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
            
          } if(!validatePasswords()) {
           event.stopPropagation();      
          }else{
          const nombre = document.getElementById('firstName').value;
          const apellido = document.getElementById('lastName').value;
          const email = document.getElementById('email').value;
          const telefono = document.getElementById('phone').value;
          const password = document.getElementById('password').value;
          
          const user = {
              nombre: nombre,
              apellido: apellido,
              telefono: telefono,
              email: email,
              password: password,
              rol: 2
          };
          
          const url = `http://localhost:8080/admin/users`;
          
          const crearUsuario = async () => {
              try {
                  const response = await fetch(url, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(user)
                  });
                  const data = await response.json();
                  console.log(data);
              }
              catch(error) {
                  console.log(error);
              }
          }
      
          crearUsuario();
          

          window.location.href = "../../home.html"
        }

          form.classList.add('was-validated');
        }, false);


    function validatePasswords() {
        const password = document.getElementById('password').value;
        const againPassword = document.getElementById('again-password').value;

        const mensajeInvalidoPassword = document.getElementById('mensajeInvalidoPassword');
        const mensajeValidoPassword = document.getElementById('mensajeValidoPassword');

        if (password !== againPassword || password == "") {
            mensajeInvalidoPassword.style.display = 'block';
            mensajeValidoPassword.style.display = 'none';
            return false
        } else {
            mensajeInvalidoPassword.style.display = 'none';
            mensajeValidoPassword.style.display = 'block';
            return true
            
        }
    }
 
