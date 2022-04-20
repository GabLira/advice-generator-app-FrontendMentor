import {buildCardTPL} from "./templates/card-tpl.js";

const execute = () => {
    const container = document.querySelector('main');
    const loadTPL = () => {
        container.innerHTML += buildCardTPL();
    };
    loadTPL();

    const renderAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => {
                return res.json();
            }).then(data => {
            const idAdvice = document.querySelector('.card__title');
            const message = document.querySelector('.card__message');
            const {id, advice} = data.slip;
            const pad = '#';

            console.log(idAdvice, message);
            idAdvice.innerHTML = `Advice ${pad}${id}`;
            message.innerHTML = `"${advice}"`;
        });
    };

    const button = document.querySelector('.card__btn');
    button.addEventListener('click', () => {
        renderAdvice();
    });
}
window.addEventListener("DOMContentLoaded", execute);