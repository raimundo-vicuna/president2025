import emailjs from 'https://cdn.emailjs.com/dist/email.min.js';

const button = document.querySelector('.send_bt');

const SERVICE_ID = 'service_vgg1lo1';
const TEMPLATE_ID = 'template_tz6bxlg';
const PUBLIC_KEY = '0u6BafWDWeuc7jcke'; 

function sendMail() {
    const userName = document.querySelector('.mail_text').value.trim();
    const userMessage = document.querySelector('.massage-bt').value.trim();

    if (!userName || !userMessage) {
        button.style.backgroundColor = 'red'; 
        return;
    }

    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            from_name: userName,  
            message: userMessage, 
            reply_to: 'raivicuna@gmail.com' 
        },
        PUBLIC_KEY
    )
    .then((response) => {
        console.log('Correo enviado con éxito', response);
        button.style.backgroundColor = 'green'; 
    })
    .catch((error) => {
        console.error('Error al enviar el correo', error);
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    sendMail();
});
