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
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const card3 = document.createElement('div');
    const imgContainer1 = document.createElement('div');
    const imgContainer2 = document.createElement('div');
    const imgContainer3 = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const addTicket1 = document.createElement('button');
    const addTicket2 = document.createElement('button');
    const addTicket3 = document.createElement('button');
    const information1 = document.createElement('div');
    const information2 = document.createElement('div');
    const information3 = document.createElement('div');
    const title1 = document.createElement('h5');
    const title2 = document.createElement('h5');
    const title3 = document.createElement('h5');
    const location1 = document.createElement('p');
    const location2 = document.createElement('p');
    const location3 = document.createElement('p');
    const time1 = document.createElement('h5');
    const time2 = document.createElement('h5');
    const time3 = document.createElement('h5');

    card1.className = 'product-card';
    card2.className = 'product-card';
    card3.className = 'product-card';
    imgContainer1.className = 'product-image';
    imgContainer2.className = 'product-image';
    imgContainer3.className = 'product-image';
    img1.className = 'product-image';
    img2.className = 'product-image';
    img3.className = 'product-image';
    img1.src = imgArray[i];
    img2.src = imgArray[i];
    img3.src = imgArray[i];
    addTicket1.className = 'card-btn';
    addTicket2.className = 'card-btn';
    addTicket3.className = 'card-btn';
    addTicket1.textContent = 'Add Ticket';
    addTicket2.textContent = 'Add Ticket';
    addTicket3.textContent = 'Add Ticket';
    information1.className = 'product-info';
    information2.className = 'product-info';
    information3.className = 'product-info';
    title1.className = 'card-title';
    title2.className = 'card-title';
    title3.className = 'card-title';
    title1.textContent = eventName[i];
    title2.textContent = eventName[i];
    title3.textContent = eventName[i];
    location1.className = 'card-text';
    location2.className = 'card-text';
    location3.className = 'card-text';
    location1.textContent = eventLocation[i];
    location2.textContent = eventLocation[i];
    location3.textContent = eventLocation[i];
    time1.className = 'card-title';
    time2.className = 'card-title';
    time3.className = 'card-title';
    time1.textContent = eventTime[i];
    time2.textContent = eventTime[i];
    time3.textContent = eventTime[i];

    container1.append(card1);
    container2.append(card2);
    container3.append(card3);
    card1.append(imgContainer1, information1);
    card2.append(imgContainer2, information2);
    card3.append(imgContainer3, information3);
    imgContainer1.append(img1, addTicket1);
    imgContainer2.append(img2, addTicket2);
    imgContainer3.append(img3, addTicket3);
    information1.append(time1, title1, location1);
    information2.append(time2, title2, location2);
    information3.append(time3, title3, location3);
}

