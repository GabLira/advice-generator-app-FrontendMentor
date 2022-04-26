import {buildCardTPL} from "./templates/card-tpl.js";
import buttonStyles from "./button-styles.js";

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
            const message = document.querySelector('.card__header--message');
            const {id, advice} = data.slip;
            const pad = '#';

            idAdvice.innerHTML = `Advice ${pad}${id}`;
            message.innerHTML = `"${advice}"`;
        });
    };

    const button = document.querySelector('.card__btn');
    buttonStyles();

    button.addEventListener('click', () => {
        setTimeout(renderAdvice, 950);
    });
}
window.addEventListener("DOMContentLoaded", execute);