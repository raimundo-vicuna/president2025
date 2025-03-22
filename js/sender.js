const notification_from = document.querySelector('.notification_from')
const button = document.querySelector('.send_bt');

const SERVICE_ID = 'service_vgg1lo1';
const TEMPLATE_ID = 'template_tz6bxlg';
const PUBLIC_KEY = '0u6BafWDWeuc7jcke'; 

function sendMail() {
    const userName = document.querySelector('.mail_text').value.trim();
    const userMessage = document.querySelector('.massage-bt').value.trim();

    if (!userName || !userMessage) {
        notification_from.style.color = 'red'
        notification_from.textContent = 'Completa los campos';
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
        notification_from.style.color = 'green';
        notification_from.textContent = 'ENVIADO'; 
    })
    .catch((error) => {
        notification_from.style.color = 'red';
        notification_from.textContent = 'Intentalo nuevamente';
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    sendMail();
});
