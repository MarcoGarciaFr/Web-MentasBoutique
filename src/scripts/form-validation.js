
const form = document.querySelector(".needs-validation")
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      // Handle form submission asynchronously
      saveData();
      form.innerHTML=` <div id="successMessage" style="display: block;">
      <p>¡Envío exitoso! Gracias por tu mensaje.</p>
    </div>`

    }

    form.classList.add('was-validated');
  }, false);


const messageData = {
    name:"",
    lastName:"",
    mail:"",
    message:"",

}

const saveData = () =>{
    const name = document.getElementById("name");
    const lastName = document.getElementById("lastName");
    const mail = document.getElementById("mail");
    const message = document.getElementById("message");

    messageData.name = name
    messageData.lastName = lastName
    messageData.mail = mail
    messageData.message = message

    console.log(messageData);

}



