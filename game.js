var gamePattern = [];
var buttonColors = ["red" , "blue" , "green" , "yellow"];
var playerAnswer = [];
var level = 0;
var started = false;
var wait = 100;




function nextSequence(){
    ++level;
    
    if(started){
    $("h1").text("level " + level);
    for(var i = 0; i < level; i++){
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColors[randomNumber]);
    
    
    
    }
    
    
   showSequence();
}
    
   
        
    
    
    
       
 
}

    

    



$(".btn").click(function(){
    
    var userAnswer = $(this).attr("id");
    playerAnswer.push(userAnswer);
    pressedAnimate(userAnswer);
    checkAnswer(playerAnswer.length - 1);





});

$(document).keypress(function(){
if(!started){
    console.log("level = " + level);
    started = true;
    nextSequence();
    
}
});


function playSound(currentColor){
    var audio = new Audio("sounds/" + currentColor + ".mp3");
    audio.play();
}


function pressedAnimate(color){
    playSound(color);
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    },100);
    
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === playerAnswer[currentLevel]){
        
        if(gamePattern.length === playerAnswer.length){
            
            gamePattern.length = 0;
            playerAnswer.length = 0;
            wait = 100;
            setTimeout(function(){nextSequence();}, 1000);
    
        }
        
    }else {
        gameOver();
    }

    
}


function showSequence(){
    var x = 0;
    
        
            while(x < level){
            ex(x);
            ++x;
            }
            
        
        
        
    
        

    
}

function ex(x){
    
    wait += 300;
    setTimeout(function(){$("#" + gamePattern[x]).fadeOut(100).fadeIn(100);
    playSound(gamePattern[x]);},wait);
        
}


function gameOver(){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    started = false;
    gamePattern.length = 0;
    playerAnswer.length = 0;
    wait = 100;
    level = 0;
    $("h1").text("Press any Key to Restart");


}