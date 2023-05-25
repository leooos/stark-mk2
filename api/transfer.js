const { starkEnv } = require('../config/enviroment.js');
const starkbank = require('starkbank');
let project = new starkbank.Project(starkEnv);
    starkbank.user = project;

async function transfer(req) {
    let transfers = await starkbank.transfer.create([
        {
            amount: req.amount,
            bankCode: '20018183',  // Pix
            branchCode: '0001',
            accountNumber: '6341320293482496',
            accountType: "payment",
            externalId: req.id,
            taxId: '20.018.183/0001-80',
            name: 'Stark Bank S.A.',
            tags: ['productionV1.0']
        }
    ])

    for (let transfer of transfers) {
        console.log(transfer);
    }
}
module.exports = {
    transfer
  };