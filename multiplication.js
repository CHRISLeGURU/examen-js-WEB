function produit1(){
    var nombre1=document.getElementById("n1").value;
    var nombre2=document.getElementById("n2").value;
    var produit=nombre1*nombre2;
    document.getElementById(
        "resultat").value=produit;
}

function div1(){
    var nombre1=document.getElementById("n1").value;
    var nombre2=document.getElementById("n2").value;
    var div=nombre1/nombre2;
    document.getElementById(
        "resultat").value=div;
}

function somme1(){
    var nombre1=document.getElementById("n1").value;
    var nombre2=document.getElementById("n2").value;
    var somme=nombre1+nombre2;
    document.getElementById(
        "resultat").value=somme;
}

function bienvenu(){
    var num1="+243970514412";
    var num2="+243970514199";
    var num3="+243970554422";
    var num4="+243960539941";

    alert (num1);
    alert (num2);
    alert ("contactez nous à ce numero"+num1+" "+ "ou celuici"+num3);
    alert ('vous avez cliquez sur un bouton');
}