function calculeMoyenne(){
    var moyenne = 0;
    var i = 0;
    var tab = [];
    var nombreentier = parseInt(prompt("Entrer un nombre entier : "));
    while(true){
    if (!Number.isInteger(nombreentier)){
        alert("Le nombre n'est pas un nombre entier!!!");
        nombreentier = parseInt(prompt("Entrer un nombre entier : "))
    }
    else if (nombreentier >= 0){
        tab[i] = nombreentier;
        i++
        nombreentier = parseInt(prompt("Entrer un nombre entier : "))
    }
    else {
        tab.forEach(function (tab){
            moyenne += tab;
        });
        return alert("La moyenne des nombes est de " + moyenne / i + " et le nombre de données est de " + i)
      }
    }
}