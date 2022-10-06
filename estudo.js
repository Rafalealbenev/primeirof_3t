let tabuada = 2;
function escreva(){
    document.write("tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
    
}

let lista = ["jesus", "spessato","jorge","duarte","raquel","waldete"]

function mostra(){
    document.write(lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){ //começa o for
    document.write(lista[i] +  "<br>" );
   }//termina o for

}
function mostraTabuada(){
    for(let i = 1; i <= 10; i++){
        document.write("o valor do i " + i + "<br>" );
    }
}
