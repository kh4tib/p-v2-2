let audiencesTarget = document.getElementsByClassName('js-audiences')[0];
let eveTarget = document.getElementsByClassName('js-eve')[0];
let flowTarget = document.getElementsByClassName('js-flow')[0];
let santeTarget = document.getElementsByClassName('js-sante')[0];
let exquisiteTarget = document.getElementsByClassName('js-exquisite')[0];
let framesTarget = document.getElementsByClassName('js-frames')[0];

const addProjectTheme = (target, theme) => {
    target.addEventListener('mouseover', function() {
        body.classList.add(theme);
    });

    target.addEventListener('mouseout', function() {
        body.classList.remove(theme);
    }); 
};

addProjectTheme(audiencesTarget, '--project-theme-audiences');
addProjectTheme(eveTarget, '--project-theme-eve');
addProjectTheme(flowTarget, '--project-theme-flow');
addProjectTheme(framesTarget, '--project-theme-frames');
addProjectTheme(santeTarget, '--project-theme-sante');
addProjectTheme(exquisiteTarget, '--project-theme-exquisite');