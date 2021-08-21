module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': [1, { before: true, after: true }],
        'eol-last': ['warn', 'always'],
        '@typescript-eslint/no-explicit-any': [1],
        '@typescript-eslint/camelcase': [0],
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
        'prettier/prettier': ['warn'],
    },
    plugins: ['@typescript-eslint', 'prettier'],
};
