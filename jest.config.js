module.exports = {
    collectCoverage: true,
    coverageDirectory: './coverage',
    collectCoverageFrom: [
        "./caculator/sum.js"
    ],

    // coveragePathIgnorePatterns: [
    //     "<rootDir>/node_modules/",
    //     "./caculator/divide.js"
    // ],
    
    coverageThreshold: {
        // "global": {
        //   "branches": 80,
        //   "functions": 80,
        //   "lines": 80,
        //   "statements": 80
        // },
        "./caculator/sum.js": {
          "branches": 90,
          "statements": 90,
        },
    }
}