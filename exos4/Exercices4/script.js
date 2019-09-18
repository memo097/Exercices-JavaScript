function verification(){
    var mdp = document.getElementById("motdepasse").value,
    conf = document.getElementById("confirmation").value,
    i = document.getElementsByTagName("input");
    console.log(mdp)
    console.log(conf)    
    i = document.getElementsByTagName("input");
    if(mdp==conf){
        i[0].style.border = "3px solid green";
        i[1].style.border = "3px solid green";
    }
    else {
        i[0].style.border = "3px solid red";
        i[1].style.border = "3px solid red";
    }
}