import yaml from 'js-yaml';
import fs from 'fs';
import path from 'node:path';

export default (filepath) => {
  // извлекаем тип файла
  const extname = path.extname(filepath);

  // получаем данные из файла по указанному пути в виде строки
  const datafile = fs.readFileSync(filepath, 'utf8');

  // в зависимости от типа файла используем разные методы для
  // парсинга полученной строки в объект
  if (extname !== '.json') {
    return yaml.load(datafile);
  }

  return JSON.parse(datafile);
};
