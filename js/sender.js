const notification_from = document.querySelector('.notification_from');
const button = document.querySelector('.send_bt');
const inputName = document.querySelector('.name_camp');
const inputMessage = document.querySelector('.message_camp');

const SERVICE_ID = 'service_vgg1lo1';
const TEMPLATE_ID = 'template_tz6bxlg';
const PUBLIC_KEY = '0u6BafWDWeuc7jcke';

function sendMail() {
    const userName = inputName.value.trim();
    const userMessage = inputMessage.value.trim();

    if (!userName || !userMessage) {
        notification_from.style.color = 'red';
        notification_from.textContent = 'Completa los campos';
        return;
    }

    emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            from_name: userName,  
            message: userMessage, 
            to_email: "raimundovicunap26@alumnos.cph-cja.cl, franciscopuelmac26@alumnos.cph-cja.cl, juangonzalezdelriegor26@alumnos.cph-cja.cl"
        },
        PUBLIC_KEY
    )
    .then((response) => {
        notification_from.style.color = 'green';
        notification_from.textContent = 'ENVIADO'; 
        
        inputName.value = '';
        inputMessage.value = '';
    })
    .catch((error) => {
        notification_from.style.color = 'red';
        notification_from.textContent = 'Inténtalo nuevamente';
        
        inputName.value = '';
        inputMessage.value = '';
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    sendMail();
});
