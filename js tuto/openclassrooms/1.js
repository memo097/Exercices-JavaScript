var age = prompt("qu\'elle age avez-vous ? ");

if (age >= 60){
    alert("Vous êtes retraité, profitez de votre temps libre !");    
}else if (age <= 59 && age >= 50){
    alert("Vous êtessenior mais pas encore retraité.");
}else if (age <= 49 && age >= 18){
    alert("Vous êtes majeur mais pas encore senior.");
}else if (age <= 1 && age >= 17){
    alert("Vous n'êtes pas encore majeur.");
}else {
    alert("Vous n'êtes pas encore née.");
}
