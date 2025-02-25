let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreboard=document.querySelector("#user-score");
const compScoreboard=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomChoice= Math.floor(Math.random()*3);
    return options[randomChoice];
};

const draw=()=>{
    console.log("game was draw");
    msg.innerText="GAME IS DRAW!";
    msg.style.backgroundColor="rgb(34, 76, 123)";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("YOU WIN!");
        userScore++;
        userScoreboard.innerText=userScore;
        msg.innerText=`YOU WIN! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("YOU LOST!");
        compScore++;
        compScoreboard.innerText=compScore;
        msg.innerText=`YOU LOST! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice) =>{
    console.log("user-choice= ",userChoice);
    const compChoice= genCompChoice();
    console.log("comp-choice= ",compChoice);
    if(userChoice==compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"? false:true;
                }

        else if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        }

        else{
            userWin=compChoice=="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

    

};






choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
      
        playGame(userChoice);
    });
});