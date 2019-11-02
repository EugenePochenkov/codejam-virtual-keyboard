import keysData from './keysData';
import createElement from './createElement';

const { body } = document;
const textarea = createElement('textarea', 'textarea');
body.append(textarea);

const keybord = createElement('div', 'keybord');
body.append(keybord);

keysData.forEach((row) => {
  const keybordRow = createElement('div', 'keybord__row');
  keybord.append(keybordRow);

  row.forEach((key) => {
    const keybordKey = createElement('span', 'keybord__key');
    keybordKey.classList.add(key.eventCode);
    keybordRow.append(keybordKey);

    if (key.eng && key.rus) {
      const keybordKeyTextEng = createElement('span', key.eventCode);
      keybordKeyTextEng.classList.add('show');
      keybordKey.append(keybordKeyTextEng);

      const keybordKeyTextEngSymbolSmall = createElement('span', 'small');
      keybordKeyTextEngSymbolSmall.innerHTML = key.eng.small;
      keybordKeyTextEng.append(keybordKeyTextEngSymbolSmall);

      const keybordKeyTextEngSymbolBig = createElement('span', 'big');
      keybordKeyTextEngSymbolBig.innerHTML = key.eng.big;
      keybordKeyTextEng.append(keybordKeyTextEngSymbolBig);

      const keybordKeyTextRus = createElement('span', key.eventCode);
      keybordKeyTextRus.classList.add('hide');
      keybordKey.append(keybordKeyTextRus);

      const keybordKeyTextRusSymbolSmall = createElement('span', 'small');
      keybordKeyTextRusSymbolSmall.innerHTML = key.rus.small;
      keybordKeyTextRus.append(keybordKeyTextRusSymbolSmall);

      const keybordKeyTextRusSymbolBig = createElement('span', 'big');
      keybordKeyTextRusSymbolBig.innerHTML = key.rus.big;
      keybordKeyTextRus.append(keybordKeyTextRusSymbolBig);
    }

    if (key.default) keybordKey.innerHTML = key.default;
    if (key.className) keybordKey.classList.add(key.className);
    if (key.permanent) keybordKey.classList.add('keybord__permanent');
  });
});

body.addEventListener('keydown', (event) => {
  textarea.focus();

  const { code } = event;
  const key = document.querySelector(`.${code}`);

  key.classList.toggle('active');
});

body.addEventListener('keyup', (event) => {
  const { code } = event;
  const key = document.querySelector(`.${code}`);

  key.classList.remove('active');
});
