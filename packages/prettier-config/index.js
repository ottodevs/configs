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
    pluginSearchDirs: ['./node_modules'],
    plugins: ['prettier-plugin-jsdoc', 'prettier-plugin-solidity'],
    overrides: [
        {
            files: 'package.json',
            options: {
                parser: 'json',
            },
        },
    ],
};
