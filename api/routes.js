const express = require('express');

const invoiceUpdate = require('./invoiceUpdate');
var app = express.Router();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/invoice', invoiceUpdate.receiveInvoiceUpdate);

module.exports = app;