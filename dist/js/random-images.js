var randomImageArray = [
    "https://media.giphy.com/media/EimNpKJpihLY4/giphy.gif", 
    "https://media.giphy.com/media/Jalikml2XiUgw/giphy.gif",
    "https://media.giphy.com/media/3oGRFvUEbJdLWlawLu/giphy.gif",
    "https://media.giphy.com/media/NQL7Wuo2JSQSY/giphy.gif",
    "https://media.giphy.com/media/jO161HOYUPKEM/giphy.gif",
    "https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif",
];

function getRandomImage(imgAr) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = 'url('+ img + ')';

    var sectionFourOFour = document.querySelector(".section__not-found");
    sectionFourOFour.style.backgroundImage = imgStr;
}

getRandomImage(randomImageArray);