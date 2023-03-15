const socket = io();
const chatBox = document.getElementById('chat-box');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  if (message.trim() !== '') {
    socket.emit('chat-message', message);
    messageInput.value = '';
  }
});

socket.on('chat-message', (message) => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
});