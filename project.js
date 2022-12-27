function somme(){
    a=parseInt(document.getElementById('a').value)
    b=parseInt(document.getElementById('b').value)
    document.getElementById('c').value=a+b;

}

function sous(){
    a=parseInt(document.getElementById('a').value)
    b=parseInt(document.getElementById('b').value)
    document.getElementById('d').value=a-b;
    if(b>a){
        alert("inverser les 2 nombre s'il vous plait")
    }

}

function ml(){
    a=parseInt(document.getElementById('a').value)
    b=parseInt(document.getElementById('b').value)
    document.getElementById('k').value=a*b;
    
}
function div(){
    a=parseInt(document.getElementById('a').value)
    b=parseInt(document.getElementById('b').value)
    document.getElementById('l').value=a/b;
    
    if(b>a){
        alert("inverser les 2 nombre s'il vous plait")
    }
    
}


function mul(){
    table=document.getElementById("mlp")
    a=''
    i=0

    for(j=0;j<10;j++){
         if(i==0 && j==0 ){
            a+="<th>*"+"</th>"
            for(i=0;i<10;i++)
        a+="<th>"+i+"</th>"}}
        a+="<tr>"
            for(i=0;i<10;i++){

        a+="<th>"+i+"</th>"
        for(j=0;j<10;j++){
           c=i*j
           a+= "<td>"+`<abbe title=${i}x${j}>${c}</abbr>`+"</td>"}
        a+="</tr>"}
    document.getElementById("mlp").innerHTML=a;
}

function sol(){
    
    x=("Solution: Nous pouvons résoudre cette question par addition, mais il faudrait plus de temps pour les ajouter pour obtenir la réponse. Soit 9 + 9 + 9 + 9 + 9 + 9 = 54 bonbons. En d'autres termes, lorsque nous avons un plus grand nombre sur lequel travailler, la multiplication est utile.")
    document.getElementById('so').innerHTML=x
}
function choix(){
    if(document.getElementById("28").checked==true)
    {document.getElementById("rep").src="image/vrai.jpg"}
    else{document.getElementById("rep").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choix1(){
    if(document.getElementById("48").checked==true)
    {document.getElementById("re").src="image/vrai.jpg"}
    else{document.getElementById("re").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choix2(){
    if(document.getElementById("575").checked==true)
    {document.getElementById("rep2").src="image/vrai.jpg"}
    else{document.getElementById("rep2").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choix3(){
    if(document.getElementById("105").checked==true)
    {document.getElementById("rep3").src="image/vrai.jpg"}
    else{document.getElementById("rep3").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choix4(){
    if(document.getElementById("218").checked==true)
    {document.getElementById("rep4").src="image/vrai.jpg"}
    else{document.getElementById("rep4").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choi1(){
    if(document.getElementById("2").checked==true)
    {document.getElementById("re1").src="image/vrai.jpg"}
    else{document.getElementById("re1").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choi2(){
    if(document.getElementById("10").checked==true)
    {document.getElementById("re2").src="image/vrai.jpg"}
    else{document.getElementById("re2").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choi3(){
    if(document.getElementById("329").checked==true)
    {document.getElementById("re3").src="image/vrai.jpg"}
    else{document.getElementById("re3").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choi4(){
    if(document.getElementById("86").checked==true)
    {document.getElementById("re4").src="image/vrai.jpg"}
    else{document.getElementById("re4").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function choi5(){
    if(document.getElementById("54").checked==true)
    {document.getElementById("re5").src="image/vrai.jpg"}
    else{document.getElementById("re5").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}


function ch1(){
    if(document.getElementById("00").checked==true)
    {document.getElementById("r1").src="image/vrai.jpg"}
    else{document.getElementById("r1").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function ch2(){
    if(document.getElementById("29").checked==true)
    {document.getElementById("r2").src="image/vrai.jpg"}
    else{document.getElementById("r2").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function ch3(){
    if(document.getElementById("63").checked==true)
    {document.getElementById("r3").src="image/vrai.jpg"}
    else{document.getElementById("r3").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function ch4(){
    if(document.getElementById("435").checked==true)
    {document.getElementById("r4").src="image/vrai.jpg"}
    else{document.getElementById("r4").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
function ch5(){
    if(document.getElementById("954").checked==true)
    {document.getElementById("r5").src="image/vrai.jpg"}
    else{document.getElementById("r5").src="image/faut.gif";
    alert("Reesayer une autre fois")}
    
}
