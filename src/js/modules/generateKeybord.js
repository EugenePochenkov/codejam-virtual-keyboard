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
    if (key.eventCode === 'ControlLeft' || key.eventCode === 'AltLeft') {
      keybordKey.style.backgroundColor = 'tomato';
    }
    keybordRow.append(keybordKey);

    const keybordKeyTextEng = createElement('span', key.eventCode);
    keybordKeyTextEng.classList.add('lang');
    keybordKey.append(keybordKeyTextEng);

    const keybordKeyTextEngSymbolSmall = createElement('span', 'small');
    keybordKeyTextEngSymbolSmall.classList.add(key.eventCode);
    keybordKeyTextEngSymbolSmall.classList.add('text');
    keybordKeyTextEngSymbolSmall.classList.add('show');
    if (key.eng.CapsLockable) keybordKeyTextEngSymbolSmall.classList.add('capslockable');
    if (key.eng.shiftable) keybordKeyTextEngSymbolSmall.classList.add('shiftable');
    keybordKeyTextEngSymbolSmall.innerHTML = key.eng.small;
    keybordKeyTextEng.append(keybordKeyTextEngSymbolSmall);

    const keybordKeyTextEngSymbolBig = createElement('span', 'big');
    keybordKeyTextEngSymbolBig.classList.add(key.eventCode);
    keybordKeyTextEngSymbolBig.classList.add('text');
    if (key.eng.CapsLockable) keybordKeyTextEngSymbolBig.classList.add('capslockable');
    if (key.eng.shiftable) keybordKeyTextEngSymbolBig.classList.add('shiftable');
    keybordKeyTextEngSymbolBig.innerHTML = key.eng.big;
    keybordKeyTextEng.append(keybordKeyTextEngSymbolBig);

    const keybordKeyTextRus = createElement('span', key.eventCode);
    keybordKeyTextRus.classList.add('lang');
    keybordKey.append(keybordKeyTextRus);

    const keybordKeyTextRusSymbolSmall = createElement('span', 'small');
    keybordKeyTextRusSymbolSmall.classList.add(key.eventCode);
    keybordKeyTextRusSymbolSmall.classList.add('text');
    keybordKeyTextRusSymbolSmall.classList.add('show');
    if (key.rus.CapsLockable) keybordKeyTextRusSymbolSmall.classList.add('capslockable');
    if (key.eng.shiftable) keybordKeyTextRusSymbolSmall.classList.add('shiftable');
    keybordKeyTextRusSymbolSmall.innerHTML = key.rus.small;
    keybordKeyTextRus.append(keybordKeyTextRusSymbolSmall);

    const keybordKeyTextRusSymbolBig = createElement('span', 'big');
    keybordKeyTextRusSymbolBig.classList.add(key.eventCode);
    keybordKeyTextRusSymbolBig.classList.add('text');
    if (key.rus.CapsLockable) keybordKeyTextRusSymbolBig.classList.add('capslockable');
    if (key.eng.shiftable) keybordKeyTextRusSymbolBig.classList.add('shiftable');
    keybordKeyTextRusSymbolBig.innerHTML = key.rus.big;
    keybordKeyTextRus.append(keybordKeyTextRusSymbolBig);

    if (!localStorage.getItem('lang') || localStorage.getItem('lang') === 'eng') {
      keybordKeyTextEng.classList.add('show-lang');
    } else {
      keybordKeyTextRus.classList.add('show-lang');
    }

    if (key.default) keybordKey.innerHTML = key.default;
    if (key.className) keybordKey.classList.add(key.className);
    if (key.permanent) keybordKey.classList.add('keybord__permanent');
  });
});

export { body, textarea };
