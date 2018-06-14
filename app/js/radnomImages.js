var randomImageArray = [
    "https://media.giphy.com/media/EimNpKJpihLY4/giphy.gif", 
    "https://media.giphy.com/media/Jalikml2XiUgw/giphy.gif",
    "https://media.giphy.com/media/3oGRFvUEbJdLWlawLu/giphy.gif",
    "https://media.giphy.com/media/NQL7Wuo2JSQSY/giphy.gif",
    "https://media.giphy.com/media/jO161HOYUPKEM/giphy.gif",
];

function getRandomImage(imgAr) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<section class="section__404"><img class="section__404" src="'+ img + '" alt = "randomImage"></section';
    document.write(imgStr);
    document.close();
};

getRandomImage(randomImageArray);