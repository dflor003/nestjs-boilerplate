module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        allowBlockStart: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['*'],
      },
    ],
    'no-alert': ['error'],
    'no-console': ['error'],
    'no-debugger': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.int.spec.ts'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: ['expect', '**.expectOne', '**.expectNone'],
          },
        ],
      },
    },
    {
      files: ['*.e2e.spec.ts'],
      extends: [],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
};
