module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        quotes: ['error', 'single'],
        'no-console': 1,
        'no-debugger': 1,
        'no-param-reassign': 0,
        'no-var': 1,
        semi: [1, 'always'],
        'no-trailing-spaces': 0,
        'eol-last': 2,
        'no-unused-vars': 0,
        'no-underscore-dangle': 0,
        'no-alert': 1,
        'linebreak-style': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
};
