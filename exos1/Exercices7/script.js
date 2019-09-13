var pointure = prompt("Votre pointure ?"),
    naissance = prompt("Votre annee de naissance ?"),
    resultat = (pointure * 2) + 5 * 50 - naissance + 1766;

alert(resultat)