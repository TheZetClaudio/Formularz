let LogingButton = document.querySelector('.Login-button-mid');
let SignLeft = document.querySelector('.Sign-Left');
let FormLeft = document.querySelector('.form-left')
let Or = document.querySelector('.or');
let Links = document.querySelector('.logowanie');



let RegisterButton = document.querySelector('.Register-button-mid');
let SignRight = document.querySelector('.Sign-Right');
let FormRight = document.querySelector('.form-right');


let ShowLogin = () => {
    LogingButton.style.display='none';
    SignLeft.style.display='block';
    FormLeft.style.display='block';
    Or.style.display='block';
    Links.style.display='flex';

    RegisterButton.style.display='block';
    SignRight.style.display='none';
    FormRight.style.display='none';
};
LogingButton.addEventListener('click', ShowLogin);

let ShowRegister = () => {
    RegisterButton.style.display='none';
    SignRight.style.display='block';
    FormRight.style.display='block';

    LogingButton.style.display='block';
    SignLeft.style.display='none';
    FormLeft.style.display='none';
    Or.style.display='none';
    Links.style.display='none';

};
RegisterButton.addEventListener('click', ShowRegister);