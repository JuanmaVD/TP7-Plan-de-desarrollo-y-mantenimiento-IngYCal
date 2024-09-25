// eslint.config.js
export default [
  {
    ignores: ['node_modules/**'], // Ignora la carpeta node_modules
  },
  {
    files: ['**/*.js'], // Aplica configuración a archivos .js
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
    },
    env: {
      jest: true,
    },
  },
];
