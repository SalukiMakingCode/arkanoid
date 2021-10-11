(() => {
let c = document.getElementById("game");
let canonPosX=298;
let canonPosY=490;
let canon1Img = document.getElementById("canon1");
let canon2Img = document.getElementById("canon2");
let canon3Img = document.getElementById("canon3");
let canon4Img = document.getElementById("canon4");
let canonLose1Img = document.getElementById("canonLose1Img");
let canonLose2Img = document.getElementById("canonLose2Img");
let canonLose3Img = document.getElementById("canonLose3Img");
let canonLose4Img = document.getElementById("canonLose4Img");
let canonLose5Img = document.getElementById("canonLose5Img");
let canonLose6Img = document.getElementById("canonLose6Img");
let canonLose7Img = document.getElementById("canonLose7Img");
let canonLose8Img = document.getElementById("canonLose8Img");
let canonImg=canon1Img;
let widthCanon=110;
let borderImg = document.getElementById("border");
let door1Img = document.getElementById("door1");
let door2Img = document.getElementById("door2");
let door3Img = document.getElementById("door3");
let door4Img = document.getElementById("door4");
let door5Img = document.getElementById("door5");
let door6Img = document.getElementById("door6");
let door7Img = document.getElementById("door7");
let door8Img = document.getElementById("door8");
let door9Img = document.getElementById("door9");
let door10Img = document.getElementById("door10");
let door11Img = document.getElementById("door11");
let door12Img = document.getElementById("door12");
let door13Img = document.getElementById("door13");
let door14Img = document.getElementById("door14");
let door15Img = document.getElementById("door15");
let door16Img = document.getElementById("door16");
let door17Img = document.getElementById("door17");
let doorLeftImg=door1Img;
let doorRightImg=door1Img;
let gateSide1Img = document.getElementById("gateside1");
let gateSide2Img = document.getElementById("gateside2");
let gateSide3Img = document.getElementById("gateside3");
let gateSide4Img = document.getElementById("gateside4");
let gateSide5Img = document.getElementById("gateside5");
let gateSide6Img = document.getElementById("gateside6");
let gateSide7Img = document.getElementById("gateside7");
let gateTop1Img = document.getElementById("gatetop1");
let gateTop2Img = document.getElementById("gatetop2");
let gateTop3Img = document.getElementById("gatetop3");
let gateTop4Img = document.getElementById("gatetop4");
let gateTop5Img = document.getElementById("gatetop5");
let gateTop6Img = document.getElementById("gatetop6");
let gateTop7Img = document.getElementById("gatetop7");
let gateRightImg=gateSide1Img;
let gateLeftImg=gateSide1Img;
let gateTopLeftImg=gateTop1Img;
let gateTopRightImg=gateTop1Img;
let gateStatut=0;
let background1Img = document.getElementById("background1");
let blockGoldImg = document.getElementById("blockgold");
let blockGold2Img = document.getElementById("blockgold2");
let blockGold3Img = document.getElementById("blockgold3");
let blockGold4Img = document.getElementById("blockgold4");
let blockGold5Img = document.getElementById("blockgold5");
let blockGold6Img = document.getElementById("blockgold6");
let blockGold7Img = document.getElementById("blockgold7");
let blockGold8Img = document.getElementById("blockgold8");
let blockGold9Img = document.getElementById("blockgold9");
let blockGold10Img = document.getElementById("blockgold10");
let block1Img = document.getElementById("block1");
let block2Img = document.getElementById("block2");
let block3Img = document.getElementById("block3");
let block4Img = document.getElementById("block4");
let block5Img = document.getElementById("block5");
let block6Img = document.getElementById("block6");
let block7Img = document.getElementById("block7");
let block8Img = document.getElementById("block8");
let blockSilverImg = document.getElementById("blocksilver");
let blockSilver2Img = document.getElementById("blocksilver2");
let blockSilver3Img = document.getElementById("blocksilver3");
let blockSilver4Img = document.getElementById("blocksilver4");
let blockSilver5Img = document.getElementById("blocksilver5");
let blockSilver6Img = document.getElementById("blocksilver6");
let blockSilver7Img = document.getElementById("blocksilver7");
let blockSilver8Img = document.getElementById("blocksilver8");
let blockSilver9Img = document.getElementById("blocksilver9");
let blockSilver10Img = document.getElementById("blocksilver10");
let blockSilverCrashImg = document.getElementById("blocksilvercrash");
let block=[];
let blockToBreak=0;
let live=3;
let liveImg = document.getElementById("live");
let ballImg = document.getElementById("ballImg");
let ball=[{"posX":320, "posY":476, "img":"ballImg", "froze":true, "directionPosX":-2, "directionPosY":-2, "vitesse":4, "countMove":0, "active":0}];
//let explode1Img = document.getElementById("explode1");
//let explode2Img = document.getElementById("explode2");
//let explode3Img = document.getElementById("explode3");
//let explode4Img = document.getElementById("explode4");
//let explode5Img = document.getElementById("explode5");
//let explode6Img = document.getElementById("explode6");
//let explode7Img = document.getElementById("explode7");
//let explode8Img = document.getElementById("explode8");
let gameoverImg = document.getElementById("gameover");
let loadGameOver=0;
let statutGame="startscreen";
let statutCount=0;
let start1Img = document.getElementById("start1Img");
let start2Img = document.getElementById("start2Img");
let startscreen="start1Img";
//let score=0;
//let nameImg = document.getElementById("name");
//let name="";
//let highscoreImg = document.getElementById("highscore");

// test is ball collide block
function collide (ballPosX, ballPosY, ballWidth, ballLength, blockPosX, blockPosY, blockWidth, blockLength) {
    if (blockPosX > ballPosX + ballWidth ||
        blockPosX < ballPosX - blockWidth ||
        blockPosY > ballPosY + ballLength ||
        blockPosY < ballPosY - blockLength) {
        return false
    }
    else {
        return true
    }
}

// fonction name is clear no ?
function refreshScreen() {
    let ctx = c.getContext("2d");
    if (statutGame==="ingame" || statutGame==="levelwin" || statutGame==="finishlevel" || statutGame==="loseLive" || statutGame==="gameover") {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(background1Img, 0, 0);
        ctx.drawImage(canonImg, canonPosX, canonPosY);
        ctx.drawImage(borderImg, 0, 0);
        ctx.drawImage(doorLeftImg, -4, 461);
        ctx.drawImage(doorRightImg, 632, 461);
        ctx.drawImage(gateTopLeftImg, 150, -2);
        ctx.drawImage(gateTopRightImg, 405, -2);
        ctx.drawImage(gateLeftImg, -2, 135);
        ctx.drawImage(gateRightImg, 630, 135);
        for (let i = 0; i < block.length; i++) {
            if (block[i]["active"]===0) ctx.drawImage(eval(block[i]["img"]), block[i]["posX"], block[i]["posY"]);
        }
        for (let i = 0; i < ball.length; i++) {
            if (ball[i]["active"]===0) ctx.drawImage(eval(ball[i]["img"]), ball[i]["posX"], ball[i]["posY"]);
        }
//        for (let i = 0; i < boulet.length; i++) {
//            if (boulet[i]["active"] === 0) ctx.drawImage(bouletImg, boulet[i]["posX"], boulet[i]["posY"]);
//        }
        if (live > 11)  ctx.drawImage(liveImg, 400, 525)
        if (live > 10)  ctx.drawImage(liveImg, 420, 525)
        if (live > 9)  ctx.drawImage(liveImg, 440, 525)
        if (live > 8)  ctx.drawImage(liveImg, 460, 525)
        if (live > 7)  ctx.drawImage(liveImg, 480, 525)
        if (live > 6)  ctx.drawImage(liveImg, 500, 525)
        if (live > 5)  ctx.drawImage(liveImg, 520, 525)
        if (live > 4)  ctx.drawImage(liveImg, 540, 525)
        if (live > 3)  ctx.drawImage(liveImg, 560, 525)
        if (live > 2)  ctx.drawImage(liveImg, 580, 525)
        if (live > 1)  ctx.drawImage(liveImg, 600, 525)
//        if (live < 1) loadGameOver++;
//        ctx.font = '40px serif';
//        ctx.fillStyle = "white";
//        ctx.fillText(score, 10, 40);
        if (loadGameOver > 0) { //&& loadGameOver <80) {
            ctx.drawImage(gameoverImg, 0, 0);
            document.getElementById("replay").style.display = "inline";
        }
//        if (loadGameOver>=80) { //player tape his name
//            ctx.drawImage(nameImg, 0, 0);
//            ctx.font = '30px serif';
//            ctx.fillStyle = "white";
//            let posLetterX=320-(name.length*10);
//            ctx.fillText(name, posLetterX, 230);
//        }
    }
    if (statutGame==="startscreen") {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(eval(startscreen), 0, 0);
//        if (statutCount>100) {
//            statutCount=0;
//            statutGame="highscore";
        }
//    }
    }

// all interval always actif
setInterval(function() {
    //open the door on level win
    if (statutGame==="levelwin" || statutGame==="finishlevel") {
      switch (doorLeftImg) {
         case door1Img :
             doorLeftImg=door2Img;
             doorRightImg=door2Img;
             break;
          case door2Img :
              doorLeftImg=door3Img;
              doorRightImg=door3Img;
              break;
          case door3Img :
              doorLeftImg=door4Img;
              doorRightImg=door4Img;
              break;
          case door4Img :
              doorLeftImg=door5Img;
              doorRightImg=door5Img;
              break;
          case door5Img :
              doorLeftImg=door6Img;
              doorRightImg=door6Img;
              break;
          case door6Img :
              doorLeftImg=door7Img;
              doorRightImg=door7Img;
              break;
          case door7Img :
              doorLeftImg=door8Img;
              doorRightImg=door8Img;
              break;
          case door8Img :
              doorLeftImg=door9Img;
              doorRightImg=door9Img;
              break;
          case door9Img :
              doorLeftImg=door10Img;
              doorRightImg=door10Img;
              break;
          case door10Img :
              doorLeftImg=door11Img;
              doorRightImg=door11Img;
              break;
          case door11Img :
              doorLeftImg=door12Img;
              doorRightImg=door12Img;
              break;
          case door12Img :
              doorLeftImg=door13Img;
              doorRightImg=door13Img;
              break;
          case door13Img :
              doorLeftImg=door14Img;
              doorRightImg=door14Img;
              break;
          case door14Img :
              doorLeftImg=door15Img;
              doorRightImg=door15Img;
              break;
          case door15Img :
              doorLeftImg=door16Img;
              doorRightImg=door16Img;
              break;
          case door16Img :
              doorLeftImg=door17Img;
              doorRightImg=door17Img;
              break;
          case door17Img :
              doorLeftImg=door9Img;
              doorRightImg=door9Img;
              break;
      }
    }
    if (statutGame==="startscreen") {
        statutCount++;
        if (statutCount===3) {
            startscreen==="start1Img" ? startscreen="start2Img" : startscreen="start1Img";
            statutCount=0;
        }
    }
    if (blockToBreak===0 && statutGame==="ingame") statutGame="levelwin";
    refreshScreen();
}, 150)

// let the ball move
// let ball=[{"posX":320, "posY":476, "img":"ballImg", "froze":true, "directionPosX":-1, "directionPosY":1, "vitesse":100, "countMove":0, "active":0}];
setInterval(function() {
    let nbActive=0;
    for (let i=0; i<ball.length; i++) {
        if (ball[i]["froze"]===false) {
            ball[i]["countMove"]++;
            if (ball[i]["vitesse"] === ball[i]["countMove"]) {
                ball[i]["countMove"] = 0;
                ball[i]["posX"] = ball[i]["posX"]+ ball[i]["directionPosX"];
                ball[i]["posY"] = ball[i]["posY"] + ball[i]["directionPosY"];
            }
            if (ball[i]["posX"]>=622) {
                ball[i]["posX"]=622;
                ball[i]["directionPosX"]=-(Math.abs(ball[i]["directionPosX"]));
            }
            if (ball[i]["posX"]<=15) {
                ball[i]["posX"]=15;
                ball[i]["directionPosX"]=Math.abs(ball[i]["directionPosX"]);
            }
            if (ball[i]["posY"]<=16) {
                ball[i]["posY"]=16;
                ball[i]["directionPosY"]=Math.abs(ball[i]["directionPosY"]);
            }
            if ( (ball[i]["posY"]>=477) && ((ball[i]["posY"] - ball[i]["directionPosY"])<477) && (ball[i]["posX"]>=canonPosX) && (ball[i]["posX"]<=(canonPosX+widthCanon)) ) {
                ball[i]["directionPosY"]=-(Math.abs(ball[i]["directionPosY"]));
                ball[i]["posY"]=477;
            }
            if (ball[i]["posY"]>550) ball[i]["active"]=1;
            let posY = ball[i]["posY"];
            let posX = ball[i]["posX"];
            if (ball[i]["active"] === 0) {
                for (let j = 0; j < block.length; j++) {
                    if (block[j]["active"] === 0) {
                        let blockPosY = block[j]["posY"];
                        let blockPosX = block[j]["posX"];
                        if (collide(posX, posY, 14, 14, blockPosX, blockPosY, 44, 22) === true) {
                            if (block[j]["type"]==="blockgold") {
                                if (block[j]["animateActive"]===false) animateBlockGold(j);
                            }
                            else if (block[j]["type"]==="blocksilver" && block[j]["live"]>1) {
                                block[j]["live"] = block[j]["live"]-1;
                                if (block[j]["animateActive"]===false) animateBlockSilver(j);
                            }
                            else {
                                block[j]["live"] = block[j]["live"]-1;
                                block[j]["active"] = 1;
                                blockToBreak--;
                            }
                            changeBallAfterBlockCollide(posX, posY, blockPosX, blockPosY, i, j);
//                              score=score+boat[j]["vitesse"];
                        }
                    }
                }
            }
        }
        if (ball[i]["active"]===0) nbActive++;
    }
    if (nbActive===0 && statutGame!=="startscreen" && statutGame!=="loseLive") {
        loseLive();
    }
    refreshScreen();
}, 1)

// change the ball direction after collide a block
function changeBallAfterBlockCollide(posX, posY, blockPosX, blockPosY, idball, idblock) {

//if (blockPosX > ballPosX + ballWidth ||
//         blockPosX < ballPosX - blockWidth ||
//         blockPosY > ballPosY + ballLength ||
//         blockPosY < ballPosY - blockLength)
let directionPosX=ball[idball]["directionPosX"];
let directionPosY=ball[idball]["directionPosY"];
let yBeforeEnter=posY-directionPosY;
let difYBeforeEnter=0;
let nbToGoOutFromBottomAndTop=22/directionPosY;
if (yBeforeEnter>blockPosY) { //vient du bas
    difYBeforeEnter=yBeforeEnter-blockPosY;
}
if (yBeforeEnter<blockPosY) { //vient du haut
    difYBeforeEnter=blockPosY-yBeforeEnter;
}
if ((yBeforeEnter+difYBeforeEnter)*nbToGoOutFromBottomAndTop>22) {
    if ((posX - ball[idball]["directionPosX"]) <= blockPosX) {
        ball[idball]["directionPosX"] = -(Math.abs(ball[idball]["directionPosX"]));
    } else if ((posY - ball[idball]["directionPosX"]) >= blockPosY) {
        ball[idball]["directionPosX"] = Math.abs(ball[idball]["directionPosX"]);
    }
}

if ((posY - ball[idball]["directionPosY"]) <= blockPosY) {
    ball[idball]["directionPosY"] = -(Math.abs(ball[idball]["directionPosY"]));
} else if ((posY - ball[idball]["directionPosY"]) >= blockPosY) {
    ball[idball]["directionPosY"] = Math.abs(ball[idball]["directionPosY"]);
}
}

// Lose one live
function loseLive(statut) {
    if (statutGame!=="loseLive") {
      statutGame="loseLive";
      canonPosY=canonPosY-30;
      canonPosX=canonPosX+((widthCanon-80)/2);
      canonImg=canonLose1Img;
      setTimeout(function () { loseLive(2); }, 100);
    }
    if (statut===2) {
        canonImg=canonLose2Img;
        setTimeout(function () { loseLive(3); }, 100);
    }
    if (statut===3) {
        canonImg=canonLose3Img;
        setTimeout(function () { loseLive(4); }, 100);
    }
    if (statut===4) {
        canonImg=canonLose4Img;
        setTimeout(function () { loseLive(5); }, 100);
    }
    if (statut===5) {
        canonImg=canonLose5Img;
        setTimeout(function () { loseLive(6); }, 100);
    }
    if (statut===6) {
        canonImg=canonLose6Img;
        setTimeout(function () { loseLive(7); }, 100);
    }
    if (statut===7) {
        canonImg=canonLose7Img;
        setTimeout(function () { loseLive(8); }, 100);
    }
    if (statut===8) {
        canonImg=canonLose8Img;
        setTimeout(function () { loseLive(9); }, 100);
    }
    if (statut===9) {
        canonPosY = canonPosY + 30;
        live--;
        if (live>0) {
            statutGame="ingame";
            canonPosX=298;
            canonPosY=490;
            canonImg=canon1Img;
            widthCanon=110;
            ball=[{"posX":320, "posY":476, "img":"ballImg", "froze":true, "directionPosX":-2, "directionPosY":-2, "vitesse":4, "countMove":0, "active":0}];
        }
        else {
            statutGame="gameover";
            loadGameOver=1;
        }
    }
}

// animate gold block after collusion (if animateActive was false at the collusion time)
function animateBlockGold(id) {
    switch (block[id]["img"]) {
        case "blockGoldImg" :
            block[id]["img"] = "blockGold2Img";
            block[id]["animateActive"] = true;
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold2Img" :
            block[id]["img"] = "blockGold3Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold3Img" :
            block[id]["img"] = "blockGold4Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold4Img" :
            block[id]["img"] = "blockGold5Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold5Img" :
            block[id]["img"] = "blockGold6Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold6Img" :
            block[id]["img"] = "blockGold7Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold7Img" :
            block[id]["img"] = "blockGold8Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold8Img" :
            block[id]["img"] = "blockGold9Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold9Img" :
            block[id]["img"] = "blockGold10Img";
            refreshScreen();
            setTimeout(function () {
                animateBlockGold(id);
            }, 100);
            break;
        case "blockGold10Img" :
            block[id]["img"] = "blockGoldImg";
            block[id]["animateActive"] = false;
            refreshScreen();
            break;
    }
}

//animate silver block
    function animateBlockSilver(id) {
        switch (block[id]["img"]) {
            case "blockSilverImg" :
                block[id]["img"]="blockSilver2Img";
                block[id]["animateActive"]=true;
                refreshScreen();
                console.log(block);
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver2Img" :
                block[id]["img"]="blockSilver3Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver3Img" :
                block[id]["img"]="blockSilver4Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver4Img" :
                block[id]["img"]="blockSilver5Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver5Img" :
                block[id]["img"]="blockSilver6Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver6Img" :
                block[id]["img"]="blockSilver7Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver7Img" :
                block[id]["img"]="blockSilver8Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver8Img" :
                block[id]["img"]="blockSilver9Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver9Img" :
                block[id]["img"]="blockSilver10Img";
                refreshScreen();
                setTimeout(function () {
                    animateBlockSilver(id);
                }, 100);
                break;
            case "blockSilver10Img" :
                if (block[id]["live"]===1) block[id]["img"]="blockSilverCrashImg";
                else block[id]["img"]="blockSilverImg";
                block[id]["animateActive"]=false;
                refreshScreen();
                break;
        }
    }

// open and close the gate
function animateGate () {
    switch (gateStatut) {
        case 0 :
            gateLeftImg = gateSide2Img;
            gateRightImg = gateSide2Img;
            gateTopLeftImg = gateTop2Img;
            gateTopRightImg = gateTop2Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 1 :
            gateLeftImg = gateSide3Img;
            gateRightImg = gateSide3Img;
            gateTopLeftImg = gateTop3Img;
            gateTopRightImg = gateTop3Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 2 :
            gateLeftImg = gateSide4Img;
            gateRightImg = gateSide4Img;
            gateTopLeftImg = gateTop4Img;
            gateTopRightImg = gateTop4Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 3 :
            gateLeftImg = gateSide5Img;
            gateRightImg = gateSide5Img;
            gateTopLeftImg = gateTop5Img;
            gateTopRightImg = gateTop5Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 4 :
            gateLeftImg = gateSide6Img;
            gateRightImg = gateSide6Img;
            gateTopLeftImg = gateTop6Img;
            gateTopRightImg = gateTop6Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 5 :
            gateLeftImg = gateSide7Img;
            gateRightImg = gateSide7Img;
            gateTopLeftImg = gateTop7Img;
            gateTopRightImg = gateTop7Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 700);
            break;
        case 6 :
            gateLeftImg = gateSide6Img;
            gateRightImg = gateSide6Img;
            gateTopLeftImg = gateTop6Img;
            gateTopRightImg = gateTop6Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 7 :
            gateLeftImg = gateSide5Img;
            gateRightImg = gateSide5Img;
            gateTopLeftImg = gateTop5Img;
            gateTopRightImg = gateTop5Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 8 :
            gateLeftImg = gateSide4Img;
            gateRightImg = gateSide4Img;
            gateTopLeftImg = gateTop4Img;
            gateTopRightImg = gateTop4Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 9 :
            gateLeftImg = gateSide3Img;
            gateRightImg = gateSide3Img;
            gateTopLeftImg = gateTop3Img;
            gateTopRightImg = gateTop3Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 10 :
            gateLeftImg = gateSide2Img;
            gateRightImg = gateSide2Img;
            gateTopLeftImg = gateTop2Img;
            gateTopRightImg = gateTop2Img;
            gateStatut++;
            refreshScreen();
            setTimeout(function () {
                animateGate();
            }, 150);
            break;
        case 11 :
            gateLeftImg = gateSide1Img;
            gateRightImg = gateSide1Img;
            gateTopLeftImg = gateTop1Img;
            gateTopRightImg = gateTop1Img;
            gateStatut=0;
            refreshScreen();
            break;
    }
}

// open the gate
    setInterval(function() {
        animateGate();
        refreshScreen();
    }, 60000)

// animate canon
setInterval(function() {
    if (canonImg===canon1Img) canonImg=canon2Img;
    else if (canonImg===canon2Img) canonImg=canon3Img;
    else if (canonImg===canon3Img) canonImg=canon4Img;
    else if (canonImg===canon4Img) canonImg=canon1Img;
    refreshScreen();
}, 300)

// move the boulet
//setInterval(function() {

//    refreshScreen();
//}
//}, 100);

//send the boulet
//function fire() {
//    if (statutGame==="ingame") {
//        let idBoulet = boulet.length + 1;
//        let posX = canonPosX + 22;
//        let posY = canonPosY - 20;
//        boulet.push({"id": idBoulet, "posX": posX, "posY": posY, "active": 0});
//        refreshScreen();
//    }
//}

//make the canon move
function move(left, right) {
    if ((left===undefined || left===0) && (right===undefined || right===0)) {
        refreshScreen();
    }
    if (left===9 && canonPosX>28 && statutGame!=="finishlevel" && statutGame!=="loseLive") {
        canonPosX-=9;
        for (let i = 0; i < ball.length; i++) {
            if (ball[i]["froze"]) ball[i]["posX"]=ball[i]["posX"]-9;
        }
        refreshScreen()
    }
    if (left===9 && canonPosX<=28 && canonPosX>20 && statutGame==="ingame" && statutGame!=="finishlevel" && statutGame!=="loseLive") {
        let diff=0;
        for (let i = 0; i < ball.length; i++) {
            diff=ball[i]["posX"]-canonPosX;
            if (ball[i]["froze"]) ball[i]["posX"]=19+diff;
        }
        canonPosX=19;
        refreshScreen()
    }
    if (right===9 && canonPosX<523 && statutGame!=="finishlevel" && statutGame!=="loseLive") {
        canonPosX+=9;
        for (let i = 0; i < ball.length; i++) {
            if (ball[i]["froze"]) ball[i]["posX"]=ball[i]["posX"]+9;
        }
        refreshScreen();
    }
    if (right===9 && canonPosX>=523 && canonPosX<529 && statutGame==="ingame" && statutGame!=="finishlevel" && statutGame!=="loseLive") {
        let diff=0;
        for (let i = 0; i < ball.length; i++) {
            diff=canonPosX-ball[i]["posX"];
            if (ball[i]["froze"]) ball[i]["posX"]=528-diff;
        }
        canonPosX=528;
        refreshScreen();
    }
    if (left===9 && canonPosX<=28 && canonPosX>20 && statutGame==="levelwin" && statutGame!=="finishlevel" && statutGame!=="loseLive") {
        finishLeft();
        for (let i=0; i<ball.length; i++) {
            ball[i]["froze"]=true;
        }
        statutGame="finishlevel";
    }
    if (right===9 && canonPosX>=523 && canonPosX<529 && statutGame==="levelwin" && statutGame!=="finishlevel" && statutGame!=="loseLive") {
        finishRight();
        for (let i=0; i<ball.length; i++) {
            ball[i]["froze"]=true;
        }
        statutGame="finishlevel";
    }
}

function finishLeft () {
        canonPosX--;
        refreshScreen();
        if (canonPosX>-110) setTimeout(function(){ finishLeft(); }, 15);
}
function finishRight () {
    canonPosX++;
    refreshScreen();
    if (canonPosX<650) setTimeout(function(){ finishRight(); }, 15);
}

//listen for move and fire and catch name of the player
window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" || event.key === "Left") {
       move(9);
    }
    if (event.key === "ArrowRight" || event.key === "Right") {
        move(0, 9);
    }
    if (event.key === " ") {
//        fire();
        for (let i=0; i<ball.length; i++) {
            ball[i]["froze"] = false;
        }
    }
});

// listen to click to play or replay
document.getElementById("play").addEventListener("click", (event)=>{
    event.preventDefault();
    block=level1;
    live=3;
    for (let i = 0; i < block.length; i++) {
        blockToBreak=blockToBreak+block[i]["live"];
    }
    statutGame="ingame";
    document.getElementById("play").style.display="none"
    console.log(blockToBreak);
})

//document.getElementById("replay").addEventListener("click", (event)=>{
//    event.preventDefault();
//    statutGame="ingame";
//    document.getElementById("replay").style.display="none";
//    boulet = [{ "id":0, "posX":-20, "posY":-20, "active":0 }] ;
//    boat = [{ "id":0, "posX":20, "posY":0, "img":"boat1Img", "vitesse":1, "active":0 }] ;
//    score=0;
//    loadGameOver=0;
//    live=5;
//    draw();
//})

// load game
setTimeout(function(){ refreshScreen(); }, 700);

})();
