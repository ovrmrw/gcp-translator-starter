import 'core-js';
import * as path from 'path';

const projectId: string = 'jserinfo'; // edit this for your environment.
const keyFilename = path.join(__dirname, 'secret', 'jserinfo-d84d624e97da.json'); // make sure this file exists.


const translate = require('@google-cloud/translate')({
  projectId,
  keyFilename,
});


const text: string = 'hi';
const translateTo: string = 'ja';

translate.translate(text, translateTo, (err, translation: string) => {
  if (err) { throw err; }
  console.log(text, '=>', translation); // "hi => こんにちは"
});
