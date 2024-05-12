const ball = document.querySelector('#ball');
const chair = document.querySelector('#chair');

function move_ball(){
    const keyframes = [
        
        { transform: "rotate(-181deg)"},
        { transform: "translateX(-180px)"},
        
        { transform: "translateX(0px)"},
        { transform: "rotate(81deg)"},
        
    ];
    const options = {
        duration: 1000,
        
        easing: "ease-out",
        fill: "forwards",
        //iterations: Infinity,
    };

    ball.animate(keyframes, options);
}

function move_chair(){
    const keyframes = [
        //{ transform: "translateX(200px)", opacity: 1 },
        
        { transform: "rotate(25deg)", opacity: 1 },
        { transform: "rotate(15deg)", opacity: 1 },
        { transform: "rotate(-15deg)", opacity: 1 },
        { transform: "rotate(-20deg)", opacity: 1 },
        { transform: "rotate(10deg)", opacity: 1 },
        { transform: "rotate(-5deg)", opacity: 1 },
        { transform: "rotate(0deg)", opacity: 1 },
        //{ transform: "translateX(300px)", opacity: 1 },
    ];
    const options = {
        duration: 1000,
        easing: "linear",
        fill: "forwards",
        //iterations: Infinity,
    };

    chair.animate(keyframes, options);
}
