const { transfer } = require('../api/transfer.js');

async function receiveInvoiceUpdate(req, res) {
    try {
        res.status(200).send('recebido!');
        console.log(req.body )
        
        const data = {
            amount: req.body.event.log.invoice.amount,
            externalId: req.body.event.log.invoice.id,
            status: req.body.event.log.invoice.status
        }
        if(data.status == 'paid'){
            console.log( data );
            const transferServ = await transfer(data);    
        }
    } catch (error) {
        console.log(err);
        res.status(400).send(err);  
    }
}


    
module.exports = {
    receiveInvoiceUpdate
  };
    