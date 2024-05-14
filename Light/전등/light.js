document.addEventListener("DOMContentLoaded", function() {
    const switchElement = document.querySelector('.switch');
    const contElement_1 = document.querySelector('.opacity');
    //const contElement_2 = document.querySelector('.curtain');
    const imgElement = switchElement.querySelector('img');

    let isToggled = false;

    switchElement.addEventListener('click', function() {
        if (isToggled) {
            contElement_1.style.opacity = '0';
            //contElement_2.style.opacity = '0';
            imgElement.src = './img/button_on.svg';
        } else {
            contElement_1.style.opacity = '0.2';
            //contElement_2.style.opacity = '0.9';
            imgElement.src = './img/button_off.svg';
        }
        isToggled = !isToggled;
    });
});


//
