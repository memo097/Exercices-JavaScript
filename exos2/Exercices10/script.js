function somme(){
    var addition= 0;
    for(i=0;i<3;i++){
        addition = addition + parseInt(prompt("Saisir un nombre : "))
    }
    alert("La somme des 3 nombres est : " + addition);
}