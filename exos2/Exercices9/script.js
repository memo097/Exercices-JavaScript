function testWhile() {
var reponse =prompt("Saisir une chaîne de caractères contenant la lettre 'p' : ");
    while(!reponse.includes('p')){
        testWhile();
    }
    alert(reponse);
}