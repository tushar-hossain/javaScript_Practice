//  Multidimensional Array

// Based hight scorer name of the player using loop

var playersInfo = [
  ["Ashraful", 95],
  ["Sakib", 19],
  ["Mushfiq", 3],
  ["Mahamudullah", 45],
  ["Mashrafee", 13],
];

for (var i = 0; i < playersInfo.length; i++) {
  // console.log(playersInfo[i]);
  var playerName = playersInfo[0][0];
  var playerRun = playersInfo[0][1];

  if (playerRun < playersInfo[i][1]) {
    playerRun = playersInfo[i][1];
    playerName = playersInfo[i][0];
  }
}

console.log(playerName);
