



//===============================
//  MY ROVER
//===============================

var rover = {
  position: [0,0],
  direction: 'N'
};


//===============================
//  ROCK
//===============================

var rock = {
  position: [5,0],
  direction: 'N'
};

//===============================
//  ARROW KEY JS
//===============================

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 38:
          goForward(rover);
            break;
        case 37:
            goLeft(rover);
            break;
        case 39:
            goRight(rover);
            break;
        case 40:
            goBackward(rover);
    }
};


//===============================
//  GO FORWARD
//===============================

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++ ;
      break;
    case 'E':
      rover.position[1]++ ;
      break;
    case 'S':
      rover.position[0]-- ;
      break;
    case 'W':
      rover.position[1]-- ;
      break;
    }

  myRock(rover);
  roverGrid(rover);
  document.getElementById('rover-position').innerHTML = "[" + rover.position[0] + ", " + rover.position[1] + "]";
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
//===============================
//  GO BACKWARD
//===============================

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]-- ;
      break;
    case 'E':
      rover.position[1]-- ;
      break;
    case 'S':
      rover.position[0]++ ;
      break;
    case 'W':
      rover.position[1]++ ;
      break;
  }
  myRock(rover);
  roverGrid(rover);
  document.getElementById('rover-position').innerHTML = "[" + rover.position[0] + ", " + rover.position[1] + "]";
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

//===============================
//  GO RIGHT
//===============================

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S' ;
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;

    }
  myRock(rover);
  roverGrid(rover);
  document.getElementById('rover-position').innerHTML = "[" + rover.direction + "]";
  console.log("New Rover Direction: [" + rover.direction + "]");
}

//===============================
//  GO LEFET
//===============================

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N' ;
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;

    }
  myRock(rover);
 roverGrid(rover);
  document.getElementById('rover-position').innerHTML = "[" + rover.direction + "]";
  console.log("New Rover Direction: [" + rover.direction + "]");
}
//===============================
//  ROVER GRID
//===============================

  function roverGrid(rover) {
    if (rover.position[0] >= 9) {
      rover.position[0] = 0;
    }else if (rover.position[1] > 9){
      rover.position[1] = 0;
    }else if (rover.position[0] < 0) {
      rover.position[0] = 9;
    }else if (rover.position[1] < 0) {
      rover.position[1] = 9;
    }
  }

  //===============================
  //  ROCK
  //===============================

  function myRock(rover) {
    if (rover.position[0] === rock.position[0]) {
      rover.position[0]--;
      alert("\u2666\u2666WARNING\u2666\u2666 rock ahead, change direction \u25c0\u25b6");
    }
  }
