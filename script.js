// ----------------------------maquina de escrever "OLA EU SOU A EVELLYN MIRANDA" :)------------------------------
const descricao = document.getElementById("descricao");

function escrever(texto){
    const textoArmazenar = texto.textContent.split(""); // Separar os elementos com o método split
    texto.textContent = ""; // Utilizado para ocultar o texto capturado no HTML

    function digitar(indiceInicial){
        
        if(indiceInicial < textoArmazenar.length){
            texto.textContent += textoArmazenar[indiceInicial];
            
            setTimeout(() =>
                digitar (indiceInicial + 1),75
            )
        }else{
            setTimeout(() => {
                escrever(texto); // Chama a função novamente
            },4000)
        }
    }

    digitar(0); // Começar no índice 0
}
escrever(descricao)



