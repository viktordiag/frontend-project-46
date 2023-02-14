#!/usr/bin/env node

import { program } from 'commander'

const command = (filepath1, filepath2) => {
	if (program.opts().format) {
		console.log(`${filepath1} and ${program.opts().format}`);
	} else {
	console.log(filepath2);
	}
};

program
	.version('0.0.1')
	.helpOption('-h, --help', 'output usage information')
	.description('Compares two configuration files and shows a difference.')
	.arguments('<filepath1> <filepath2>')
	.option('-f, --format <type>', 'output format')
	.action(command) 
	.parse();

