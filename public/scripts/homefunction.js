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

// UPDATE FRONT END TO PULL TICKETS FROM DB
// function viewTickets() {
//   const image = document.getElementById("event_image").src;
//   const time = document.getElementById("event_time").innerHTML;
//   const event_Name = document.getElementById("event_title").innerHTML;
//   const description = document.getElementById("event_description").innerHTML;
//   const location = document.getElementById("event_location").innerHTML;
//   // Send a post route to api
//   if (image && time && event_Name && description && location) {
//     const response = fetch("/api/concerts", {
//       method: "POST",
//       body: JSON.stringify({image, time, event_Name, description, location}),
//       headers: { "Content-Type": "application/json" },
//     });
//     // redirect to profilePage if successful
//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };
  


// const ticketcart1 = document.getElementById("1");

// ticketcart1.addEventListener("click", viewTickets);

// const ticketcart2 = document.getElementById("2");

// ticketcart2.addEventListener("click", viewTickets);

// const ticketcart3 = document.getElementById("3");

// ticketcart3.addEventListener("click", viewTickets);

// const ticketcart4 = document.getElementById("4");

// ticketcart4.addEventListener("click", viewTickets);

// const ticketcart5 = document.getElementById("5");

// ticketcart5.addEventListener("click", viewTickets);

// const ticketcart6 = document.getElementById("6");

// ticketcart6.addEventListener("click", viewTickets);

// const ticketcart7 = document.getElementById("7");

// ticketcart7.addEventListener("click", viewTickets);

// const ticketcart8 = document.getElementById("8");

// ticketcart8.addEventListener("click", viewTickets);

// const ticketcart9 = document.getElementById("9");

// ticketcart9.addEventListener("click", viewTickets);

// const ticketcart10 = document.getElementById("10");

// ticketcart10.addEventListener("click", viewTickets);

// const ticketcart11 = document.getElementById("11");

// ticketcart11.addEventListener("click", viewTickets);

// const ticketcart12 = document.getElementById("12");

// ticketcart12.addEventListener("click", viewTickets);

// const ticketcart13 = document.getElementById("13");

// ticketcart13.addEventListener("click", viewTickets);

// const ticketcart14 = document.getElementById("14");

// ticketcart14.addEventListener("click", viewTickets);

// const ticketcart15 = document.getElementById("15");

// ticketcart15.addEventListener("click", viewTickets);

// const ticketcart16 = document.getElementById("16");

// ticketcart16.addEventListener("click", viewTickets);

// const ticketcart17 = document.getElementById("17");

// ticketcart17.addEventListener("click", viewTickets);

// const ticketcart18 = document.getElementById("18");

// ticketcart18.addEventListener("click", viewTickets);

// const ticketcart19 = document.getElementById("19");

// ticketcart19.addEventListener("click", viewTickets);

// const ticketcart20 = document.getElementById("20");

// ticketcart20.addEventListener("click", viewTickets);

// const ticketcart21 = document.getElementById("21");

// ticketcart21.addEventListener("click", viewTickets);

// const ticketcart22 = document.getElementById("22");

// ticketcart22.addEventListener("click", viewTickets);

// const ticketcart23 = document.getElementById("23");

// ticketcart23.addEventListener("click", viewTickets);

// const ticketcart24 = document.getElementById("24");

// ticketcart24.addEventListener("click", viewTickets);

// const ticketcart25 = document.getElementById("25");

// ticketcart25.addEventListener("click", viewTickets);

// const ticketcart26 = document.getElementById("26");

// ticketcart26.addEventListener("click", viewTickets);

// const ticketcart27 = document.getElementById("27");

// ticketcart27.addEventListener("click", viewTickets);

// const ticketcart28 = document.getElementById("28");

// ticketcart28.addEventListener("click", viewTickets) ;

// const ticketcart29 = document.getElementById("29");

// ticketcart29.addEventListener("click", viewTickets); 

// const ticketcart30 = document.getElementById("30");

// ticketcart30.addEventListener("click", viewTickets);


