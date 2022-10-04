const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0] = "../../public/images/image1.jpg";

imgArray[1] = new Image();
imgArray[1] = "../../public/images/image2.jpg";

imgArray[2] = new Image();
imgArray[2] = "../../public/images/image3.jpg";

imgArray[3] = new Image();
imgArray[3] = "../../public/images/image4.jpg";

imgArray[4] = new Image();
imgArray[4] = "../../public/images/image5.jpg";

imgArray[5] = new Image();
imgArray[5] = "../../public/images/image6.jpg";

imgArray[6] = new Image();
imgArray[6] = "../../public/images/image7.jpg";

imgArray[7] = new Image();
imgArray[7] = "../../public/images/image8.jpg";

imgArray[8] = new Image();
imgArray[8] = "../../public/images/image9.jpg";

imgArray[9] = new Image();
imgArray[9] = "../../public/images/image10.jpg";

var imgArray1 = new Array();

imgArray1[0] = new Image();
imgArray1[0] = "../../public/images/pop-image1.jpg";

imgArray1[1] = new Image();
imgArray1[1] = "../../public/images/pop-image2.jpg";

imgArray1[2] = new Image();
imgArray1[2] = "../../public/images/pop-image3.jpg";

imgArray1[3] = new Image();
imgArray1[3] = "../../public/images/pop-image4.jpg";

imgArray1[4] = new Image();
imgArray1[4] = "../../public/images/pop-image5.jpg";

imgArray1[5] = new Image();
imgArray1[5] = "../../public/images/pop-image6.jpg";

imgArray1[6] = new Image();
imgArray1[6] = "../../public/images/pop-image7.jpg";

imgArray1[7] = new Image();
imgArray1[7] = "../../public/images/pop-image8.jpg";

imgArray1[8] = new Image();
imgArray1[8] = "../../public/images/pop-image9.jpg";

imgArray1[9] = new Image();
imgArray1[9] = "../../public/images/pop-image10.jpg";

var imgArray2 = new Array();

imgArray2[0] = new Image();
imgArray2[0] = "../../public/images/rock-image1.jpg";

imgArray2[1] = new Image();
imgArray2[1] = "../../public/images/rock-image2.jpg";

imgArray2[2] = new Image();
imgArray2[2] = "../../public/images/rock-image3.jpg";

imgArray2[3] = new Image();
imgArray2[3] = "../../public/images/rock-image4.jpg";

imgArray2[4] = new Image();
imgArray2[4] = "../../public/images/rock-image5.jpg";

imgArray2[5] = new Image();
imgArray2[5] = "../../public/images/rock-image6.jpg";

imgArray2[6] = new Image();
imgArray2[6] = "../../public/images/rock-image7.jpg";

imgArray2[7] = new Image();
imgArray2[7] = "../../public/images/rock-image8.jpg";

imgArray2[8] = new Image();
imgArray2[8] = "../../public/images/rock-image9.jpg";

imgArray2[9] = new Image();
imgArray2[9] = "../../public/images/rock-image10.jpg";

var eventName = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Charlotte",
  "Elijah",
  "Amelia",
  "James",
];
var eventLocation = [
  "Location",
  "Location",
  "Location",
  "Location",
  "Location",
  "Location",
  "Location",
  "Location",
  "Location",
];
var eventTime = [
  "Date & Time",
  "Date & Time",
  "Date & Time",
  "Date & Time",
  "Date & Time",
  "Date & Time",
  "Date & Time",
  "Date & Time",
  "Date & Time",
];

for (var i = 0; i < imgArray.length; i++) {
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  const container3 = document.getElementById("container3");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");
  const card3 = document.createElement("div");
  const imgContainer1 = document.createElement("div");
  const imgContainer2 = document.createElement("div");
  const imgContainer3 = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const addTicket1 = document.createElement("button");
  const addTicket2 = document.createElement("button");
  const addTicket3 = document.createElement("button");
  const information1 = document.createElement("div");
  const information2 = document.createElement("div");
  const information3 = document.createElement("div");
  const title1 = document.createElement("h5");
  const title2 = document.createElement("h5");
  const title3 = document.createElement("h5");
  const location1 = document.createElement("p");
  const location2 = document.createElement("p");
  const location3 = document.createElement("p");
  const time1 = document.createElement("h5");
  const time2 = document.createElement("h5");
  const time3 = document.createElement("h5");

  card1.className = "product-card";
  card2.className = "product-card";
  card3.className = "product-card";
  imgContainer1.className = "product-image";
  imgContainer2.className = "product-image";
  imgContainer3.className = "product-image";
  img1.className = "product-image";
  img2.className = "product-image";
  img3.className = "product-image";
  img1.src = imgArray[i];
  img2.src = imgArray1[i];
  img3.src = imgArray2[i];
  addTicket1.className = "card-btn";
  addTicket2.className = "card-btn";
  addTicket3.className = "card-btn";
  addTicket1.textContent = "Add Ticket";
  addTicket2.textContent = "Add Ticket";
  addTicket3.textContent = "Add Ticket";
  information1.className = "product-info";
  information2.className = "product-info";
  information3.className = "product-info";
  title1.className = "card-title";
  title2.className = "card-title";
  title3.className = "card-title";
  title1.textContent = eventName[i];
//   title1.textContent = eventsForTicketScholars[i].title;
  title2.textContent = eventName[i];
  title3.textContent = eventName[i];
  location1.className = "card-text";
  location2.className = "card-text";
  location3.className = "card-text";
  location1.textContent = eventLocation[i];
  location2.textContent = eventLocation[i];
  location3.textContent = eventLocation[i];
  time1.className = "card-title";
  time2.className = "card-title";
  time3.className = "card-title";
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
