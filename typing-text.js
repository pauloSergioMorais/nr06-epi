const text =
  "Certificados automatizados com os dados dos alunos conforme é estabelecido por Norma.";
const typingText = document.getElementById("typing");

let index = 0;

function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // Atraso de 100ms entre cada letra
  } else {
    setTimeout(() => {
      typingText.innerHTML = ""; // Limpa o texto após terminar
      index = 0; // Reseta o índice
      type(); // Reinicia a animação
    }, 1000); // Atraso de 1 segundo antes de reiniciar a animação
  }
}

window.onload = type;