// // const firstTenImages = eventsForTicketScholars.splice(10, 31);
// // const secondTenImages = eventsForTicketScholars.splice(0, 21);
// // const thirdTenImages = eventsForTicketScholars.splice(0, 10);

// code below is for Plan B

const ticketcart = [...document.querySelectorAll(".card-btn")];

// ticketcart.addEventListener("click", () => {
//   redirect('/');
// });

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0] = "images/image1.jpg";

imgArray[1] = new Image();
imgArray[1] = "images/image2.jpg";

imgArray[2] = new Image();
imgArray[2] = "images/image3.jpg";

imgArray[3] = new Image();
imgArray[3] = "images/image4.jpg";

imgArray[4] = new Image();
imgArray[4] = "images/image5.jpg";

imgArray[5] = new Image();
imgArray[5] = "images/image6.jpg";

imgArray[6] = new Image();
imgArray[6] = "images/image7.jpg";

imgArray[7] = new Image();
imgArray[7] = "images/image8.jpg";

imgArray[8] = new Image();
imgArray[8] = "images/image9.jpg";

imgArray[9] = new Image();
imgArray[9] = "images/image10.jpg";

var imgArray1 = new Array();

imgArray1[0] = new Image();
imgArray1[0] = "images/pop-image1.jpg";

imgArray1[1] = new Image();
imgArray1[1] = "images/pop-image2.jpg";

imgArray1[2] = new Image();
imgArray1[2] = "images/pop-image3.jpg";

imgArray1[3] = new Image();
imgArray1[3] = "images/pop-image4.jpg";

imgArray1[4] = new Image();
imgArray1[4] = "images/pop-image5.jpg";

imgArray1[5] = new Image();
imgArray1[5] = "images/pop-image6.jpg";

imgArray1[6] = new Image();
imgArray1[6] = "images/pop-image7.jpg";

imgArray1[7] = new Image();
imgArray1[7] = "images/pop-image8.jpg";

imgArray1[8] = new Image();
imgArray1[8] = "images/pop-image9.jpg";

imgArray1[9] = new Image();
imgArray1[9] = "images/pop-image10.jpg";

var imgArray2 = new Array();

imgArray2[0] = new Image();
imgArray2[0] = "images/rock-image1.jpg";

imgArray2[1] = new Image();
imgArray2[1] = "images/rock-image2.jpg";

imgArray2[2] = new Image();
imgArray2[2] = "images/rock-image3.jpg";

imgArray2[3] = new Image();
imgArray2[3] = "images/rock-image4.jpg";

imgArray2[4] = new Image();
imgArray2[4] = "images/rock-image5.jpg";

imgArray2[5] = new Image();
imgArray2[5] = "images/rock-image6.jpg";

imgArray2[6] = new Image();
imgArray2[6] = "images/rock-image7.jpg";

imgArray2[7] = new Image();
imgArray2[7] = "images/rock-image8.jpg";

imgArray2[8] = new Image();
imgArray2[8] = "images/rock-image9.jpg";

imgArray2[9] = new Image();
imgArray2[9] = "images/rock-image10.jpg";

var eventName = [
  "Rolling Down A Hill Tour",
  "Flapjacks for Dinner World Tour",
  "Summer of 0ur Lyfes Tour",
  "Jazz Hands and Snaps Mean Everything Tour",
  "Touring at Its Best Tour",
  "Dreams Tour",
  "Seeing Sounds Tour",
  "Dont Tell Ma Tour",
  "i wanna be someone Tour",
  "Bring back the Snack Wrap Tour",
];

var eventName1 = [
  "You at your best when you're crying World Tour",
  "Orges are like Onions , ode to Shrek Tour",
  "NOW THATS WHAT I CALL MUSIC 483 LIVE",
  "Christmas Came Early Tour",
  "",
  "",
  "",
  "",
  "",
  "",
];

var eventName2 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
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
  "2022-10-01 at 7:00PM",
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
  title2.textContent = eventName1[i];
  title3.textContent = eventName2[i];
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



