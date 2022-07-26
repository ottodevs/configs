module.exports = {
    root: true,
    env: {
        es2021: true,
        jest: true,
        mocha: true,
        node: true,
    },
    settings: {
        'import/resolver': {
            // use <root>/tsconfig.json
            typescript: {},
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        impliedStrict: true,
        // project: ['../typescript/tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'chai-friendly', 'unused-imports', 'simple-import-sort', 'import'],
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

        // 'node/no-missing-import': [
        //     'error',
        //     { allowModules: ['chai'], resolvePaths: ['test', 'src'], tryExtensions: ['.ts', '.json'] },
        // ],
        // 'node/no-unpublished-import': ['error', { allowModules: [''] }],
    },
};
