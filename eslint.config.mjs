import globals from 'globals/index.js'; // Подключаем стандартные глобальные переменные для различных окружений

export default [
  {
    files: ['**/*.js', '**/*.jsx'], // Правила применяются ко всем JS и JSX файлам

    languageOptions: {
      ecmaVersion: 'latest', // Устанавливаем последнюю версию ECMAScript
      sourceType: 'module', // Указываем, что используем модули ES
      globals: {
        ...globals.browser, // Глобальные переменные для браузера
        ...globals.jquery,  // Глобальные переменные для jQuery
        ...globals.node,    // Глобальные переменные для Node.js
      },
    },

    rules: {
      'strict': ['error', 'global'], // Включает строгий режим для всего файла
      'no-undef': 'error', // Запрещает использование необъявленных переменных
      'semi': ['error', 'always'], // Требует точку с запятой в конце каждого выражения
      'curly': ['error', 'all'], // Требует обязательных фигурных скобок для всех блоков
      'no-unused-vars': ['warn', { 'args': 'none' }], // Предупреждает о неиспользуемых переменных
      'space-before-blocks': ['error', 'always'], // Требует пробел перед открывающей скобкой блока
      'space-infix-ops': 'error', // Требует пробелы вокруг инфиксных операторов
      'no-var': 'error', // Запрещает использование var
      'no-cond-assign': ['error', 'always'], // Запрещает присваивание в условных выражениях
      'no-alert': 'error', // Запрещает использование alert, confirm, prompt
    },

    ignores: ['node_modules/**', 'dist/**'], // Указываем пути, которые нужно игнорировать (альтернатива .eslintignore)
  },
];
