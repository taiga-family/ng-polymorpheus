/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: ['plugin:@taiga-ui/experience/all'],
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                '@typescript-eslint/quotes': ['error', 'single'],
                '@taiga-ui/experience/prefer-inject-decorator': 'off',
                '@taiga-ui/experience/no-typeof': 'off',
                '@typescript-eslint/consistent-type-assertions': 'off',
                'no-restricted-syntax': 'off', // TODO
                'unicorn/filename-case': 'off',
            },
        },
        {
            files: ['*'],
            rules: {
                'no-irregular-whitespace': 'off',
            },
        },
    ],
};
