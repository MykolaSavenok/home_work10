// Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.
// Наприклад:
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
   let key = '';
   for (let i = 0; i < length; i++) {
      const randomWorlds = Math.floor(Math.random() * characters.length);
      key += characters[randomWorlds];
   }
   return key;
}

const key = generateKey(16, characters);
console.log(key);