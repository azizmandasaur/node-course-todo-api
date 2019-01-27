const jwt = require('jsonwebtoken');
const brcrypt = require('bcryptjs');

let password = '123asdd!';

// brcrypt.genSalt(10, (err, salt) => {
//     brcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

let hashedPassword = '$2a$10$Qv0hdIjAD2hVIF3upzC8lePSmkpV8oEHrjB3pVD8a2ywp6bNExIfu';

brcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// let data = {
//     id: 7
// };

// let token = jwt.sign(data, '123abc');
// console.log(`Token: ${token}`);

// let decodedResult = JSON.stringify(jwt.verify(token, '123abc'));

// console.log(`Decoded Result: ${decodedResult}`);

// const {SHA256} = require('crypto-js');

// let message = 'I am number 7';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 7
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + '123abc').toString()
// }

// token.data.id = 8;
// token.data.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + '123abc').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed');
// }