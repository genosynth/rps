function rpsGame(yourChoice) {
    console.log(yourChoice);
    
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numToChoice(randToRpsInt());
  
    console.log("Your Choice is " + humanChoice);
    console.log("Bot Choice is " + botChoice);
    results = decideWinner(humanChoice,botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}


function randToRpsInt(){
return Math.floor(Math.random()*3);
}

function numToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

var rpsDatabase;
function decideWinner(yourChoice, computerChoice){

    var rpsDatabase = {
        'rock': {
            'rock': 1,
            'paper': 0,
            'scissors': 3
        },
        'paper':{
            'rock': 3,
            'paper': 1,
            'scissors': 0
        },
        'scissors': {
            'rock': 0,
            'paper': 3,
            'scissors': 1
        }
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore, userTotal, cpuTotal]) {
    userTotal = 0;
    cpuTotal = 0;
    if (yourScore ===0){
        cpuTotal = cpuTotal + 3;
        console.log("Your score is " + userTotal);
        console.log("CPU score is " + cpuTotal);
        return{'message': 'YOU LOST !', 'color': 'red'};

    }   else if (yourScore ===1) {
        userTotal = userTotal + 1;
        cpuTotal = cpuTotal +1;
        console.log("Your score is " + userTotal);
        console.log("CPU score is " + cpuTotal);
        return {'message': 'YOU TIED!', 'color': 'yellow'};

    }   else {
        userTotal = userTotal + 3;
        console.log("Your score is " + userTotal);
        console.log("CPU score is " + cpuTotal);
        return {'message': 'YOU WON !', 'color': 'green'};
    }
    
    
}

    


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src


    }
    //remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var resetDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height='500'; style='background: blue; box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>"
    messageDiv.innerHTML = "<h3 style'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] +"</h3>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height='500'; style='background: red; box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    //resetDiv.innerHTML = userTotal + cpuTotal;
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    //document.getElementById('score-box').appendChild(resetDiv);
}

function reset([]){

   
}

    