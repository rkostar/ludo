const id1 = document.getElementById("id1");
const id2 = document.getElementById("id2");
const id3 = document.getElementById("id3");
const id4 = document.getElementById("id4");
const id5 = document.getElementById("id5");
const id6 = document.getElementById("id6");
const id7 = document.getElementById("id7");
const id8 = document.getElementById("id8");
const id9 = document.getElementById("id9");
const id10 = document.getElementById("id10");
const id11 = document.getElementById("id11");
const id12 = document.getElementById("id12");
const id13 = document.getElementById("id13");
const id14 = document.getElementById("id14");
const id15 = document.getElementById("id15");
const id16 = document.getElementById("id16");
const id17 = document.getElementById("id17");
const id18 = document.getElementById("id18");
const id19 = document.getElementById("id19");
const id20 = document.getElementById("id20");
const id21 = document.getElementById("id21");
const id22 = document.getElementById("id22");
const id23 = document.getElementById("id23");
const id24 = document.getElementById("id24");
const id25 = document.getElementById("id25");
const id26 = document.getElementById("id26");
const id27 = document.getElementById("id27");
const id28 = document.getElementById("id28");
const id29 = document.getElementById("id29");
const id30 = document.getElementById("id30");
const id31 = document.getElementById("id31");
const id32 = document.getElementById("id32");
const id33 = document.getElementById("id33");
const id34 = document.getElementById("id34");
const id35 = document.getElementById("id35");
const id36 = document.getElementById("id36");
const id37 = document.getElementById("id37");
const id38 = document.getElementById("id38");
const id39 = document.getElementById("id39");
const id40 = document.getElementById("id40");
const id41 = document.getElementById("id41");
const id42 = document.getElementById("id42");
const id43 = document.getElementById("id43");
const id44 = document.getElementById("id44");
const id45 = document.getElementById("id45");
const id46 = document.getElementById("id46");
const id47 = document.getElementById("id47");
const id48 = document.getElementById("id48");
const id49 = document.getElementById("id49");
const id50 = document.getElementById("id50");
const id51 = document.getElementById("id51");
const id52 = document.getElementById("id52");

const rh1 = document.getElementById("rh-1");
const rh2 = document.getElementById("rh-2");
const rh3 = document.getElementById("rh-3");
const rh4 = document.getElementById("rh-4");
const rh5 = document.getElementById("rh-5");

const yh1 = document.getElementById("yh-1");
const yh2 = document.getElementById("yh-2");
const yh3 = document.getElementById("yh-3");
const yh4 = document.getElementById("yh-4");
const yh5 = document.getElementById("yh-5");

const bh1 = document.getElementById("bh-1");
const bh2 = document.getElementById("bh-2");
const bh3 = document.getElementById("bh-3");
const bh4 = document.getElementById("bh-4");
const bh5 = document.getElementById("bh-5");

const gh1 = document.getElementById("gh-1");
const gh2 = document.getElementById("gh-2");
const gh3 = document.getElementById("gh-3");
const gh4 = document.getElementById("gh-4");
const gh5 = document.getElementById("gh-5");

const yc1 = document.getElementById("yellow-circle-1");
const yc2 = document.getElementById("yellow-circle-2");
const yc3 = document.getElementById("yellow-circle-3");
const yc4 = document.getElementById("yellow-circle-4");

const bc1 = document.getElementById("blue-circle-1");
const bc2 = document.getElementById("blue-circle-2");
const bc3 = document.getElementById("blue-circle-3");
const bc4 = document.getElementById("blue-circle-4");

const gc1 = document.getElementById("green-circle-1");
const gc2 = document.getElementById("green-circle-2");
const gc3 = document.getElementById("green-circle-3");
const gc4 = document.getElementById("green-circle-4");

const rc1 = document.getElementById("red-circle-1");
const rc2 = document.getElementById("red-circle-2");
const rc3 = document.getElementById("red-circle-3");
const rc4 = document.getElementById("red-circle-4");

const graph = [];
for (let i = 0; i < 131; i++) graph[i] = [];

for (let i = 0; i < 52; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j <= 52) graph[i].push(i + j);
  }
}
graph[48].push(1);
graph[48].push(2);

graph[49].push(1);
graph[49].push(2);
graph[49].push(3);

graph[50].push(1);
graph[50].push(2);
graph[50].push(3);
graph[50].push(4);

graph[51].push(1);
graph[51].push(2);
graph[51].push(3);
graph[51].push(4);
graph[51].push(5);

graph[52].push(1);
graph[52].push(2);
graph[52].push(3);
graph[52].push(4);
graph[52].push(5);
graph[52].push(6);

graph[41].push("100");
graph[42].push("100");
graph[42].push("101");

graph[43].push("100");
graph[43].push("101");
graph[43].push("102");

graph[44].push("100");
graph[44].push("101");
graph[44].push("102");
graph[44].push("103");

graph[45].push("100");
graph[45].push("101");
graph[45].push("102");
graph[45].push("103");
graph[45].push("104");

graph[46].push("100");
graph[46].push("101");
graph[46].push("102");
graph[46].push("103");
graph[46].push("104");
graph[46].push("130");//edited

graph[100].push(101);
graph[100].push(102);
graph[100].push(103);
graph[100].push(104);
graph[100].push(130);

