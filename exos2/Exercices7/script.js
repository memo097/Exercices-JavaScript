function faireChoix(){

var answer = parseInt(prompt("Choisir entre 1, 2 et 3 !"));
    switch (answer) {
        case 1:
            alert('Merci !');
            break;
        
        case 2:
            alert('Bonjour !');
            break;

        case 3:
            alert('Au revoir !');
            break;
        default:
            alert('Pardon, que voulez-vous ?');
}
}