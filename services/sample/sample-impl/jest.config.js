module.exports = {
	roots: ['<rootDir>/'],
	testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': '@swc/jest',
	},
	testPathIgnorePatterns: [],
	preset: 'jest-dynalite',
	verbose: true,
};
