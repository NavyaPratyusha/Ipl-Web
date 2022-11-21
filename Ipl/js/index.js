var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 2000);


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
  
  const playerList = {
    CSK: [
      {
        plyId: 0,
        fullName: "Mahendra Singh Dhoni",
        photoURL: "https://static.iplt20.com/players/284/1.png",
        team: "Chennai Super Kings",
        price: "5 Cr",
        isPlaying: true,
        role: " BEST Batsman",
      },
  
      {
        plyId: 1,
        fullName: "Ambati Rayadu",
        photoURL: "https://static.iplt20.com/players/284/100.png",
        team: "Chennai Super Kings",
        price: "1 Cr",
        isPlaying: false,
        role: " BEST Bowler",
      },
    ],
  
    RCB: [
      {
        plyId: 0,
        fullName: "Virat Kohli",
        photoURL: "https://static.iplt20.com/players/284/164.png",
        team: "Royal Challengers Bangalore",
        price: "4 Cr",
        isPlaying: true,
        role: "Batsman",
      },
  
      {
        plyId: 1,
        fullName: "AB de Villiers",
        photoURL: "https://static.iplt20.com/players/284/233.png",
        team: "Royal Challengers Bangalore",
        price: "3 Cr",
        isPlaying: true,
        role: "Batsman",
      },
    ],
  
    MI: [
      {
        plyId: 0,
        fullName: "Rohit Sharma",
        photoURL: "https://static.iplt20.com/players/284/107.png",
        team: "Mumbai Indians",
        price: "4 Cr",
        isPlaying: true,
        role: "Batsman",
      },
  
      {
        plyId: 1,
        fullName: "Jasprit Bumrah",
        photoURL: "https://static.iplt20.com/players/284/1124.png",
        team: "Mumbai Indians",
        price: "2 Cr",
        isPlaying: true,
        role: "Bowler",
      },
    ],
  
    RR: [
      {
        plyId: 0,
        fullName: "Sanju Samson",
        photoURL: "https://static.iplt20.com/players/284/258.png",
        team: "Rajasthan Royals",
        price: "2 Cr",
        isPlaying: true,
        role: "Batsman",
      },
  
      {
        plyId: 1,
        fullName: "Jayadev Unadkat",
        photoURL: "https://static.iplt20.com/players/284/86.png",
        team: "Rajasthan Royals",
        price: "1 Cr",
        isPlaying: true,
        role: "Bowler",
      },
    ],
  
    KKR: [
      {
        plyId: 0,
        fullName: "Andre Russel ",
        photoURL: "https://static.iplt20.com/players/284/177.png",
        team: "Kolkata Knight Riders",
        price: "2 Cr",
        isPlaying: true,
        role: "Batsman",
      },
  
      {
        plyId: 1,
        fullName: "Sunil Narine ",
        photoURL: "https://static.iplt20.com/players/284/203.png",
        team: "Kolkata Knight Riders",
        price: "1 Cr",
        isPlaying: true,
        role: "Bowler",
      },
    ],
  
    SRH: [
      {
        plyId: 0,
        fullName: "David Warner",
        photoURL: "https://static.iplt20.com/players/284/170.png",
        team: "Sun Risers Hyderabad",
        price: "3 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        plyId: 1,
        fullName: "Bhuvaneshwar Kumar",
        photoURL: "https://static.iplt20.com/players/284/116.png",
        team: "Sun Risers Hyderabad",
        price: "1.5 Cr",
        isPlaying: true,
        role: "Bowler",
      },
    ],
  
    PK: [
      {
        plyId: 0,
        fullName: "KL Rahul",
        photoURL: "https://static.iplt20.com/players/284/1125.png",
        team: "Punjab Kings",
        price: "3 Cr",
        isPlaying: true,
        role: "Batsman",
      },
      {
        plyId: 1,
        fullName: "Mohammad Shami",
        photoURL: "https://static.iplt20.com/players/284/94.png",
        team: "Punjab Kings",
        price: "2 Cr",
        isPlaying: true,
        role: "Bowler",
      },
    ],
  
    DC: [
      {
        plyId: 0,
        fullName: "Shikhar Dhawan",
        photoURL: "https://static.iplt20.com/players/284/41.png",
        team: "Delhi Capitals",
        price: "3 Cr",
        isPlaying: true,
        role: "Batsman",
      },
  
      {
        plyId: 1,
        fullName: "Avesh Khan",
        photoURL: "https://static.iplt20.com/players/284/1561.png",
        team: "Delhi Capitals",
        price: "1 Cr",
        isPlaying: true,
        role: "Bowler",
      },
    ],
  };
  
  // ============== Storing the Player List to Local Storage ========>
  
  var checkStorage = localStorage.getItem("player-list");
  
  if (checkStorage === null) {
    localStorage.setItem("player-list", JSON.stringify(playerList));
  } else {
    var list = JSON.parse(localStorage.getItem("player-list"));
    localStorage.setItem("player-list", JSON.stringify(list));
  }
  
  //====== add  team card function=====>
  var playerListLocal = JSON.parse(localStorage.getItem("player-list"));
  function createLogoCard(obj) {
    var logoCard = document.createElement("div");
    logoCard.classList.add("team-card");
  
    var logoLink = document.createElement("a");
    logoLink.classList.add("logo-link");
    logoLink.href = "./team.html?t=" + obj.id;
    logoCard.appendChild(logoLink);
  
    var logoImage = document.createElement("img");
    logoImage.classList.add("team-logo");
    logoImage.src = obj.logoURL;
    logoLink.appendChild(logoImage);
  
    var logoTitle = document.createElement("h3");
    logoTitle.classList.add("team-title");
    var titleText = document.createTextNode(obj.title);
    logoTitle.appendChild(titleText);
    logoLink.appendChild(logoTitle);
  
    return logoCard;
  }
  // ======>select teams - grid
  var teamGrid = document.getElementById("teams-container");
  
  for (var i = 0; i < teamInfo.length; i++) {
    var card = createLogoCard(teamInfo[i]);
    teamGrid.appendChild(card);
  }
  // =========== >Implementing Search Function
  
  // Selecting the form element to prevent default action
  var formElement = document.getElementById("form");
  
  formElement.onsubmit = function (eObj) {
    eObj.preventDefault();
  };
  
  var searchinput = document.getElementById("search-input");
  console.log(searchinput);
  
  function getPlayerList(val) {
    console.log("Print Player List");
    return playerListLocal[val];
  }
  //====>searching
  var sResult = document.getElementById("search-result");
  var pGrid = document.getElementById("player-grid");
  
  searchinput.onkeyup = function (eObj) {
    if (eObj.key === "Enter") {
      var val = searchinput.value;
      val = val.toUpperCase();
  
      if (val.length > 0) {
        var pl = getPlayerList(val);
  
        if (pl !== undefined) {
          location.assign("./index.html#search-result");
          sResult.style.display = "block";
          for (var i = 0; i < pl.length; i++) {
            var pItem = createPlayerCard(pl[i]);
            pGrid.appendChild(pItem);
          }
        } else if (pl === undefined) {
          alert("Please Enter Correct Team Code => CSK/RCB/MI/RR/KKR/SRH/PK/DC");
          sResult.style.display = "none";
        }
      } else if (val.length === 0) {
        sResult.innerHTML = "";
        sResult.style.display = "none";
      }
    }
  };
  
  // ======> Function to create Player card is search Results section
  function createPlayerCard(obj) {
    var playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
  
    var playerLink = document.createElement("a");
    playerLink.classList.add("player-link");
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
  
