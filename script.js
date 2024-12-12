let index = 0; // Índice da imagem atual
const items = document.querySelectorAll('.carrossel-item-videoclip'); // Seleciona todos os itens do carrossel
const totalItems = items.length; // Total de imagens no carrossel

let index1 = 0;
const items1 = document.querySelectorAll('.carrossel-item-player');
const totalItems1 = items1.length; 

let index_legenda = 0;
const items_legenda = document.querySelectorAll('.carrossel-container-legenda');
const totalItems_legenda = items_legenda.length; 

// Função para mudar a imagem
function mudarImagem(direcao) {
  // Atualiza o índice com base na direção
  index = (index + direcao + totalItems) % totalItems; // Garante que o índice não saia do intervalo

  // Move o carrossel para a posição da imagem desejada
  const container = document.querySelector('.carrossel-container-videoclip');
  container.style.transform = `translateX(-${index * 100}%)`;



  index_legenda = (index_legenda + direcao + totalItems_legenda) % totalItems_legenda;

  const container_legenda = document.querySelector('.carrossel-container-videoclip');
  container_legenda.style.transform = `translateX(-${index_legenda * 90}%)`;


}

function mudarImagem1(direcao) {

  index1 = (index1 + direcao + totalItems1) % totalItems1;

  const container = document.querySelector('.carrossel-container-player');
  container.style.transform = `translateX(-${index1 * 30}%)`;
}


