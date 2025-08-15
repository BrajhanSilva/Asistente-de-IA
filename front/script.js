function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (text === '') return;

  const messages = document.getElementById('messages');

  // Mensaje usuario
  const userMsg = document.createElement('div');
  userMsg.classList.add('message', 'user');
  userMsg.innerHTML = `
    <div class="avatar"><i class="fa-solid fa-user"></i></div>
    <div class="text">${text}</div>
  `;
  messages.appendChild(userMsg);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  // Respuesta IA simulada
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.classList.add('message', 'bot');
    botMsg.innerHTML = `
      <img src="/assets/avatar.png" alt="Logo" class="logo">
      <div class="text">Esta es una respuesta simulada de la IA.</div>
    `;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 1000);
}

// Reiniciar chat
document.querySelector('.new-chat').addEventListener('click', () => {
  const messages = document.getElementById('messages');
  messages.innerHTML = `
    <div class="message bot">
      <img src="/assets/avatar.png" alt="Logo" class="logo">
      <div class="text">¿En qué estás trabajando?</div>
    </div>
  `;
});

// Detectar tecla Enter en el input
document.getElementById('userInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
