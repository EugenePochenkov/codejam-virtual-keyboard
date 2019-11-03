const data = [
  [
    {
      eventCode: 'Backquote',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '§',
        big: '±',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '>',
        big: '<',
      },
    },
    {
      eventCode: 'Digit1',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '1',
        big: '!',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '1',
        big: '!',
      },
    },
    {
      eventCode: 'Digit2',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '2',
        big: '@',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '2',
        big: '"',
      },
    },
    {
      eventCode: 'Digit3',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '3',
        big: '#',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '3',
        big: '№',
      },
    },
    {
      eventCode: 'Digit4',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '4',
        big: '$',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '4',
        big: '%',
      },
    },
    {
      eventCode: 'Digit5',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '5',
        big: '%',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '5',
        big: ':',
      },
    },
    {
      eventCode: 'Digit6',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '6',
        big: '^',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '6',
        big: ',',
      },
    },
    {
      eventCode: 'Digit7',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '7',
        big: '&',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '7',
        big: '.',
      },
    },
    {
      eventCode: 'Digit8',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '8',
        big: '*',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '8',
        big: ';',
      },
    },
    {
      eventCode: 'Digit9',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '9',
        big: '(',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '9',
        big: '(',
      },
    },
    {
      eventCode: 'Digit0',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '0',
        big: ')',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '0',
        big: ')',
      },
    },
    {
      eventCode: 'Minus',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '-',
        big: '_',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '-',
        big: '_',
      },
    },
    {
      eventCode: 'Equal',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '=',
        big: '+',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '=',
        big: '+',
      },
    },
    {
      eventCode: 'Backspace',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: '&#8592',
      className: 'keybord__backspace',
      permanent: true,
    },
  ],
  [
    {
      eventCode: 'Tab',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Tab',
      className: 'keybord__tab',
      permanent: true,
    },
    {
      eventCode: 'KeyQ',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'q',
        big: 'Q',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'й',
        big: 'Й',
      },
    },
    {
      eventCode: 'KeyW',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'w',
        big: 'W',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ц',
        big: 'Ц',
      },
    },
    {
      eventCode: 'KeyE',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'e',
        big: 'E',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'у',
        big: 'У',
      },
    },
    {
      eventCode: 'KeyR',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'r',
        big: 'R',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'к',
        big: 'К',
      },
    },
    {
      eventCode: 'KeyT',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 't',
        big: 'T',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'е',
        big: 'Е',
      },
    },
    {
      eventCode: 'KeyY',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'y',
        big: 'Y',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'н',
        big: 'Н',
      },
    },
    {
      eventCode: 'KeyU',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'u',
        big: 'U',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'г',
        big: 'Г',
      },
    },
    {
      eventCode: 'KeyI',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'i',
        big: 'I',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ш',
        big: 'Ш',
      },
    },
    {
      eventCode: 'KeyO',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'o',
        big: 'O',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'щ',
        big: 'Щ',
      },
    },

    {
      eventCode: 'KeyP',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'p',
        big: 'P',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'з',
        big: 'З',
      },
    },
    {
      eventCode: 'BracketLeft',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '[',
        big: '{',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'х',
        big: 'Х',
      },
    },
    {
      eventCode: 'BracketRight',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: ']',
        big: '}',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ъ',
        big: 'Ъ',
      },
    },
  ],
  [
    {
      eventCode: 'CapsLock',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: true,
      },
      default: 'CapsLock',
      className: 'keybord__caps',
      permanent: true,
    },
    {
      eventCode: 'KeyA',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'a',
        big: 'A',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ф',
        big: 'Ф',
      },
    },
    {
      eventCode: 'KeyS',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 's',
        big: 'S',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ы',
        big: 'Ы',
      },
    },
    {
      eventCode: 'KeyD',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'd',
        big: 'D',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'в',
        big: 'В',
      },
    },
    {
      eventCode: 'KeyF',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'f',
        big: 'F',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'а',
        big: 'А',
      },
    },
    {
      eventCode: 'KeyG',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'g',
        big: 'G',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'п',
        big: 'П',
      },
    },
    {
      eventCode: 'KeyH',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'h',
        big: 'H',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'р',
        big: 'Р',
      },
    },
    {
      eventCode: 'KeyJ',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'j',
        big: 'J',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'о',
        big: 'О',
      },
    },
    {
      eventCode: 'KeyK',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'k',
        big: 'K',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'л',
        big: 'Л',
      },
    },
    {
      eventCode: 'KeyL',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'l',
        big: 'L',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'д',
        big: 'Д',
      },
    },
    {
      eventCode: 'Semicolon',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: ';',
        big: ':',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ж',
        big: 'Ж',
      },
    },
    {
      eventCode: 'Quote',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '&#8216;',
        big: '"',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'э',
        big: 'Э',
      },
    },
    {
      eventCode: 'Backslash',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '&#92;',
        big: '|',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ё',
        big: 'Ё',
      },
    },
    {
      eventCode: 'Enter',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Enter',
      className: 'keybord__enter',
      permanent: true,
    },
  ],
  [
    {
      eventCode: 'ShiftLeft',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Shift',
      className: 'keybord__shift',
      permanent: true,
    },
    {
      eventCode: 'IntlBackslash',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '`',
        big: '~',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: ']',
        big: '[',
      },
    },
    {
      eventCode: 'KeyZ',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'z',
        big: 'Z',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'я',
        big: 'Я',
      },
    },
    {
      eventCode: 'KeyX',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'x',
        big: 'X',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ч',
        big: 'Ч',
      },
    },
    {
      eventCode: 'KeyC',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'c',
        big: 'C',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'с',
        big: 'С',
      },
    },
    {
      eventCode: 'KeyV',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'v',
        big: 'V',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'м',
        big: 'М',
      },
    },
    {
      eventCode: 'KeyB',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'b',
        big: 'B',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'и',
        big: 'И',
      },
    },
    {
      eventCode: 'KeyN',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'n',
        big: 'N',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'т',
        big: 'Т',
      },
    },
    {
      eventCode: 'KeyM',
      eng: {
        shiftable: true,
        CapsLockable: true,
        small: 'm',
        big: 'M',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ь',
        big: 'Ь',
      },
    },
    {
      eventCode: 'Comma',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: ',',
        big: '<',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'б',
        big: 'Б',
      },
    },
    {
      eventCode: 'Period',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '.',
        big: '>',
      },
      rus: {
        shiftable: true,
        CapsLockable: true,
        small: 'ю',
        big: 'Ю',
      },
    },
    {
      eventCode: 'Slash',
      eng: {
        shiftable: true,
        CapsLockable: false,
        small: '/',
        big: '?',
      },
      rus: {
        shiftable: true,
        CapsLockable: false,
        small: '/',
        big: '?',
      },
    },
    {
      eventCode: 'ArrowUp',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: '▲',
      className: 'keybord__arrow',
      permanent: true,
    },
    {
      eventCode: 'ShiftRight',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Shift',
      className: 'keybord__shift',
      permanent: true,
    },
  ],
  [
    {
      eventCode: 'ControlLeft',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Ctrl',
      className: 'keybord__ctrl',
      permanent: true,
    },
    {
      eventCode: 'AltLeft',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Alt',
      className: 'keybord__alt',
      permanent: true,
    },
    {
      eventCode: 'MetaLeft',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Cmd',
      className: 'keybord__cmd',
      permanent: true,
    },
    {
      eventCode: 'Space',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      className: 'keybord__space',
      permanent: true,
    },
    {
      eventCode: 'MetaRight',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Cmd',
      className: 'keybord__cmd',
      permanent: true,
    },
    {
      eventCode: 'AltRight',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: 'Alt',
      className: 'keybord__alt',
      permanent: true,
    },
    {
      eventCode: 'ArrowLeft',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: '◄',
      className: 'keybord__arrow',
      permanent: true,
    },
    {
      eventCode: 'ArrowDown',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: '▼',
      className: 'keybord__arrow',
      permanent: true,
    },
    {
      eventCode: 'ArrowRight',
      eng: {
        shiftable: false,
        CapsLockable: false,
      },
      rus: {
        shiftable: false,
        CapsLockable: false,
      },
      default: '►',
      className: 'keybord__arrow',
      permanent: true,
    },
  ],
];

export default data;
