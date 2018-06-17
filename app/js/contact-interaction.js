var emailLink = document.querySelector('.js-email');
var twitterLink = document.querySelector('.js-twitter');
var dribbbleLink = document.querySelector('.js-dribbble');

function contactHoverEffect(item, newContent, newStyle, oldContent, oldStyle, theme) {
    item.addEventListener('mouseover', function(){
        item.innerHTML = newContent;
        item.style.color = newStyle;
        body.classList.add(theme);
        item.style.textDecorationColor = newStyle;
    });

    item.addEventListener('mouseout', function(){
        item.innerHTML = oldContent;
        item.style.color = oldStyle;
        body.classList.remove(theme);
    });
};

contactHoverEffect(emailLink,'mo[at]khatib[dot]work','salmon','send me an email', '#ffffff','--project-theme-email');

contactHoverEffect(twitterLink,'twitter.com/khatib','#1da1f2','tweet me something', '#ffffff', '--project-theme-twitter');

contactHoverEffect(dribbbleLink,'dribbble.com/khatib','#ea4c89','send me an email', '#ffffff', '--project-theme-dribbble');