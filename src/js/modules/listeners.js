import { body, textarea } from './generateKeybord';

body.addEventListener('keydown', (event) => {
  textarea.focus();

  const { code } = event;
  const key = document.querySelector(`.${code}`);

  key.classList.add('active');

  if (key.classList.contains('keybord__arrow')) {
    textarea.value += key.textContent;
  }

  if (key.classList.contains('Tab')) {
    event.preventDefault();
    textarea.value += '\t';
  }

  if (key.classList.contains('CapsLock')) {
    const caps = document.querySelectorAll('.capslockable');
    caps.forEach((element) => {
      element.classList.toggle('show');
    });
  }

  if (key.classList.contains('keybord__shift')) {
    const shift = document.querySelectorAll('.shiftable');
    shift.forEach((element) => {
      element.classList.toggle('show');
    });
  }

  if (event.altKey && event.ctrlKey) {
    if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'eng') {
      localStorage.setItem('lang', 'rus');
    } else {
      localStorage.setItem('lang', 'eng');
    }

    const keys = document.querySelectorAll('.lang');
    keys.forEach((element) => {
      element.classList.toggle('show-lang');
    });
  }
});

body.addEventListener('keyup', (event) => {
  const { code } = event;
  const key = document.querySelector(`.${code}`);

  key.classList.remove('active');

  if (key.classList.contains('keybord__shift')) {
    const shift = document.querySelectorAll('.shiftable');
    shift.forEach((element) => {
      element.classList.toggle('show');
    });
  }
});

body.addEventListener('click', (event) => {
  const { target } = event;

  if (target.classList.contains('CapsLock')) {
    const caps = document.querySelectorAll('.capslockable');
    caps.forEach((element) => {
      element.classList.toggle('show');
    });
  }

  if (target.classList.contains('keybord__shift')) {
    const shift = document.querySelectorAll('.shiftable');
    shift.forEach((element) => {
      element.classList.toggle('show');
    });
  }

  if (target.classList.contains('Tab')) {
    event.preventDefault();
    textarea.value += '\t';
  }

  if (target.classList.contains('Space')) {
    textarea.value += ' ';
  }
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
