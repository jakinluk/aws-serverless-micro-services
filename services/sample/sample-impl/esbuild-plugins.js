// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nodeExternalsPlugin } = require('esbuild-node-externals');

module.exports = [
	nodeExternalsPlugin({
		packagePath: ['./package.json'],
		allowList: ['@lkie/sample-api', '@lkie/aws-commons', '@lkie/shared-model'],
		devDependencies: false, 
		peerDependencies: false,
		optionalDependencies: false
	}),
];