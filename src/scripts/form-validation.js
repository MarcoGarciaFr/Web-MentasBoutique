
const form = document.querySelector(".needs-validation")
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
    
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
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;

    messageData.name = name
    messageData.lastName = lastName
    messageData.mail = mail
    messageData.message = message

    console.log(messageData);

    let jsonMessageData = JSON.stringify(messageData);
    console.log(jsonMessageData);
}



