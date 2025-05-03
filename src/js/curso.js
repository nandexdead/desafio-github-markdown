document.addEventListener('DOMContentLoaded', () => {               //document.addEventListener() permite adicionar um "escutador" de eventos para executar uma função quando um evento específico ocorre na página, como um clique ou o carregamento do conteúdo.
    const botaoLinkedInprof = document.getElementById('linkedinprof');    //document.getElementById() serve para encontrar um elemento na página do HTML que tenha um ID específico.
    const botaoGithubProf = document.getElementById('githubprof');
  
    botaoLinkedInprof.addEventListener('click', (e) => {     //O click é um tipo de evento que ocorre quando um usuário clica em um elemento da página. O e (ou event) é o objeto que representa o evento que ocorreu.
        e.preventDefault();                             // Impede o comportamento padrão do link "#"
        window.open('https://www.linkedin.com/in/allineantunnes/?originalSubdomain=br', '_blank');
    });
  
    botaoGithubProf.addEventListener('click', (e) => {
        e.preventDefault(); //Impede o comportamento padrão do link "#"
        window.open('https://github.com/alinealien', '_blank'); 
    });

});