// eslint.config.js
export default [
  {
    ignores: ['node_modules/**'], // Ignora la carpeta node_modules
  },
  {
    files: ['**/*.js'], // Aplica configuración a archivos .js
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module', // O 'commonjs' si mantienes CommonJS
      globals: {
        // Aquí defines las funciones globales que quieres permitir
        describe: 'readonly',
        beforeEach: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
    },
  },
];
