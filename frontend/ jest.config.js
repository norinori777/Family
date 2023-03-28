module.exports = {
    "roots": [
        "./src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "setupFilesAfterEnv": [
      '@testing-library/react',
      '@testing-library/jest-dom/extend-expect'
    ]
    
  }