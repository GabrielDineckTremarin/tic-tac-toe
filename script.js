let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

let b1 = document.getElementById("block-1");
let b2 = document.getElementById("block-2");
let b3 = document.getElementById("block-3");
let b4 = document.getElementById("block-4");
let b5 = document.getElementById("block-5");
let b6 = document.getElementById("block-6");
let b7 = document.getElementById("block-7");
let b8 = document.getElementById("block-8");
let b9 = document.getElementById("block-9");

//play counter
//these variables will count the amount of times each player played
let player1 = 0, player2 = 0;

//adding events to the boxes
boxes.forEach((box) => {
    box.addEventListener('click', checkElementAndAppend) 
})

function checkElementAndAppend() {
    let element = checkElement(player1, player2);//this line will check if it's a X or O turn
    if(this.childNodes.length == 0){
        //this condition will check if there's a X or O in the box,
        //if there isn't an element in the box, it will append one 
        this.appendChild(element);

        if(player1 == player2) {
            player1++;
            if(secondPlayer == 'ai-player' && !checkWinCondition()) {

                computerPlay()
                player2++;
            }          
        } else {
            player2++;
        }   
    }
        checkWinCondition()
}

//this is an event to pick playing against the machine or against another player
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        new Audio('media/clickSoundEffect.mp3').play()
        secondPlayer = button.getAttribute("id");  
        buttons.forEach(btn => btn.style.display = 'none')

        setTimeout(() => {
            let container = document.querySelector("#container");
            container.classList.remove("hide")
        }, 500)
    });  
});








//this function verifies each player's turn to play
function checkElement(player1, player2){
    if(player1 == player2) {
        element = x.cloneNode(true)
    } else {
        element = o.cloneNode(true)
    }
    return element;
}

//this function checks who won
function checkWinCondition() {
    let j = 0;
    
    //Horizontal: first line
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            declareWinner('x');
            j = 1;
            return true
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }

    //Horizontal: second line
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
 
        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            declareWinner('x');
            j = 1;
            return true
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }

    //Horizontal: third line
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            declareWinner('x');
            j = 1;
            return true
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }        


    //Vertical: first collumn
   if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
   
        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            declareWinner('x');
            j = 1;
            return true    
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }   

    //Vertical: second collumn
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            declareWinner('x');
            j = 1;
            return true
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }       

    //Vertical: third collumn
   if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            declareWinner('x');
            j = 1;
            return true
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }      
    
    


    //Principal diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
 
        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){

            declareWinner('x');
            j = 1;
            return true
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }    
    
    //Secondary diagonal
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
 
        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            declareWinner('x');
            j = 1;
            return true
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            declareWinner('o');
            j = 1;
        }
    }     
    let counter = 0;
    boxes.forEach((box) => {
        if(box.childNodes[0] != undefined){
            counter++;
        }
    })

    if(counter == 9 && j == 0){
        declareWinner('no one');
    }
    return false
}

//clean the board and update the scoreboard
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = ''

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = 'Player 1 wins!';
        new Audio("media/player1Wins.mp3").play()
    } else if(winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = 'Player 2 wins!';
        new Audio("media/player2Wins.mp3").play()
    } else {
        msg = 'No one wins!';
        new Audio("media/NooneWins.mp3").play()
    }

    //show message
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide")
    boxes.forEach(box => box.removeEventListener('click',checkElementAndAppend))

    //hide message
    setTimeout(() => {
        
        messageContainer.classList.add("hide")
        boxes.forEach(box => {
            box.addEventListener('click',checkElementAndAppend)
            box.innerHTML = ''      
        })
    },2500)

    player1 = 0;
    player2 = 0;
}


function computerPlay() {

    if(!threatChecker('o')) {
        if(!threatChecker('x')){
            let cloneO = o.cloneNode(true);
            let counter = 0;
            let filled = 0;
        
            for(let i = 0; i < boxes.length; i++) {
                let randomNumber = Math.floor(Math.random()*5);    
                if(boxes[i].childNodes[0] == undefined ) {        
                    if(randomNumber <= 1) {
                        boxes[i].appendChild(cloneO);
                        counter++;
                        break;
                    }
                }  else {
                    filled++;
                }
            }
            if(counter == 0 && filled < 9){
                computerPlay()
            }
        }
    } 
}


