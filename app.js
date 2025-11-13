'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
  // alterna o tema claro/escuro
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  // atualiza o texto do botão
  const className = document.body.classList.contains('dark-theme') 
    ? 'dark-theme' 
    : 'light-theme';
  
  if (className === 'dark-theme') {
    this.textContent = 'Claro';
  } else {
    this.textContent = 'Escuro';
  }

  console.log('Tema atual: ' + className);
});

// ======== Função da Tabela de Estudos ========
function toggleDone(button) {
  const cell = button.parentElement;
  cell.classList.toggle('done');

  // alterna o texto do botão entre "✔" e "✅"
  if (cell.classList.contains('done')) {
    button.textContent = '✅';
  } else {
    button.textContent = '✔';
  }
}
