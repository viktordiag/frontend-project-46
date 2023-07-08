import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readfile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const filePath1 = getFixturePath('file1.json');
const filePath2 = getFixturePath('file2.json');
const filePath3 = getFixturePath('file3.yaml');
const filePath4 = getFixturePath('file4.yaml');
const fileOutJson = readfile('fileOutJson.txt');
const fileOutYaml = readfile('fileOutYaml.txt');

describe('compare files', () => {
  test('it compare json files', () => {
    expect(gendiff(filePath1, filePath2)).toEqual(fileOutJson);
  });
//  test('it compare yaml files', () => {
//    expect(gendiff(filePath3, filePath4)).toEqual(fileOutYaml);
//  });
});