/*
A threat is when you have two X's or O's lined up horizontaly, vertically or diagonally.

Ex:  X | X | empty

A threat is also when you have two X's or O's with an empty block between them.
Ex:  X | empty | X

The parameter element of the function refers to an X or O

*/
function threatChecker(element) {
    let cloneO = o.cloneNode(true);
    // FIRST LINE  //

    // X X O
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes[0] == undefined){
            if(b1.childNodes[0].className == element && b2.childNodes[0].className == element  ) {
                b3.appendChild(cloneO)
                return true  
            }
        } 

    // O X X
    if(b2.childNodes.length > 0 && b3.childNodes.length > 0 && b1.childNodes[0] == undefined){
        if(b2.childNodes[0].className == element && b3.childNodes[0].className == element  ) {
            b1.appendChild(cloneO)
            return true  
        }
    }         

    // X O X
    if(b1.childNodes.length > 0 && b3.childNodes.length > 0 && b2.childNodes[0] == undefined){
        if(b1.childNodes[0].className == element && b3.childNodes[0].className == element  ) {
            b2.appendChild(cloneO)
            return true  
        }
    }


    // SECOND LINE  
    // X X O
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes[0] == undefined){
            if(b4.childNodes[0].className == element && b5.childNodes[0].className == element  ) {
                b6.appendChild(cloneO)
                return true  
            }
        } 

    // O X X
    if(b5.childNodes.length > 0 && b6.childNodes.length > 0 && b4.childNodes[0] == undefined){
        if(b5.childNodes[0].className == element && b6.childNodes[0].className == element  ) {
            b4.appendChild(cloneO)
            return true  
        }
    }         

    // X O X
    if(b4.childNodes.length > 0 && b6.childNodes.length > 0 && b5.childNodes[0] == undefined){
        if(b4.childNodes[0].className == element && b6.childNodes[0].className == element  ) {
            b5.appendChild(cloneO)
            return true  
        }
    }





    // THIRD LINE //
    // X X O
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes[0] == undefined){
        if(b7.childNodes[0].className == element && b8.childNodes[0].className == element  ) {
            b9.appendChild(cloneO)
            return true  
        }
    } 

    // O X X
    if(b8.childNodes.length > 0 && b9.childNodes.length > 0 && b7.childNodes[0] == undefined){
        if(b8.childNodes[0].className == element && b9.childNodes[0].className == element  ) {
            b7.appendChild(cloneO)
            return true  
        }
    }         

    // X O X
    if(b7.childNodes.length > 0 && b9.childNodes.length > 0 && b8.childNodes[0] == undefined){
        if(b7.childNodes[0].className == element && b9.childNodes[0].className == element  ) {
            b8.appendChild(cloneO)
            return true  
        }
    }    


    // FIRST COLUMN //
    /* X
       X
       O  */
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes[0] == undefined){
        if(b1.childNodes[0].className == element && b4.childNodes[0].className == element  ) {
            b7.appendChild(cloneO)
            return true  
        }
    } 

    /* O
       X
       x  */
    if(b4.childNodes.length > 0 && b7.childNodes.length > 0 && b1.childNodes[0] == undefined){
        if(b4.childNodes[0].className == element && b7.childNodes[0].className == element  ) {
            b1.appendChild(cloneO)
            return true  
        }
    }         

    /* X
       O
       X  */
    if(b1.childNodes.length > 0 && b7.childNodes.length > 0 && b4.childNodes[0] == undefined){
        if(b1.childNodes[0].className == element && b7.childNodes[0].className == element  ) {
            b4.appendChild(cloneO)
            return true  
        }
    }    


    // SECOND COLUMN //
    /* X
       X
       O  */

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes[0] == undefined){
        if(b2.childNodes[0].className == element && b5.childNodes[0].className == element  ) {
            b8.appendChild(cloneO)
            return true  
        }
    } 

    /* O
       X
       x  */
    if(b5.childNodes.length > 0 && b8.childNodes.length > 0 && b2.childNodes[0] == undefined){
        if(b5.childNodes[0].className == element && b8.childNodes[0].className == element  ) {
            b2.appendChild(cloneO)
            return true  
        }
    }         

    /* X
       O
       X  */
    if(b2.childNodes.length > 0 && b8.childNodes.length > 0 && b5.childNodes[0] == undefined){
        if(b2.childNodes[0].className == element && b8.childNodes[0].className == element) {
            b5.appendChild(cloneO)
            return true  
        }
    }    


    // THIRD COLUMN //
    /* X
       X
       O  */

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes[0] == undefined){
        if(b3.childNodes[0].className == element && b6.childNodes[0].className == element  ) {
            b9.appendChild(cloneO)
            return true  
        }
    } 


    /* O
       X
       x  */
    if(b6.childNodes.length > 0 && b9.childNodes.length > 0 && b3.childNodes[0] == undefined){
        if(b6.childNodes[0].className == element && b9.childNodes[0].className == element  ) {
            b3.appendChild(cloneO)
            return true  
        }
    }         


    /* X
       O
       X  */
    if(b3.childNodes.length > 0 && b9.childNodes.length > 0 && b6.childNodes[0] == undefined){
        if(b3.childNodes[0].className == element && b9.childNodes[0].className == element  ) {
            b6.appendChild(cloneO)
            return true  
        }
    }    



    //PRINCIPAL DIAGONAL
    /* X    
         X
           O */
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes[0] == undefined){
        if(b1.childNodes[0].className == element && b5.childNodes[0].className == element  ) {
            b9.appendChild(cloneO)
            return true  
        }
    }    
    
    /* O    
         X
           X */
    if(b5.childNodes.length > 0 && b9.childNodes.length > 0 && b1.childNodes[0] == undefined){
        if(b3.childNodes[0].className == element && b9.childNodes[0].className == element  ) {
            b1.appendChild(cloneO)
            return true  
        }
    } 

    /* X    
         O
           X */
    if(b1.childNodes.length > 0 && b9.childNodes.length > 0 && b5.childNodes[0] == undefined){
        if(b1.childNodes[0].className == element && b9.childNodes[0].className == element  ) {
            b5.appendChild(cloneO)
            return true  
        }
    } 


    //SECONDARY DIAGONAL
    /*      O
          X 
        X       */
    if(b7.childNodes.length > 0 && b5.childNodes.length > 0 && b3.childNodes[0] == undefined){
        if(b7.childNodes[0].className == element && b5.childNodes[0].className == element  ) {
            b3.appendChild(cloneO)
            return true  
        }
    } 

    /*      X
          X 
        O       */

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes[0] == undefined){
        if(b3.childNodes[0].className == element && b5.childNodes[0].className == element  ) {
            b7.appendChild(cloneO)
            return true  
        }
    }     

    /*      X
          O 
        X       */
    if(b3.childNodes.length > 0 && b7.childNodes.length > 0 && b5.childNodes[0] == undefined){
        if(b3.childNodes[0].className == element && b7.childNodes[0].className == element  ) {
            b5.appendChild(cloneO)
            return true  
        }
    }     

    return false
}







