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
let canonBonus="";
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
let ball=[{"posX":320, "posY":476, "img":"ballImg", "froze":true, "directionPosX":-2, "directionPosY":-2, "vitesse":5, "countMove":0, "active":0, "angle":45, "clue":40}];
let gameoverImg = document.getElementById("gameover");
let loadGameOver=0;
let statutGame="startscreen";
let statutCount=0;
let start1Img = document.getElementById("start1Img");
let start2Img = document.getElementById("start2Img");
let startscreen="start1Img";
let level=1;
let bonusClue1Img = document.getElementById("bonusclue1");
let bonusClue2Img = document.getElementById("bonusclue2");
let bonusClue3Img = document.getElementById("bonusclue3");
let bonusClue4Img = document.getElementById("bonusclue4");
let bonusClue5Img = document.getElementById("bonusclue5");
let bonusClue6Img = document.getElementById("bonusclue6");
let bonusClue7Img = document.getElementById("bonusclue7");
let bonusClue8Img = document.getElementById("bonusclue8");
let bonusMult1Img = document.getElementById("bonusmult1");
let bonusMult2Img = document.getElementById("bonusmult2");
let bonusMult3Img = document.getElementById("bonusmult3");
let bonusMult4Img = document.getElementById("bonusmult4");
let bonusMult5Img = document.getElementById("bonusmult5");
let bonusMult6Img = document.getElementById("bonusmult6");
let bonusMult7Img = document.getElementById("bonusmult7");
let bonusMult8Img = document.getElementById("bonusmult8");
let bonusLive1Img = document.getElementById("bonuslive1");
let bonusLive2Img = document.getElementById("bonuslive2");
let bonusLive3Img = document.getElementById("bonuslive3");
let bonusLive4Img = document.getElementById("bonuslive4");
let bonusLive5Img = document.getElementById("bonuslive5");
let bonusLive6Img = document.getElementById("bonuslive6");
let bonusLive7Img = document.getElementById("bonuslive7");
let bonusLive8Img = document.getElementById("bonuslive8");
let bonusspdo1Img = document.getElementById("bonusspdo1");
let bonusspdo2Img = document.getElementById("bonusspdo2");
let bonusspdo3Img = document.getElementById("bonusspdo3");
let bonusspdo4Img = document.getElementById("bonusspdo4");
let bonusspdo5Img = document.getElementById("bonusspdo5");
let bonusspdo6Img = document.getElementById("bonusspdo6");
let bonusspdo7Img = document.getElementById("bonusspdo7");
let bonusspdo8Img = document.getElementById("bonusspdo8");
let bonusspup1Img = document.getElementById("bonusspup1");
let bonusspup2Img = document.getElementById("bonusspup2");
let bonusspup3Img = document.getElementById("bonusspup3");
let bonusspup4Img = document.getElementById("bonusspup4");
let bonusspup5Img = document.getElementById("bonusspup5");
let bonusspup6Img = document.getElementById("bonusspup6");
let bonusspup7Img = document.getElementById("bonusspup7");
let bonusspup8Img = document.getElementById("bonusspup8");
let saturne1Img = document.getElementById("saturne1");
let saturne2Img = document.getElementById("saturne2");
let saturne3Img = document.getElementById("saturne3");
let saturne4Img = document.getElementById("saturne4");
let saturne5Img = document.getElementById("saturne5");
let saturne6Img = document.getElementById("saturne6");
let saturne7Img = document.getElementById("saturne7");
let saturne8Img = document.getElementById("saturne8");
let saturne9Img = document.getElementById("saturne9");
let saturne10Img = document.getElementById("saturne10");
let saturne11Img = document.getElementById("saturne11");
let saturne12Img = document.getElementById("saturne12");
let saturne13Img = document.getElementById("saturne13");
let saturne14Img = document.getElementById("saturne14");
let saturne15Img = document.getElementById("saturne15");
let saturne16Img = document.getElementById("saturne16");
let saturne17Img = document.getElementById("saturne17");
let saturne18Img = document.getElementById("saturne18");
let saturne19Img = document.getElementById("saturne19");
let saturne20Img = document.getElementById("saturne20");
let saturne21Img = document.getElementById("saturne21");
let saturne22Img = document.getElementById("saturne22");
let saturne23Img = document.getElementById("saturne23");
let saturne24Img = document.getElementById("saturne24");
let saturne25Img = document.getElementById("saturne25");
let bonus=[];
let ballDuplicate=[];
let enemy=[];
let score=0;
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

