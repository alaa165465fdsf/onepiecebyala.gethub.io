function ver(){
a=document.getElementById("b1")
b=document.getElementById("b2")
c=document.getElementById("b3")
if (a.value==""){
    alert("votre nom est obligatoir")
}
if (b.value==""){
    alert("votre pirate name est obligatoir")
}
if (c.value==""){
    alert("votre siklls est obligatoir")
}
else{
    alert("votre demande de rejoindre a ete envoyer ")
    
    a.style.background="green"
    b.style.background="green"
    c.style.background="green"
}





}