// code your solution here
// helpers.js

function superbowlWin(record) {
    const winYear = record.find(entry => entry.result === "W");
  
    return winYear ? winYear.year : undefined;
  }
  
