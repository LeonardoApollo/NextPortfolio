module.exports = {
    extends: ['next/core-web-vitals', 'prettier'],
    plugins: ['unused-imports', 'import'],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': ['error', { allowTernary: true }],
        'max-len': ['error', { ignoreComments: true, code: 150 }],
        'no-param-reassign': 'off',
        'no-undef': 'off',
    },
};
