document.addEventListener('DOMContentLoaded', () => {               //document.addEventListener() permite adicionar um "escutador" de eventos para executar uma função quando um evento específico ocorre na página, como um clique ou o carregamento do conteúdo.
    const botaolinkedin1 = document.getElementById('linkedin1');    //document.getElementById() serve para encontrar um elemento na página do HTML que tenha um ID específico.
    const botaogithub1 = document.getElementById('github1');
    const botaolinkedin2 = document.getElementById('linkedin2');
    const botaogithub2 = document.getElementById('github2');
  
    botaolinkedin1.addEventListener('click', (e) => {     //O click é um tipo de evento que ocorre quando um usuário clica em um elemento da página. O e (ou event) é o objeto que representa o evento que ocorreu.
        e.preventDefault();                             // Impede o comportamento padrão do link "#"
        window.open('https://www.linkedin.com/in/ra%C3%ADssarobadel/', '_blank'); // Link codificado para Raíssa
    });
  
    botaogithub1.addEventListener('click', (e) => {
        e.preventDefault(); //Impede o comportamento padrão do link "#"
        window.open('https://github.com/raissarobadel', '_blank'); // Link para o GitHub de Raíssa
    });
  
    botaolinkedin2.addEventListener('click', (e) => {
        e.preventDefault(); 
        window.open('https://www.linkedin.com/in/fernando-dias-ba597b273/', '_blank'); //Link codificado para Fernando
    });
  
    botaogithub2.addEventListener('click', (e) => {
        e.preventDefault(); 
        window.open('https://github.com/nandexdead', '_blank'); //Link para o GitHub de Fernando
    });
});