module.exports = {
    arrowParens: 'avoid',
    printWidth: 120,
    endOfLine: 'lf',
    bracketSpacing: true,
    bracketSameLine: true,
    jsxBracketSameLine: true,
    jsxSingleQuote: false,
    tabWidth: 4,
    useTabs: false,
    quoteProps: 'consistent',
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    proseWrap: 'preserve',
    plugins: ['./node_modules/prettier-plugin-solidity', './node_modules/prettier-plugin-jsdoc'],
    overrides: [
        {
            files: 'package.json',
            options: {
                parser: 'json',
            },
        },
        {
            files: '*.sol',
            options: { parser: 'solidity-parse' },
        },
    ],
};
