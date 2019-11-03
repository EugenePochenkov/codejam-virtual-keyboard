import { body, textarea } from './generateKeybord';

body.addEventListener('keydown', (event) => {
  textarea.focus();

  const { code } = event;
  const key = document.querySelector(`.${code}`);

  key.classList.add('active');

  if (key.classList.contains('keybord__arrow')) {
    textarea.value += key.textContent;
  }
});

body.addEventListener('keyup', (event) => {
  const { code } = event;
  const key = document.querySelector(`.${code}`);

  key.classList.remove('active');
});

body.addEventListener('mousedown', (event) => {
  const { target } = event;

  if (target.parentNode.parentNode.classList.contains('keybord__key')) {
    target.parentNode.parentNode.classList.remove('animate');
  }

  if (target.classList.contains('keybord__key')) {
    target.classList.remove('animate');
  }

  if (target.classList.contains('text')) {
    textarea.value += target.textContent;
  }

  if (target.classList.contains('Backspace')) {
    textarea.value = textarea.value.slice(0, -1);
  }

  if (target.classList.contains('Enter')) {
    textarea.value += '\n';
  }

  if (target.classList.contains('keybord__arrow')) {
    textarea.value += target.textContent;
  }
});

body.addEventListener('mouseup', (event) => {
  const { target } = event;

  if (target.parentNode.parentNode.classList.contains('keybord__key')) {
    target.parentNode.parentNode.classList.add('animate');
  }

  if (target.classList.contains('keybord__key')) {
    target.classList.add('animate');
  }
});
