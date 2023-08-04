import { Command } from 'commander';
import ConfigsProcessor from './configsProcessor.js';
import configs from './configs.js';
import Workspace from './workspace.js';
import path from 'node:path';

export default class Cli {

	#program = new Command();

	/** @type {import('./types').CliArgs} */
	args = {
		dir: process.cwd(),
	};

	/**
	 * @param {import('./types').CliArgs} [args] Cli arguments object
	 */
	constructor(args) {
		this.#program
			.option('--packages <string...>')
			.option('--merge-to-root')
			.option('--dir <path>', undefined)
			.parse();

		this.args = {
			...this.args,
			...this.#program.opts(),
			...args,
		};

		this.args.dir = !this.args.dir.startsWith('/')
			? path.join(process.cwd(), this.args.dir)
			: this.args.dir;

	}

	async run() {

		const processor = new ConfigsProcessor({ configs });
		const workspace = new Workspace(this.args.dir, this.args?.packages);
		let packages = (await workspace.getPackages())
			.map(pkg => {
				pkg.config = processor.detectConfig(pkg);
				return pkg;
			});
		packages = await processor.questionConfigs(packages);

		const configsMaps = processor.generateConfigMap(packages);

		console.log(configsMaps);

	}

}

