export const buildCardTPL = () => {
    const tpl =
        `<h3 class="card__title">advice <span class="card__title--id">
            #117</span>
        </h3>
         <p class="card__message">
            "It is easy to sit up and take notice, 
            what's difficult is getting up and taking action."
         </p>
         <img src="./images/pattern-divider-desktop.svg" alt="Pattern divider" class="card__image">
         <img src="./images/pattern-divider-mobile.svg" alt="Pattern divider" class="card__image--mobile">
         <button class="card__btn">
           <img src="./images/icon-dice.svg" alt="Icon dice" class="card__btn--image">
         </button>`;
    return tpl;
};