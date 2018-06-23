var eveTarget = document.getElementsByClassName('js-eve')[0];
var flowTarget = document.getElementsByClassName('js-flow')[0];
var santeTarget = document.getElementsByClassName('js-sante')[0];
var exquisiteTarget = document.getElementsByClassName('js-exquisite')[0];
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