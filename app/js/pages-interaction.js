let eveTarget = document.getElementsByClassName('js-eve')[0];
let flowTarget = document.getElementsByClassName('js-flow')[0];
let santeTarget = document.getElementsByClassName('js-sante')[0];
let exquisiteTarget = document.getElementsByClassName('js-exquisite')[0];
let framesTarget = document.getElementsByClassName('js-frames')[0];
let body = document.querySelector('body');

const addTheme = (target, theme) => {
    target.addEventListener('mouseover', function() {
        body.classList.add(theme);
    });

    target.addEventListener('mouseout', function() {
        body.classList.remove(theme);
    }); 
};

addTheme(eveTarget, '--project-theme-eve');
addTheme(flowTarget, '--project-theme-flow');
addTheme(santeTarget, '--project-theme-sante');
addTheme(exquisiteTarget, '--project-theme-exquisite');
addTheme(framesTarget, '--project-theme-frames');