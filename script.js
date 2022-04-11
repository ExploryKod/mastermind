
// =============== html elements =================

let playerScoreInfo = document.getElementById("playerScore");
let conteneurScore = document.querySelector("#conteneur-score");
let validationBtn = document.querySelector("#go");
let activeColor = "orange";
let cssVariables = document.querySelector(':root');
let cssVariableStyle = getComputedStyle(cssVariables);
let ctaColorVariable = cssVariableStyle.getPropertyValue('--CTA_color');

let iaColorOne = document.getElementById('IAcouleurs-1');
let iaColorTwo = document.getElementById('IAcouleurs-2');
let iaColorThree = document.getElementById('IAcouleurs-3');
let iaColorFour = document.getElementById('IAcouleurs-4');

let playerColorOne = document.getElementById('voscouleurs-1');
let playerColorTwo = document.getElementById('voscouleurs-2');
let playerColorThree = document.getElementById('voscouleurs-3');
let playerColorFour = document.getElementById('voscouleurs-4');

// ======= Color sequences ==========

let iacouleurs = ["orange","green","red","blue","grey","purple","teal","yellow","pink","brown","black"];

let IAsequence = []

function randomSequence() {

    iaColorOne.style.backgroundColor = "white";
    iaColorTwo.style.backgroundColor = "white";
    iaColorThree.style.backgroundColor = "white";
    iaColorFour.style.backgroundColor = "white";

    playerColorOne.style.backgroundColor = "white";
    playerColorTwo.style.backgroundColor = "white";
    playerColorThree.style.backgroundColor = "white";
    playerColorFour.style.backgroundColor = "white";
    playerScoreInfo.innerHTML = "";
    

   
    validationBtn.style.backgroundColor = ctaColorVariable;
    validationBtn.style.color = "white";
    
    let sequence = [];

    for (i = 0; i < 4; i++){
        let AleaNumber = Math.floor(Math.random() * 5);
        console.log(AleaNumber);
        sequence.push(iacouleurs[AleaNumber]);
    }

    console.log("----Sequence de l'IA")
    IAsequence = sequence;
    console.log(IAsequence);
        
}

let userDatas = []

function userSequenceInputs(){

    let userSequence = [];

    const firstInput = document.querySelector("#couleur_1").value;
    const secondInput = document.querySelector("#couleur_2").value;
    const thirdInput = document.querySelector("#couleur_3").value;
    const fourthInput = document.querySelector("#couleur_4").value;
    
    userSequence.push(firstInput,secondInput,thirdInput,fourthInput);

    playerColorOne.style.backgroundColor = firstInput;
    playerColorTwo.style.backgroundColor = secondInput;
    playerColorThree.style.backgroundColor = thirdInput;
    playerColorFour.style.backgroundColor = fourthInput;

    validationBtn.style.backgroundColor = activeColor;
    validationBtn.style.color = "black";
    validationBtn.innerHTML = "Sequence validée";

    userDatas = userSequence;
    
    return userDatas;
}

// ============= IA colors : show and compare ==================

function revealIA() {

iaColorOne.style.backgroundColor = IAsequence[0];
iaColorTwo.style.backgroundColor = IAsequence[1];
iaColorThree.style.backgroundColor = IAsequence[2];
iaColorFour.style.backgroundColor = IAsequence[3];

}

function compareDatas() {
    let userScore = 0
    for (i = 0; i < 4; i++) {
        if(IAsequence[i] == userDatas[i]){
            userScore += 1;
            
        } else {
            userScore += 0;
        }

    }

    playerScoreInfo.innerHTML=userScore;
    conteneurScore.style.backgroundColor = "var(--light)";
    playerScoreInfo.style.backgroundColor = "var(--light)";

}

// ================== Event listeners ==========================

document.querySelector("#go-ia-1").onclick = randomSequence;
document.querySelector("#go-ia-2").onclick = randomSequence;
validationBtn.onclick = userSequenceInputs;
document.querySelector("#score-reveal").onclick = compareDatas;
document.querySelector(".go-reveal").onclick = revealIA;



