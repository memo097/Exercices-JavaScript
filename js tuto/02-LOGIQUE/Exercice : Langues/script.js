var messagefr = "Bonjour tout le monde", messageen = "Hello World!", messagees = "hola, mundo", languefr = "francais", langueen = "anglais", languees = "espagnol",
question = prompt("qu\'elle langue parle tu?");

if (question == languefr) {
    alert(messagefr);
}else if (question == langueen) {
    alert(messageen);
}else if (question == languees) {
    alert(messagees);
}else {
    alert ("Je ne comprend pas");
}
