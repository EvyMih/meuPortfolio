// ----------------------------maquina de escrever "OLA EU SOU A EVELLYN MIRANDA" :)------------------------------
const descricao = document.getElementById("descricao");
const nome = document.getElementById("nome");

function escrever(texto){
    const textoArmazenar = texto.innerHTML.split(""); // Separar os elementos com o método split
    texto.innerHTML = ""; // Utilizado para ocultar o texto capturado no HTML

    function digitar(indiceInicial){
        
        if(indiceInicial < textoArmazenar.length){
            texto.innerHTML += textoArmazenar[indiceInicial];
            texto.classList.remove("sem-after") // deixando a carinha

            setTimeout(() =>
                digitar (indiceInicial + 1),75
            )
        }else{
            texto.classList.add("sem-after") // tirando a carinha
            setTimeout(() => {
                escrever (texto)
            },5000)
        }
    }

    digitar(0); // Começar no índice 0
}
// função para chamar o nome
function escreverNome(texto){
    const textoArmazenar = texto.innerHTML.split(""); // Separar os elementos com o método split
    texto.innerHTML = ""; // Utilizado para ocultar o texto capturado no HTML
    texto.style.display="block"

    function digitar(indiceInicial){
    
        if(indiceInicial < textoArmazenar.length){
            texto.innerHTML += textoArmazenar[indiceInicial];
            
            setTimeout(() =>
                digitar (indiceInicial + 1),75
            )
        }else{
            // Após digitar, oculta o texto e reinia após 3 segundos
            setTimeout(() => {
                texto.style.display = "none" // Oculta o texto
                setTimeout(() => {
                    escreverNome(texto) // chama a função novamente
                },1300)
            },3700)
        }
    }
    digitar(0); // Começar no índice 0
}
escrever(descricao)

setTimeout(() => {
    escreverNome(nome)
},1200)






