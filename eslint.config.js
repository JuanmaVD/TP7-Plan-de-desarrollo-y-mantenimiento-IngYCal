// eslint.config.js
const rules = {
  'no-unused-vars': 'warn',
  'no-undef': 'error',
  'no-console': 'off',
};

export default [
  {
    ignores: ['node_modules/**'], // Ignora la carpeta node_modules
  },
  {
    files: ['**/*.js'], // Aplica configuración a archivos .js
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        describe: 'readonly',
        beforeEach: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        console: 'readonly'
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules,
  },
];
