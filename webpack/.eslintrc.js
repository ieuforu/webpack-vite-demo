module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [],
    plugins: [],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        }
    },
    rules: {
        'no-console': 2 // 0-off | 1-warn | 2-error
    }
}