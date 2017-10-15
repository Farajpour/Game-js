let rockChoice = "<i class='fa fa-hand-rock-o color'></i>";
let paperChoice = "<i class='fa fa-hand-paper-o color'></i>";
let scisChoice = "<i class='fa fa-hand-scissors-o color'></i>";

let pcChoice = [rockChoice, paperChoice , scisChoice];
let pcResult; 

let youScore = document.getElementById("you-score");
let pcScore = document.getElementById("pc-score");
youScore.innerHTML = 0;
pcScore.innerHTML = 0 ;

let showChoice = document.getElementById("show");
let tieScore = document.getElementById("tie");

let gameRound = 0;

function roundPlus (){
    console.log(gameRound++);
};

function roundFinish(){
    if(gameRound == 5){
        showChoice.innerHTML = "";
        tieScore.innerHTML = "";

        showChoice.innerHTML = "The result of playing five times"+"<br>" 
        + "computer score :" + "<span>" + pcScore.innerHTML + "</span>" + 
        "<br>" + "you score :"+ "<span>" + youScore.innerHTML + "</span>";

        document.getElementById("hidden1").style.display ="none";
        document.getElementById("hidden2").style.display ="none";
        showChoice.style.fontSize = "3rem";

        }
};

function rockClick(){
    tieScore.innerHTML = "";
    pcResult = pcChoice[Math.floor(Math.random()*pcChoice.length)];
    showChoice.innerHTML =  pcResult + rockChoice ;
    if (pcResult === rockChoice){
        tieScore.innerHTML = "The result is a tie!";
    }else if(pcResult === paperChoice){
        pcScore.innerHTML ++;

    }else if(pcResult === scisChoice){
        youScore.innerHTML ++; 
    };
    roundPlus();
    roundFinish();
}

function paperClick() {
    tieScore.innerHTML = "";
    pcResult = pcChoice[Math.floor(Math.random()*pcChoice.length)];
    showChoice.innerHTML =  pcResult + paperChoice ;
    if (pcResult === paperChoice){
        tieScore.innerHTML = "The result is a tie!";
    }else if(pcResult === rockChoice){
        youScore.innerHTML ++;
    }else if(pcResult === scisChoice){
        pcScore.innerHTML ++;
    }      
    roundPlus();
    roundFinish();
}

function scissorsClick() {
    tieScore.innerHTML = "";
    pcResult = pcChoice[Math.floor(Math.random()*pcChoice.length)];
    showChoice.innerHTML =  pcResult + scisChoice;
    if (pcResult === scisChoice){
        tieScore.innerHTML = "The result is a tie!";
    }else if(pcResult === rockChoice){
        pcScore.innerHTML ++;
    }else if(pcResult === paperChoice){
        youScore.innerHTML ++;
    }
    roundPlus();
    roundFinish();    
}

