#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import _ from 'lodash';

const dataFile = (filepath1, filepath2) => {
  const dataFile1 = fs.readFileSync(filepath1, 'utf8'); // читаем содержимое файла. путь до файла filepath
  const dataFile2 = fs.readFileSync(filepath2, 'utf8'); // содержимое приходит как JSON строка
  const objFile1 = JSON.parse(dataFile1); // изменяем JSON формат в оригинальный (до форматирования)
  const objFile2 = JSON.parse(dataFile2);

  const keys1 = _.keys(objFile1); // извлекаем ключи из файла
  const keys2 = _.keys(objFile2);
  const keysUnion = _.union(keys1, keys2); // объединяем ключи из двух файлов без повторений в один массив
  const keys = keysUnion.sort(); // сортируем массив в алфавитном порядке

  const difFile = keys.reduce(
    (arrAcc, key) => {
      if (!_.has(objFile1, key)) {
        arrAcc.push(` +${key}:${objFile2[key]}`);
        return arrAcc;
      }

      if (!_.has(objFile2, key)) {
        arrAcc.push(` -${key}:${objFile1[key]}`);
        return arrAcc;
      }

      if (objFile1[key] === objFile2[key]) {
        arrAcc.push(`  ${key}:${objFile1[key]}`);
        return arrAcc;
      }
      arrAcc.push(` -${key}:${objFile1[key]}`);
      arrAcc.push(` +${key}:${objFile2[key]}`);

      return arrAcc;
    },
			 ['{'],
  );

  difFile.push('}');
  const diffResult = difFile.join('\n');
  console.log(diffResult);
};

program
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(dataFile)
  .parse();
