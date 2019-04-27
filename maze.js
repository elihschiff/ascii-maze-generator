maze(3,3);

function maze(width, height){
  var walls = [];
  for(var i=0;i<width;i++){
    walls.push([]);
    for(var j=0;j<height;j++){
      walls[i].push([1,1,1,1])
    }
  }
  printMaze(walls)
}



function getWallType(type){
  //0 = top wall
  //1 = right wall
  //2 = down wall
  //3 = left wall
  var wallChars = [[[[[" "],["╸"]],[["╻"],["┓"]]],[[["╺"],["━"]],[["┏"],["┳"]]]],[[[["╹"],["┛"]],[["┃"],["┫"]]],[[["┗"],["┻"]],[["┣"],["╋"]]]]]
  return wallChars[type[0]][type[1]][type[2]][type[3]]
}

function printMaze(walls){
  var output = "";
  for(var i=0;i<walls.length;i++){
    for(var j=0;j<walls[i].length;j++){
      output+=getWallType(walls[i][j]);
    }
    output+="\n";
  }
  console.log(output);
}
