document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.querySelector('.intro').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 3000); // espera 2.5 segundos e troca
  });