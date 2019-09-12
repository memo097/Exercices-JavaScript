var score=prompt("Qu\'elle est votre score ?"), resultat="Vous avez le rang ";

if (score>=90){
    alert(resultat + "A");
}else if (score<90 && score>50){
    alert(resultat + "B");
}else if (score<=50){
    alert(resultat + "C");
}else{
    alert("Veuillez inserer votre score")
}
