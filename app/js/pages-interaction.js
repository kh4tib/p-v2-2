var eveTarget = document.querySelector('.js-eve');
var flowTarget = document.querySelector('.js-flow');
var santeTarget = document.querySelector('.js-sante');
var exquisiteTarget = document.querySelector('.js-exquisite');
var body = document.querySelector('body');

function addTheme(target, theme) {
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