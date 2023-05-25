const fs = require('fs');
const privateKey = fs.readFileSync('./config/key.pem', 'utf8');

const starkEnv = {
        environment: 'sandbox',
        id: '6262894438121472',
        privateKey: privateKey
    };

module.exports = {
    starkEnv
    };