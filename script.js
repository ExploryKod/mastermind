
console.log("VALUES BY IA");

let iacouleurs = ["orange","green","red","blue","grey","purple","teal","yellow","pink","brown","black"];
// On définit la séquence de l'IA (secret).
console.log(iacouleurs);

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

// Evenements lors du clic sur les boutons de validation : à chaque clic on stock la valeur choisie.

console.log("VALUES BY USER");

let userDatas = []

function userSequenceInputs(){

    let userSequence = [];

    //  Récupération des valeurs que les select donne une fois sélectionnés.
    const firstInput = document.querySelector("#couleur_1").value;
    const secondInput = document.querySelector("#couleur_2").value;
    const thirdInput = document.querySelector("#couleur_3").value;
    const fourthInput = document.querySelector("#couleur_4").value;
    // Stockage des valeurs dans un tableau
    userSequence.push(firstInput,secondInput,thirdInput,fourthInput);

    // Afficher les valeurs des couleurs (anglais ou hexa) dans la section dédiée.
    document.getElementById('voscouleurs-1').style.backgroundColor = firstInput;
    document.getElementById('voscouleurs-2').style.backgroundColor = secondInput;
    document.getElementById('voscouleurs-3').style.backgroundColor = thirdInput;
    document.getElementById('voscouleurs-4').style.backgroundColor = fourthInput;

    userDatas = userSequence;
    
    console.log("---Récupération données utilisateurs:");
    console.log(userSequence);
    console.log(userDatas)
    return userDatas;
}
//  Il n'est possible d'utiliser cette fonction que parce-que IAsequence a été pourvu par du code plus avant. 
//  Le random ne marche donc qu'une fois et c'est bien identique.
function revealIA() {

document.getElementById('IAcouleurs-1').style.backgroundColor = IAsequence[0];
document.getElementById('IAcouleurs-2').style.backgroundColor = IAsequence[1];
document.getElementById('IAcouleurs-3').style.backgroundColor = IAsequence[2];
document.getElementById('IAcouleurs-4').style.backgroundColor = IAsequence[3];

}

console.log("COMPARAISON USER / IA")

function compareDatas() {
    let userScore = 0
    for (i = 0; i < 4; i++) {
        if(IAsequence[i] == userDatas[i]){
            userScore += 1;
            
        } else {
            userScore += 0;
        }

        console.log("========USER DATAS EACH ROUND");
        console.log(userDatas[i]);
        console.log("=======IA DATAS EACH ROUND");
        console.log(IAsequence[i]);
    }

    console.log("----------User Score ---------");
    console.log(userScore);
    document.getElementById("playerScore").innerHTML=userScore;
}

document.querySelector("#go-ia-1").onclick = randomSequence;
document.querySelector("#go-ia-2").onclick = randomSequence;
document.querySelector("#go").onclick = userSequenceInputs;
document.querySelector("#score-reveal").onclick = compareDatas;
// Comme je ne peux pas mettre de paramètres dans la 1ère fonction (du type on/off pour l'affichage des données) (ou dumoins pas directement comme on ferait sans callback) alors je créé une autre fonction.
document.querySelector("#go-reveal").onclick = revealIA;

console.log("=====================")

