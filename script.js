
// Rule toggle

let ruleBtn = document.getElementById("rule-head")
let ruleHide = document.getElementById("rule-hide")
let ruleDiv = document.getElementsByClassName("rule-desc")[0];

changeScore(0,0)
document.getElementById("msg").innerText = ""


ruleBtn.addEventListener("click", function(){
    ruleDiv.style.display = "block";
    console.log("i am clicked")
})

ruleHide.addEventListener("click", function (){
    ruleDiv.style.display = "none";
})


// Generate Random Number
let btnRoll = document.getElementsByClassName("play")[0];
let input = 0;

btnRoll.addEventListener("click", function(){
    let a = 1 + Math.floor(Math.random()*6)
    let b = 1 + Math.floor(Math.random()*6)

    changeDiceImage(a,b)
    getResult(a+b, input)
})

function changeDiceImage(a,b) {
    document.getElementById("dice1").src = "images/dice-"+a+"_640.png";
    document.getElementById("dice2").src = "images/dice-"+b+"_640.png";
}


let myScore, dealerScore;
myScore = 0
dealerScore = 0

function getResult(x,y){
    
    let msg = "You Lost"


    if(x==7 && y==7)    {msg = "Tied"; }
        
    else if(y==8 && x>7)    {msg = "You Won"; myScore++;}

    else if(y==6 && x<7)    {msg = "You Won"; myScore++;}

    else {
        dealerScore++
    }

    document.getElementById("msg").innerText = msg
    changeScore(myScore, dealerScore)
}



function changeScore(x, y) {

    document.getElementById("myScore").innerText = x
    document.getElementById("dealerScore").innerText = y

}

let clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click",function () {
    
    myScore = 0
    dealerScore = 0
    changeScore(myScore,dealerScore)
    document.getElementById("msg").innerText = ""

})


let dealBtns = document.getElementsByClassName("deal-btn");
let btn;
const l = 3;

for(btn = 0; btn < l; btn++) {
    dealBtns[btn].addEventListener("click",function () {

        input = this.value

        /* up 8
        equal 7
        down 6 */
        
    })
}

