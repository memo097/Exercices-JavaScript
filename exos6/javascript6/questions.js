var CreationTableauLangages = function () {
    var langages = ['Html', 'CSS', 'Java', 'PHP']
    return langages
}

var CreationTableauNombres = function () {
    var nombres = [0, 1, 2, 3, 4, 5]
    return nombres
}

var RemplacementElement = function (langages) {
    var langages = ['Html', 'CSS', 'Java', 'PHP']
    langages[2] = 'Javascript'
    return langages
}

var AjoutElementLangages = function (langages) {
    var langages = ['Html', 'CSS', 'Javascript', 'PHP']
    langages.push('Ruby', 'Python')
    return langages
}

var AjoutElementNombres = function (nombres) {
    var nombres = [0,1,2,3,4,5]
    nombres.unshift(-2,-1)
    return nombres
}

var SuppressionPremierElement = function (langages) {
    var langages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']
    langages.shift()
    return langages
}

var SuppressionDernierElement = function (langages) {
    langages.pop()
    return langages
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    reseaux_sociaux = reseaux_sociaux_chaine.split(",")
    return reseaux_sociaux
}

var ConversionTableauChaine = function (langages) {
    langages_chaines = langages.join()
    return langages_chaines
}

var TriTableau = function (reseaux_sociaux) {
    reseaux_sociaux.sort()
    return reseaux_sociaux
}

var InversionTableau = function (reseaux_sociaux){
    reseaux_sociaux.reverse()
    return reseaux_sociaux
}
