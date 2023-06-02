#!/usr/bin/env node

import { program } from 'commander';
import { dataFile } from '../src/index.js';

program
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(dataFile)
  .parse();
