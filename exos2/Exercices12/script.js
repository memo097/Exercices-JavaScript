function conversionTemperature(){
    var typeconversion = parseInt(prompt("Choisir le type de conversion que vous souhaitez effectuer : \n 0. Fin du programme \n 1. De Celsius vers Fahrenheit \n 2. De Celsius vers Kelvin \n 3. De Fahrenheit vers Celsius \n 4. De Fahrenheit vers Kelvin \n 5. De Kelvin vers Celsius \n 6.De Kelvin vers Fahrenheit ")),

    temperature = parseInt(prompt("Inserer la température que vous souhaitez convertir :")),
    resultat;
    switch (typeconversion) {
        case 0:
            alert("Vous avez choisis de mettre Fin au programme. Aurevoir !")
        break;

        case 1:
            resultat = temperature * 9 / 5 + 32
            alert("La conversion de " + temperature + " Celsius est égal a " + resultat + " Fahrenheit")
        break;

        case 2:
            resultat = temperature + 273.15
            alert("La conversion de " + temperature + " Celcius est égal a " + resultat + " Kelvin")
        break;

        case 3:
            resultat = (temperature - 32) * 5 / 9
            alert("La conversion de " + temperature + " Fahrenheit est égal a " + resultat + " Celcius")
        break;

        case 4:
            resultat = (temperature - 32) * 5 / 9 + 273.15
            alert("La conversion de " + temperature + " Fahrenheit est égal a " + resultat + " Kelvin")
        break;

        case 5:
            resultat = temperature - 273.15
            alert("La conversion de " + temperature + " Kelvin est égal a " + resultat + " Celsius")
        break;

        case 6:
            resultat = (temperature - 273.15) * 9 / 5 + 32
            alert("La conversion de " + temperature + " Kelvin est égal a " + resultat + " Fahrenheit")
        break;

        default:
            alert("Je ne comprend pas, veuillez choisir une type de conversion valable !")
    }
}