// contacts column changin style on hover 
let emailLink = document.getElementsByClassName('js-email')[0];
let twitterLink = document.getElementsByClassName('js-twitter')[0];
let instagramLink = document.getElementsByClassName('js-instagram')[0];
let dribbbleLink = document.getElementsByClassName('js-dribbble')[0];
let githubLink = document.getElementsByClassName('js-github')[0];

const contactHoverEffect = (item, newContent, oldContent, theme) => {
    item.addEventListener('mouseover', function(){
        item.innerHTML = newContent;
        body.classList.add(theme);
    });

    item.addEventListener('mouseout', function(){
        item.innerHTML = oldContent;
        body.classList.remove(theme);
    });
};

contactHoverEffect(emailLink,'mo[at]khatib.work','send me an email','--project-theme-email');

contactHoverEffect(twitterLink,'twitter.com/khatib', 'tweet me something', '--project-theme-twitter');

contactHoverEffect(instagramLink,'instagram.com/kh4tib', 'see my stories', '--project-theme-instagram');

contactHoverEffect(dribbbleLink,'dribbble.com/khatib', 'check my dribbble','--project-theme-dribbble');

contactHoverEffect(githubLink,'github.com/kh4tib', 'fork my code','--project-theme-github');