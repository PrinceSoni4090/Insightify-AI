// eslint.config.js
import nextPlugin from 'eslint-config-next';

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ...nextPlugin,
    rules: {
      // Your custom rules here
    },
  },
];
