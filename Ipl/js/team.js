var teamId = window.location.search.split("=")[1];
console.log(teamId);

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

const teamNames = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"];
var selectedTeam = teamNames[teamId - 1];

var playerListLocal = JSON.parse(localStorage.getItem("player-list"));

function createTeamDetails(obj) {
  var len = playerListLocal[selectedTeam].length;
  var detailsContainer = document.createElement("div");

  var imagePart = document.createElement("div");
  imagePart.classList.add("image-part");

  var teamLogo = document.createElement("img");
  teamLogo.src = obj.logoURL;
  teamLogo.classList.add("t-image");
  imagePart.appendChild(teamLogo);

  detailsContainer.appendChild(imagePart);

  var detailsPart = document.createElement("div");
  detailsPart.classList.add("details-part");

  var teamName = document.createElement("h1");
  teamName.classList.add("t-title");
  teamName.innerHTML = obj.title;
  detailsPart.appendChild(teamName);

  var playerCount = document.createElement("h4");
  playerCount.innerHTML = "No of Players : <span>" + len + "</span>";
  detailsPart.appendChild(playerCount);

  var topBatsman = document.createElement("h3");
  topBatsman.innerHTML = "Top Batsman : <span>" + obj.topBatsman + "</span>";
  detailsPart.appendChild(topBatsman);

  var topBowler = document.createElement("h3");
  topBowler.innerHTML = "Top Bowler : <span>" + obj.topBowler + "</span>";
  detailsPart.appendChild(topBowler);

  var champCount = document.createElement("h3");
  champCount.innerHTML =
    "Championship Won : <span> " + obj.championCount + "</span>";
  detailsPart.appendChild(champCount);

  detailsContainer.appendChild(detailsPart);
  return detailsContainer;
}

// Selecting team-details

var teamDetails = document.getElementById("team-details");
var item = createTeamDetails(teamInfo[teamId - 1]);
teamDetails.appendChild(item);

//========> create Players cards

function createPlayerCard(obj) {
  var playerCard = document.createElement("div");
  playerCard.classList.add("player-card");

  var playerLink = document.createElement("a");
  playerLink.classList.add("player-link");
  playerLink.href = "./players.html?t=" + teamId + "=" + obj.plyId;
  playerCard.appendChild(playerLink);

  // var playerImage = document.createElement("img");
  // playerImage.classList.add("player-image");
  // playerImage.src = obj.photoURL;
  // playerLink.appendChild(playerImage);

  var playerName = document.createElement("h2");
  playerName.innerHTML = obj.fullName;
  playerLink.appendChild(playerName);

  var playerRole = document.createElement("h4");
  playerRole.innerHTML = "Role: <span>" + obj.role + "</span>";
  playerLink.appendChild(playerRole);

  var playerPrice = document.createElement("h4");
  playerPrice.innerHTML = "Price : <span>" + obj.price + "</span>";
  playerLink.appendChild(playerPrice);

  var playerStatus = document.createElement("h4");
  var check;
  if (obj.isPlaying === true) {
    check = "Playing";
  } else {
    check = "On-Bench";
  }
  playerStatus.innerHTML = "Status: <span>" + check + "</span>";
  playerLink.appendChild(playerStatus);
  return playerCard;
}

// Selecting the player Grid
var playerGrid = document.getElementById("player-grid");

for (var i = 0; i < playerListLocal[selectedTeam].length; i++) {
  var playerItem = createPlayerCard(playerListLocal[selectedTeam][i]);
  playerGrid.appendChild(playerItem);
}

// // =========>Adding players  function

var btnAddPlayer = document.getElementById("btn-add-player");
var playerFormWrapper = document.getElementById("player-form-wrapper");

btnAddPlayer.onclick = function () {
  playerFormWrapper.style.display = "block";
  location.assign("#player-form-wrapper");
};

// Selecting the form
var registerForm = document.getElementById("register-form");

// preventing the default behaviour
registerForm.onsubmit = function (e) {
  e.preventDefault();

  var fullName = document.getElementById("fullName");
  var photoURL = document.getElementById("photoURL");
  var key = document.getElementById("key");
  var price = document.getElementById("price");
  var isPlaying = document.getElementById("status");
  var role = document.getElementById("role");

  var teamKey = key.value;
  teamKey = teamKey.toUpperCase();
  var id = playerListLocal[teamKey].length;

  var playerData = {
    plyId: id,
    fullName: fullName.value,
    photoURL: photoURL.value,
    price: price.value,
    isPlaying: isPlaying.value,
    role: role.value,
  };

  playerListLocal[teamKey].push(playerData);
  console.log(playerListLocal);

  // Save the updated List in local Storage
  localStorage.setItem("player-list", JSON.stringify(playerListLocal));

  alert("Player Registered Successfully!");
  playerFormWrapper.style.display = "none";
  location.assign("./index.html");
};