graph[101].push(102);
graph[101].push(103);
graph[101].push(104);
graph[101].push(130);

graph[102].push(103)
graph[102].push(104)
graph[102].push(130)

graph[103].push(104)
graph[103].push(130)    //130 is for win

graph[104].push(130)

graph[15].push(110);

graph[16].push(110);
graph[16].push(111);

graph[17].push(110);
graph[17].push(111);
graph[17].push(112);

graph[18].push(110);
graph[18].push(111);
graph[18].push(112);
graph[18].push(113);

graph[19].push(110);
graph[19].push(111);
graph[19].push(112);
graph[19].push(113);
graph[19].push(114);
graph[19].push(130);

graph[20].push(110);
graph[20].push(111);
graph[20].push(112);
graph[20].push(113);
graph[20].push(114);
graph[20].push(130);

graph[110].push(111)
graph[110].push(112)
graph[110].push(113)
graph[110].push(114)
graph[110].push(130)

graph[111].push(112)
graph[111].push(113)
graph[111].push(114)
graph[111].push(130)

graph[112].push(113)
graph[112].push(114)
graph[112].push(130)

graph[113].push(114)
graph[113].push(130)

graph[114].push(130)

for (let i = 1; i < 53; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    console.log(i + "->" + graph[i][j]);
  }
}
// console.log(graph[46][7])

rc1.innerHTML = "X";
yc1.innerHTML = "O";

const dice = document.getElementById("dice");
var toggler = 1;
const redstack = [];
const yellowstack = [];

redstack.push(48);
yellowstack.push(22);
var ifCanMoveRed = 0; //red can move after 6
var ifCanMoveYellow = 0;  // yellow can move after 6
var redCounter = 1  //to check when the red throws for first time
var yellowCounter = 1

dice.addEventListener("click", func = () => {
  
  let diceVal = Math.floor(Math.random() * 6 + 1);
  dice.innerHTML = diceVal;
  var currPos
  console.log(toggler)
  if (toggler == 1) {

    if (diceVal == 6 && toggler == 1) {   // for setting ifCanMoveRed
      ifCanMoveRed = 1;
      redCounter = 1;
    }

    toggler = 0
    if (ifCanMoveRed == 1 && redstack[0] == 48 && redCounter == 1) {
      console.log("ho")
      currPos = redstack.pop();
      document.getElementById("id" + currPos).innerHTML = "X";
      redstack.push(currPos)
      redCounter++
      rc1.innerHTML = ""
      return
    }
    if (ifCanMoveRed != 1)
      return;

    currPos = redstack.pop();
    document.getElementById("id" + currPos).innerHTML = "";
    let newPos = graph[currPos][diceVal - 1];
    if (currPos >= 41 && currPos <= 46) {
      if (newPos > 46) {
        switch (currPos) {
          case 41:
            diceVal += 0;
            break;
          case 42:
            diceVal += 1;
            break;
          case 43:
            diceVal += 2;
            break;
          case 44:
            diceVal += 3;
            break;
          case 45:
            diceVal += 4;
            break;
          case 46:
            diceVal += 5;
            break;
        }
        newPos = graph[currPos][diceVal];

        console.log("gfsfdf", newPos);
      }
    }
    if (newPos == undefined) {
      console.log("j")
      newPos = currPos
    }
    console.log(currPos, graph[currPos]);
    console.log(newPos, graph[newPos]);
    const id = "id" + newPos;


    if (newPos == 130) {
      dice.removeEventListener("click", func)
      dice.innerHTML = "player wins"
    }
    else {
      document.getElementById(id).innerHTML = "X";
      redstack.push(newPos);
    }
  }


  else {

    if (diceVal == 6 && toggler == 0) {
      ifCanMoveYellow = 1;
    }
    toggler = 1

    if (ifCanMoveYellow == 1 && yellowstack[0] == 22 && yellowCounter == 1) {
      currPos = yellowstack.pop();
      document.getElementById("id" + currPos).innerHTML = "O";
      yellowstack.push(currPos)
      yellowCounter++
      yc1.innerHTML = ""
      return;
    }
    if (ifCanMoveYellow != 1)
      return;

    currPos = yellowstack.pop();
    document.getElementById("id" + currPos).innerHTML = "";
    let newPos = graph[currPos][diceVal - 1];
    if (currPos >= 15 && currPos <= 20) {
      if (newPos > 20) {
        switch (currPos) {
          case 15:
            diceVal += 0;
            break;
          case 16:
            diceVal += 1;
            break;
          case 17:
            diceVal += 2;
            break;
          case 18:
            diceVal += 3;
            break;
          case 19:
            diceVal += 4;
            break;
          case 20:
            diceVal += 5;
            break;
        }
        newPos = graph[currPos][diceVal];

        console.log("gfsfdf", newPos);
      }
    }
    if (newPos == undefined) {
      console.log("j")
      newPos = currPos
    }
    console.log(currPos, graph[currPos]);
    console.log(newPos, graph[newPos]);
    const id = "id" + newPos;


    if (newPos == 130) {
      dice.removeEventListener("click", func)
      dice.innerHTML = "player wins"
    }
    else {
      document.getElementById(id).innerHTML = "O";
      yellowstack.push(newPos);
    }
  }
});