function collideEnemy (ballPosX, ballPosY, ballWidth, ballLength, blockPosX, blockPosY) {
    blockPosX=blockPosX+1;
    blockPosY=blockPosY+1;
    let blockWidth=34;
    let blockLength=34;
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
        if (live > 11)  ctx.drawImage(liveImg, 400, 525);
        if (live > 10)  ctx.drawImage(liveImg, 420, 525);
        if (live > 9)  ctx.drawImage(liveImg, 440, 525);
        if (live > 8)  ctx.drawImage(liveImg, 460, 525);
        if (live > 7)  ctx.drawImage(liveImg, 480, 525);
        if (live > 6)  ctx.drawImage(liveImg, 500, 525);
        if (live > 5)  ctx.drawImage(liveImg, 520, 525);
        if (live > 4)  ctx.drawImage(liveImg, 540, 525);
        if (live > 3)  ctx.drawImage(liveImg, 560, 525);
        if (live > 2)  ctx.drawImage(liveImg, 580, 525);
        if (live > 1)  ctx.drawImage(liveImg, 600, 525);
        for (let i = 0; i < enemy.length; i++) {
            if (enemy[i]["active"]===0) ctx.drawImage(eval(enemy[i]["img"]), enemy[i]["posX"], enemy[i]["posY"]);
        }
        for (let i = 0; i < bonus.length; i++) {
            if (bonus[i]["active"]===0) ctx.drawImage(eval(bonus[i]["img"]), bonus[i]["posX"], bonus[i]["posY"]);
        }
//        if (live < 1) loadGameOver++;
        ctx.font = '30px serif';
        ctx.fillStyle = "white";
        ctx.fillText(score, 20, 545);
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

// rand bonus
function randBonus(blockPosX, blockPosY) {
    let random=rand(100);
    let idbonus=bonus.length;
    if (random<=5) {
        bonus.push({"id": idbonus, "posX": blockPosX, "posY": blockPosY, "img": "bonusClue1Img", "active": 0, "delay":0, "type":"clue"});
    }
    if (random>5 && random<=10) {
        bonus.push({"id": idbonus, "posX": blockPosX, "posY": blockPosY, "img": "bonusMult1Img", "active": 0, "delay":0, "type":"multiball"});
    }
    if (random>10 && random<=11) {
        bonus.push({"id": idbonus, "posX": blockPosX, "posY": blockPosY, "img": "bonusLive1Img", "active": 0, "delay":0, "type":"live"});
    }
    if (random>11 && random<=18) {
        bonus.push({"id": idbonus, "posX": blockPosX, "posY": blockPosY, "img": "bonusspup1Img", "active": 0, "delay":0, "type":"speedUp"});
    }
    if (random>18 && random<=22) {
        bonus.push({"id": idbonus, "posX": blockPosX, "posY": blockPosY, "img": "bonusspdo1Img", "active": 0, "delay":0, "type":"speedDown"});
    }
}

// take a bonus
function takeBonus(type) {
    if (type==="clue") canonBonus="clue";
    if (type==="live") live++;
    if (type==="speedUp") {
        for (let i=0; i<ball.length;i++) {
            ball[i]["vitesse"]=ball[i]["vitesse"]-1;
        }
    }
    if (type==="speedDown") {
        for (let i=0; i<ball.length;i++) {
            ball[i]["vitesse"]=ball[i]["vitesse"]+1;
        }
    }
    if (type==="multiball") {
        let ball1X=0;
        let ball1Y=0;
        let ball2X=0;
        let ball2Y=0;
        let ballDuplicate=[];
        for (let i=0; i<ball.length;i++) {
            if (ball[i]["directionPosX"] < 0 && ball[i]["directionPosY"] < 0) {
                ball1X=Math.abs(ball[i]["directionPosX"]);
                ball1Y=Math.abs(ball[i]["directionPosY"]);
                ball2X=Math.abs(ball[i]["directionPosX"]);
                ball2Y=-(Math.abs(ball[i]["directionPosY"]));
            }
            if (ball[i]["directionPosX"] > 0 && ball[i]["directionPosY"] > 0) {
                ball1X=-(Math.abs(ball[i]["directionPosX"]));
                ball1Y=-(Math.abs(ball[i]["directionPosY"]));
                ball2X=Math.abs(ball[i]["directionPosX"]);
                ball2Y=-(Math.abs(ball[i]["directionPosY"]));
            }
            if (ball[i]["directionPosX"] > 0 && ball[i]["directionPosY"] < 0) {
                ball1X=-(Math.abs(ball[i]["directionPosX"]));
                ball1Y=Math.abs(ball[i]["directionPosY"]);
                ball2X=-(Math.abs(ball[i]["directionPosX"]));
                ball2Y=-(Math.abs(ball[i]["directionPosY"]));
            }
            if (ball[i]["directionPosX"] < 0 && ball[i]["directionPosY"] >= 0) {
                ball1X=Math.abs(ball[i]["directionPosX"]);
                ball1Y=Math.abs(ball[i]["directionPosY"]);
                ball2X=Math.abs(ball[i]["directionPosX"]);
                ball2Y=-(Math.abs(ball[i]["directionPosY"]));
            }
            if (ball1X===0) ball1X=0.246513;
            if (ball1Y===0) ball1Y=2.817663;
            if (ball2X===0) ball2X=-0.246513;
            if (ball2Y===0) ball2Y=-2.817663;
            ballDuplicate.push({"posX":ball[i]["posX"], "posY":ball[i]["posY"], "img":"ballImg", "froze":false, "directionPosX":ball1X, "directionPosY":ball1Y, "vitesse":ball[i]["vitesse"], "countMove":0, "active":0, "angle":ball[i]["angle"]});
            ballDuplicate.push({"posX":ball[i]["posX"], "posY":ball[i]["posY"], "img":"ballImg", "froze":false, "directionPosX":ball2X, "directionPosY":ball2Y, "vitesse":ball[i]["vitesse"], "countMove":0, "active":0, "angle":ball[i]["angle"]});
        }
        for (let i=0; i<ballDuplicate.length;i++) {
            ball.push({"posX":ballDuplicate[i]["posX"], "posY":ballDuplicate[i]["posY"], "img":"ballImg", "froze":false, "directionPosX":ballDuplicate[i]["directionPosX"], "directionPosY":ballDuplicate[i]["directionPosY"], "vitesse":ballDuplicate[i]["vitesse"], "countMove":0, "active":0, "angle":ballDuplicate[i]["angle"], "clue":40});
        }
    }
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
setInterval(function() {
    let nbActive=0;
    for (let i=0; i<ball.length; i++) {
        if (ball[i]["froze"]===false) {
            ball[i]["countMove"]++;
            if (ball[i]["vitesse"] < ball[i]["countMove"]) {
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
                if (canonBonus==="clue") {
                    ball[i]["froze"]=true;
                    ball[i]["clue"]=ball[i]["posX"]-canonPosX;
                }
                let touch=ball[i]["posX"]-canonPosX;
                if (touch<5) { ball[i]["directionPosY"]=-0.246513  ; ball[i]["directionPosX"]=-2.817663; }
                if (touch>=5 && touch<12) { ball[i]["directionPosY"]=-0.732050 ; ball[i]["directionPosX"]=-2.732050; }
                if (touch>=12 && touch<20) { ball[i]["directionPosY"]=-1.414213 ; ball[i]["directionPosX"]=-2.449489;  }
                if (touch>=20 && touch<28) { ball[i]["directionPosY"]=-2 ; ball[i]["directionPosX"]=-2;  }
                if (touch>=28 && touch<36) { ball[i]["directionPosY"]=-2.449489 ; ball[i]["directionPosX"]=-1.414213;  }
                if (touch>=36 && touch<45) { ball[i]["directionPosY"]=-2.785456 ; ball[i]["directionPosX"]=-0.491151;  }
                if (touch>=45 && touch<55) { ball[i]["directionPosY"]=-2.828 ; ball[i]["directionPosX"]=0;  }
                if (touch>=55 && touch<64) { ball[i]["directionPosY"]=-2.785456 ; ball[i]["directionPosX"]=0.491151;  }
                if (touch>=64 && touch<72) { ball[i]["directionPosY"]=-2.449489 ; ball[i]["directionPosX"]=1.414213;  }
                if (touch>=72 && touch<80) { ball[i]["directionPosY"]=-2 ; ball[i]["directionPosX"]=2;  }
                if (touch>=80 && touch<88) { ball[i]["directionPosY"]=-1.414213 ; ball[i]["directionPosX"]=2.449489;  }
                if (touch>=88 && touch<95) { ball[i]["directionPosY"]=-0.732050 ; ball[i]["directionPosX"]=2.732050;  }
                if (touch>95) { ball[i]["directionPosY"]=-0.246513  ; ball[i]["directionPosX"]=2.817663;  }
                ball[i]["vitesse"]=ball[i]["vitesse"]-0.05;
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
                                ball[i]["vitesse"]=ball[i]["vitesse"]-0.05;
                            }
                            else if (block[j]["type"]==="blocksilver" && block[j]["live"]>1) {
                                block[j]["live"] = block[j]["live"]-1;
                                if (block[j]["animateActive"]===false) animateBlockSilver(j);
                                ball[i]["vitesse"]=ball[i]["vitesse"]-0.05;
                            }
                            else {
                                block[j]["live"] = block[j]["live"]-1;
                                block[j]["active"] = 1;
                                blockToBreak--;
                                randBonus(blockPosX, blockPosY);
                                ball[i]["vitesse"]=ball[i]["vitesse"]-0.05;
                                score=score+10;
                            }
                            changeBallAfterBlockCollide(posX, posY, blockPosX, blockPosY, i, j);
                        }
                    }
                }
                for (let j = 0; j < enemy.length; j++) {
                    if (enemy[j]["active"] === 0) {
                        let blockPosY = enemy[j]["posY"];
                        let blockPosX = enemy[j]["posX"];
                        if (collideEnemy(posX, posY, 14, 14, blockPosX, blockPosY) === true) {
                            enemy[j]["active"] = 1;
                            ball[i]["vitesse"]=ball[i]["vitesse"]-0.50;
                            changeBallAfterBlockCollideEnemy(posX, posY, blockPosX, blockPosY, i, j);
                            score=score+25;
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
    for (let i = 0; i < bonus.length; i++) {
        bonus[i]["delay"]=bonus[i]["delay"]+1;
        if (bonus[i]["delay"]===2) {
            bonus[i]["posY"] = bonus[i]["posY"] + 1;
            bonus[i]["delay"]=0;
        }
        let img=bonus[i]["img"];
        let imgNumb=img.substr(9,1);
        imgNumb++;
        if (imgNumb===9) imgNumb=1;
        bonus[i]["img"]=img.substr(0,9) + imgNumb + "Img";
        if ( (bonus[i]["posY"]>=477) && (bonus[i]["posY"]<490) && (bonus[i]["posX"]>=canonPosX-44) && (bonus[i]["posX"]<=(canonPosX+widthCanon)) && (bonus[i]["active"]===0) ) {
            bonus[i]["active"]=1;
            takeBonus(bonus[i]["type"]);
        }
    }

    for (let i = 0; i < enemy.length; i++) {
        enemy[i]["delay"]=enemy[i]["delay"]+1;
        if (enemy[i]["delay"]===25) {
            enemy[i]["delay"] = 0;
            let newPosX = rand(10);
            let newPosY = rand(10);
            if (enemy[i]["posX"] < 16) enemy[i]["nextPosX"] = 2;
            else if (enemy[i]["posX"] > 621) enemy[i]["nextPosX"] = -2;
            else {
                if (newPosX === 1) enemy[i]["nextPosX"] = -3;
                if (newPosX === 2) enemy[i]["nextPosX"] = 3;
            }
            if (enemy[i]["posY"] < 17) enemy[i]["nextPosY"] = 2;
            else if (enemy[i]["posY"] > 621) enemy[i]["nextPosY"] = -2;
            else {
                if (newPosY === 1) enemy[i]["nextPosY"] = -3;
                if (newPosY === 2) enemy[i]["nextPosY"] = 3;
            }
            let img = enemy[i]["img"];
            let imgNumb = img.substr(7, 1);
            imgNumb++;
            if (imgNumb === 26) imgNumb = 1;
            enemy[i]["img"] = img.substr(0, 7) + imgNumb + "Img";
        }
        if (enemy[i]["delay"]%10===0) {
            enemy[i]["posY"]=enemy[i]["posY"]+enemy[i]["nextPosY"];
            enemy[i]["posX"]=enemy[i]["posX"]+enemy[i]["nextPosX"];
        }
    }

    refreshScreen();
}, 1)

// change the ball direction after collide a block
function changeBallAfterBlockCollide(posX, posY, blockPosX, blockPosY, idball, idblock) {
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

// change the ball direction after collide a block
function changeBallAfterBlockCollideEnemy(posX, posY, blockPosX, blockPosY, idball, idblock) {
    for (let i=0; i<ball.length;i++) {
    let touch=rand(100);
    if (touch<5) { ball[i]["directionPosY"]=-0.246513  ; ball[i]["directionPosX"]=-2.817663; }
    if (touch>=5 && touch<12) { ball[i]["directionPosY"]=-0.732050 ; ball[i]["directionPosX"]=-2.732050; }
    if (touch>=12 && touch<20) { ball[i]["directionPosY"]=-1.414213 ; ball[i]["directionPosX"]=-2.449489;  }
    if (touch>=20 && touch<28) { ball[i]["directionPosY"]=-2 ; ball[i]["directionPosX"]=-2;  }
    if (touch>=28 && touch<36) { ball[i]["directionPosY"]=-2.449489 ; ball[i]["directionPosX"]=-1.414213;  }
    if (touch>=36 && touch<45) { ball[i]["directionPosY"]=-2.785456 ; ball[i]["directionPosX"]=-0.491151;  }
    if (touch>=45 && touch<55) { ball[i]["directionPosY"]=-2.828 ; ball[i]["directionPosX"]=0.1;  }
    if (touch>=55 && touch<64) { ball[i]["directionPosY"]=-2.785456 ; ball[i]["directionPosX"]=0.491151;  }
    if (touch>=64 && touch<72) { ball[i]["directionPosY"]=-2.449489 ; ball[i]["directionPosX"]=1.414213;  }
    if (touch>=72 && touch<80) { ball[i]["directionPosY"]=-2 ; ball[i]["directionPosX"]=2;  }
    if (touch>=80 && touch<88) { ball[i]["directionPosY"]=-1.414213 ; ball[i]["directionPosX"]=2.449489;  }
    if (touch>=88 && touch<95) { ball[i]["directionPosY"]=-0.732050 ; ball[i]["directionPosX"]=2.732050;  }
    if (touch>95) { ball[i]["directionPosY"]=-0.246513  ; ball[i]["directionPosX"]=2.817663;  }
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
        canonBonus="";
        if (live>0) {
            statutGame="ingame";
            canonPosX=298;
            canonPosY=490;
            canonImg=canon1Img;
            widthCanon=110;
            ball=[{"posX":320, "posY":476, "img":"ballImg", "froze":true, "directionPosX":-2, "directionPosY":-2, "vitesse":4, "countMove":0, "active":0, "angle":45, "clue":40}];
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
            let enemyLeft=rand(2);
            let enemyRight=rand(2);
            let enemyTopLeft=rand(2);
            let enemyTopRight=rand(2);
            let enemyId=enemy.length;
            if (enemyLeft===1) { enemy.push({"id":enemyId, "posX":-2, "posY":162, "active":0, "img":"saturne1", "delay":0, "nextPosY":-2, "nextPosX":2}); enemyId++; }
            if (enemyRight===1) { enemy.push({"id":enemyId, "posX":630, "posY":162, "active":0, "img":"saturne1", "delay":0, "nextPosY":-2, "nextPosX":-2}); enemyId++; }
            if (enemyTopLeft===1) { enemy.push({"id":enemyId, "posX":177, "posY":-2, "active":0, "img":"saturne1", "delay":0, "nextPosY":-2, "nextPosX":2}); enemyId++; }
            if (enemyTopRight===1) { enemy.push({"id":enemyId, "posX":432, "posY":-2, "active":0, "img":"saturne1", "delay":0, "nextPosY":-2, "nextPosX":-2}); enemyId++; }
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
        else nextLevel();
}
function finishRight () {
    canonPosX++;
    refreshScreen();
    if (canonPosX<650) setTimeout(function(){ finishRight(); }, 15);
    else nextLevel();
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

// listen to mouse move
document.addEventListener("mousemove", mouseMoveHandler, false);
    function mouseMoveHandler(e) {
        if (statutGame!=="finishlevel" && statutGame!=="loseLive") {
            let relativeX = e.clientX - c.offsetLeft;
            if (relativeX > 0 && relativeX < c.width) {
                canonPosX = relativeX - widthCanon / 2;
                if(canonPosX<19) canonPosX=19;
                if(canonPosX>528) canonPosX=528;
                let diff=0;
                for (let i = 0; i < ball.length; i++) {
                    if (ball[i]["froze"]===true) ball[i]["posX"]=canonPosX+ball[i]["clue"];
                }
                if (canonPosX>=523 && canonPosX<529 && statutGame==="levelwin" && statutGame!=="finishlevel" && statutGame!=="loseLive") {
                    finishRight();
                    for (let i=0; i<ball.length; i++) {
                        ball[i]["froze"]=true;
                    }
                    statutGame="finishlevel";
                }
                if (canonPosX<=28 && canonPosX>20 && statutGame==="levelwin" && statutGame!=="finishlevel" && statutGame!=="loseLive") {
                    finishLeft();
                    for (let i=0; i<ball.length; i++) {
                        ball[i]["froze"]=true;
                    }
                    statutGame="finishlevel";
                }
            }
        }
    }


//next level
function nextLevel() {
    level++;
    let nextLevel="level"+level.toString();
    block=eval(nextLevel);
    for (let i = 0; i < block.length; i++) {
        blockToBreak=blockToBreak+block[i]["live"];
    }
    statutGame="ingame";
    ball=[{"posX":320, "posY":476, "img":"ballImg", "froze":true, "directionPosX":-2, "directionPosY":-2, "vitesse":5, "countMove":0, "active":0, "angle":45, "clue":40}];
    doorLeftImg=door1Img;
    doorRightImg=door1Img;
    canonPosX=298;
    canonPosY=490;
    canonImg=canon1Img;
    canonBonus="";
    bonus=[];
    enemy=[];
    widthCanon=110;
}

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
})

// load game
setTimeout(function(){ refreshScreen(); }, 700);

})();
