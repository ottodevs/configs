module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            impliedStrict: true,
        },
        project: './tsconfig.json',
    },
    env: {
        'es2021': true,
        'jest': true,
        'jest/globals': true,
        'mocha': true,
        'node': true,
    },
    plugins: ['@typescript-eslint', 'chai-friendly', 'unused-imports', 'simple-import-sort', 'import', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    rules: {
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'linebreak-style': ['error', 'unix'],
        'no-tabs': ['error'],
        'no-var': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'unused-imports/no-unused-imports': 'warn',
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'jest/no-standalone-expect': ['error', { additionalTestBlockFunctions: ['each.test'] }],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
