const btn = document.querySelector('.btn');
const saveBtn = document.getElementById('save');
const body = document.body;
const statusMsg = document.getElementById('status-msg');

// ✅ Alternar tema claro/escuro
btn.addEventListener('click', () => {
  const darkMode = body.classList.toggle('dark-theme');
  btn.textContent = darkMode ? 'Claro' : 'Escuro';
  saveProgress(); // salva tema ao mudar
});

// ✅ Marcar matéria como concluída
function toggleDone(button) {
  const cell = button.parentElement;
  cell.classList.toggle('done');
}

// ✅ Salvar progresso no localStorage
function saveProgress() {
  const isDark = body.classList.contains('dark-theme');
  const cells = Array.from(document.querySelectorAll('td'));
  const doneStatus = cells.map(cell => cell.classList.contains('done'));

  localStorage.setItem('temaEscuro', isDark);
  localStorage.setItem('materiasConcluidas', JSON.stringify(doneStatus));

  statusMsg.textContent = "💾 Progresso salvo!";
  setTimeout(() => (statusMsg.textContent = ""), 2000);
}

// ✅ Botão manual para salvar
saveBtn.addEventListener('click', saveProgress);

// ✅ Carregar progresso ao abrir
window.addEventListener('DOMContentLoaded', () => {
  const temaEscuro = localStorage.getItem('temaEscuro') === 'true';
  const materiasConcluidas = JSON.parse(localStorage.getItem('materiasConcluidas')) || [];

  if (temaEscuro) {
    body.classList.add('dark-theme');
    btn.textContent = 'Claro';
  }

  const cells = Array.from(document.querySelectorAll('td'));
  cells.forEach((cell, i) => {
    if (materiasConcluidas[i]) {
      cell.classList.add('done');
    }
  });
});
