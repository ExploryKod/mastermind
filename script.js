
playerScoreInfo = document.getElementById("playerScore");
conteneurScore = document.querySelector("#conteneur-score")

// ======= Color sequences ==========

let iacouleurs = ["orange","green","red","blue","grey","purple","teal","yellow","pink","brown","black"];

let IAsequence = []

function randomSequence() {
    
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

    document.getElementById('voscouleurs-1').style.backgroundColor = firstInput;
    document.getElementById('voscouleurs-2').style.backgroundColor = secondInput;
    document.getElementById('voscouleurs-3').style.backgroundColor = thirdInput;
    document.getElementById('voscouleurs-4').style.backgroundColor = fourthInput;

    userDatas = userSequence;
    
    return userDatas;
}

// ============= Showing IA color

function revealIA() {

document.getElementById('IAcouleurs-1').style.backgroundColor = IAsequence[0];
document.getElementById('IAcouleurs-2').style.backgroundColor = IAsequence[1];
document.getElementById('IAcouleurs-3').style.backgroundColor = IAsequence[2];
document.getElementById('IAcouleurs-4').style.backgroundColor = IAsequence[3];

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
document.querySelector("#go").onclick = userSequenceInputs;
document.querySelector("#score-reveal").onclick = compareDatas;
document.querySelector("#go-reveal").onclick = revealIA;



