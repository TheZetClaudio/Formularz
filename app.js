const LogingButton = document.querySelector('.Login-button-mid');
const SignLeft = document.querySelector('.Sign-Left');
const FormLeft = document.querySelector('.form-left')
const Or = document.querySelector('.or');
const Links = document.querySelector('.logowanie');

const RegisterButton = document.querySelector('.Register-button-mid');
const SignRight = document.querySelector('.Sign-Right');
const FormRight = document.querySelector('.form-right');
const SubmitRegisterButton = document.querySelector('.register-submit');

function SendRegisterCredentials() {
    const inputs = document.querySelector('.actual-form').querySelectorAll('input');
    const [ mail, nick, password ] = inputs;

    fetch('http://localhost:8080/register', {
        method: 'POST',
        body: JSON.stringify({
            mail: mail.value,
            nick: nick.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text()).then(console.log);
}

function ShowLogin() {
    LogingButton.style.display='none';
    SignLeft.style.display='block';
    FormLeft.style.display='block';
    Or.style.display='block';
    Links.style.display='flex';

    RegisterButton.style.display='block';
    SignRight.style.display='none';
    FormRight.style.display='none';
};

function ShowRegister() {
    RegisterButton.style.display='none';
    SignRight.style.display='flex';
    FormRight.style.display='block';
    
    LogingButton.style.display='block';
    SignLeft.style.display='none';
    FormLeft.style.display='none';
    Or.style.display='none';
    Links.style.display='none';
};

LogingButton.addEventListener('click', ShowLogin);
RegisterButton.addEventListener('click', ShowRegister);
SubmitRegisterButton.addEventListener('click', SendRegisterCredentials);