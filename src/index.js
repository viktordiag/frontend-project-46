import _ from 'lodash';
import path from 'node:path';
import process from 'node:process';
<<<<<<< HEAD
import parser from './parser.js';
=======
>>>>>>> 2f62293 (correct Makefile)

export default (path1, path2) => {
// возможность использовать относительный или абсолютный путь
  const filepath1 = path.resolve(process.cwd(), path1);
  const filepath2 = path.resolve(process.cwd(), path2);

<<<<<<< HEAD
  // получаем и парсим в объект с помощью функции parser()
  const objFile1 = parser(filepath1);
  const objFile2 = parser(filepath2);

=======
  // читаем содержимое файла. путь до файла filepath
  // содержимое приходит как JSON строка
  const dataFile1 = fs.readFileSync(filepath1, 'utf8');
  const dataFile2 = fs.readFileSync(filepath2, 'utf8');

  // изменяем JSON формат в оригинальный (до форматирования)
  const objFile1 = JSON.parse(dataFile1);
  const objFile2 = JSON.parse(dataFile2);

>>>>>>> 2f62293 (correct Makefile)
  // извлекаем ключи из файла
  const keys1 = _.keys(objFile1);
  const keys2 = _.keys(objFile2);

  // ключи из двух файлов без повторений в один массив
  const keysUnion = _.union(keys1, keys2);

  // сортируем массив в алфавитном порядке
  const keys = keysUnion.sort();

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
  return diffResult;
};
