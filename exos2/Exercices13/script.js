function calculIMC(){
    var poids = parseInt(prompt("Combien de Kilos pesez-vous ? "));
    var taille = parseInt(prompt("Combien mesurez-vous ? "));
    var resultat = poids/(taille * taille);

    if (resultat > 40){
        alert("Obésité morbide !!!");
    }else if(resultat >= 35 && resultat < 40){
        alert("Obésité sévère !!")

    }else if (resultat >= 30 && resultat < 35){
        alert("Obésité modérée !")

    }else if (resultat >= 25 && resultat < 30){
        alert("Surpoids")

    }else if (resultat >= 18.5 && resultat < 25){
        alert("Corpulence normale")

    }else if (resultat >= 16.5 && resultat < 18.5){
        alert("Maigreur !")

    }else if (resultat < 16.5){
        alert("Dénutrition ou famine !!!")

    }else{
        alert("Je ne comprend pas !")
    }
}