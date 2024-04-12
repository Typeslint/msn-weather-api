module.exports = {
    collectCoverage: true,
    coverageProvider: 'v8',
    forceExit: false,
    verbose: true,
    testMatch: ['**/__tests__/**/*.test.cjs'],
    testPathIgnorePatterns: ['node_modules']
};
