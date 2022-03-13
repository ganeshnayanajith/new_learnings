const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function generateKey(size = 32, format = 'base64') {
    const buffer = randomBytes(size);
    return buffer.toString(format);
}

function generateSecretHash(key) {
    const salt = randomBytes(8).toString('hex');
    const buffer = scryptSync(key, salt, 64);
    return `${buffer.toString('hex')}.${salt}`;
}

// used the previous function
const key = generateKey(); // send to user: Jj0fmQUis7xKJ6oge4r1fN4em7xJ+hILrgubKlG6PLA=
const secretHash = generateSecretHash(key);

console.log(key);
console.log(secretHash);