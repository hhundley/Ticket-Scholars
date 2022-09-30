const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

carousel();
carousel();
carousel();

function carousel(){

    var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0] = '../../public/images/01-blossoming-apricot.jpg';

imgArray[1] = new Image();
imgArray[1] = '../../public/images/02-cosmos-flowers.jpg';

imgArray[2] = new Image();
imgArray[2] = '../../public/images/03-sand-sea-summer.jpg';

imgArray[3] = new Image();
imgArray[3] = '../../public/images/04-beach-chairs.jpg';

imgArray[4] = new Image();
imgArray[4] = '../../public/images/05-beach-sunrise.jpg';

imgArray[5] = new Image();
imgArray[5] = '../../public/images/06-fall-colors.jpg';

imgArray[6] = new Image();
imgArray[6] = '../../public/images/07-autumn-mountains.jpg';

imgArray[7] = new Image();
imgArray[7] = '../../public/images/08-frozen-river.jpg';

imgArray[8] = new Image();
imgArray[8] = '../../public/images/09-winter-home.jpg';

var eventName = ['Liam',  'Olivia', 'Noah', 'Emma', 'Oliver', 'Charlotte', 'Elijah', 'Amelia', 'James'];
var eventLocation = ['Location', 'Location', 'Location', 'Location', 'Location', 'Location', 'Location', 'Location', 'Location',];
var eventTime = ['Date & Time', 'Date & Time', 'Date & Time', 'Date & Time', 'Date & Time', 'Date & Time', 'Date & Time', 'Date & Time', 'Date & Time']

for( var i = 0; i < imgArray.length; i++){
    const container = document.getElementById('container');
    const card = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const addTicket = document.createElement('button');
    const information = document.createElement('div');
    const title = document.createElement('h5');
    const location = document.createElement('p');
    const time = document.createElement('h5');

    card.className = 'product-card';
    imgContainer.className = 'product-image';
    img.className = 'product-image';
    addTicket.className = 'card-btn';
    addTicket.textContent = 'Add Ticket';
    img.src = imgArray[i];
    img.className = 'product-image';
    information.className = 'product-info';
    title.className = 'card-title';
    title.textContent = eventName[i];
    location.className = 'card-text';
    location.textContent = eventLocation[i];
    time.className = 'card-title';
    time.textContent = eventTime[i];

    container.append(card);
    card.append(imgContainer, information);
    imgContainer.append(img, addTicket);
    information.append(time, title, location);
}

}
