const buttonStyles = (color = 'hsl(150, 100%, 66%)',
                      paramsShadow = '0 2px 20px 5px',
                      transition = 'box-shadow 350ms ease') => {

    const button = document.querySelector('.card__btn');

    button.style.cursor = 'pointer';
    button.style.background = color;
    button.style.transition = transition;

    const buttonHover = () => {
        button.style.boxShadow = `${paramsShadow} ${color}`;
    };

    const buttonHoverNone = () => {
        button.style.boxShadow = 'none';
    };

    button.addEventListener('mouseenter', buttonHover);
    button.addEventListener('mouseleave', buttonHoverNone);
};

export default buttonStyles;