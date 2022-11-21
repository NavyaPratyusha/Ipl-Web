console.log("Player Details Script Loaded");

var teamId = window.location.search.split("=")[1];
console.log("Team Id --> " + teamId);

var playerId = window.location.search.split("=")[2];
console.log("Player Id --> " + playerId);

const teamNames = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"];
var selectedTeam = teamNames[teamId - 1];

const teamInfo = [
  {
    id: 1,
    key: "CSK",   
    logoURL:"../images/csk2.jpg",
    title: "Chennai Super Kings",
    topBatsman: "MS Dhoni",
    topBowler: "Bhagath Varma",
    championCount: 7,
  },

  {
    id: 2,
    key: "RCB",
    logoURL: "../images/rcb2.jpg",
    title: "Royal Challengers Bangalore",
    topBatsman: "Virat Kohli",
    topBowler: "Glenn Maxwell",
    championCount: 5,
  },

  {
    id: 3,
    key: "MI",
    logoURL: "../images/mi.jpg",
    title: "Mumbai Indians",
    topBatsman: "Rohit Sharma",
    topBowler: "Jasprit Bumrah",
    championCount: 5,
  },

  {
    id: 4,
    key: "RR",
    logoURL: "../images/rr.jpg",
    title: "Rajastan Royals",
    topBatsman: "Sanju Samson",
    topBowler: "Jayadev Unadkat",
    championCount: 0,
  },

  {
    id: 5,
    key: "KKR",
    logoURL: "../images/kkr.jpg",
    title: "Kolkata Knight Riders",
    topBatsman: "Andre Russel",
    topBowler: "Venkatesh Iyer",
    championCount: 1,
  },

  {
    id: 6,
    key: "SRH",
    logoURL: "../images/SR.jpg",
    title: "Sun Risers Hyderabad",
    topBatsman: "Kane Willianson",
    topBowler: "Bhuvaneshwar Kumar",
    championCount: 4,
  },

  {
    id: 7,
    key: "PK",
    logoURL: "../images/kp.png",
    title: "Punjab Kings",
    topBatsman: "KL Rahul",
    topBowler: "Ishan Porel",
    championCount: 1,
  },

  {
    id: 8,
    key: "DC",
    logoURL: "../images/DC.jpg",
    title: "Delhi CapitRals",
    topBatsman: "Ishabh Pant",
    topBowler: "Shardul Thakur",
    championCount: 2,
  },
];

var playerListLocal = JSON.parse(localStorage.getItem("player-list"));

// =====Function to create player details=====>

function createPlayerDetails(obj) {
  var playerInfo = document.getElementById("player-info");

  var imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image");

  var playerPic = document.createElement("img");
  playerPic.innerHTML = obj.photoURL;

  imageWrapper.appendChild(playerPic);
  playerPic.innerHTML = obj.photoURL;

  playerInfo.appendChild(imageWrapper);

  var detailsWrapper = document.createElement("div");
  detailsWrapper.classList.add("description");

  var plName = document.createElement("h2");
  plName.innerHTML = obj.fullName;
  detailsWrapper.appendChild(plName);

  var tName = document.createElement("h3");
  tName.innerHTML = "Team: <span>" + teamInfo[teamId - 1].title + "</span>";
  detailsWrapper.appendChild(tName);

  var plRole = document.createElement("h4");
  plRole.innerHTML = "Role: <span>" + obj.role + "</span>";
  detailsWrapper.appendChild(plRole);

  var plPrice = document.createElement("h4");
  plPrice.innerHTML = "Price : <span> " + obj.price + "</span>";
  detailsWrapper.appendChild(plPrice);

  var plStatus = document.createElement("h4");
  var check;
  if (obj.isPlaying === true) {
    check = "Playing";
  } else {
    check = "On-Bench";
  }

  plStatus.innerHTML = "Status : <span>" + check + "</span>";
  detailsWrapper.appendChild(plStatus);

  playerInfo.appendChild(detailsWrapper);
}

createPlayerDetails(playerListLocal[selectedTeam][playerId]);
