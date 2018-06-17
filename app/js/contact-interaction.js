var emailLink = document.querySelector('.js-email');
var twitterLink = document.querySelector('.js-twitter');
var dribbbleLink = document.querySelector('.js-dribbble');

function contactHoverEffect(item, newContent, oldContent, theme) {
    item.addEventListener('mouseover', function(){
        item.innerHTML = newContent;
        body.classList.add(theme);
    });

    item.addEventListener('mouseout', function(){
        item.innerHTML = oldContent;
        body.classList.remove(theme);
    });
};

contactHoverEffect(emailLink,'mo[at]khatib[dot]work','send me an email','--project-theme-email');

contactHoverEffect(twitterLink,'twitter.com/khatib', 'tweet me something', '--project-theme-twitter');

contactHoverEffect(dribbbleLink,'dribbble.com/khatib', 'check my dribbble','--project-theme-dribbble');