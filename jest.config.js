module.exports = {
	roots: ['<rootDir>/packages', '<rootDir>/services'],
	testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testPathIgnorePatterns: ['node_modules/'],
	preset: 'jest-dynalite'
};
