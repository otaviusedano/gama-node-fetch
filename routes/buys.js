var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST creating buy. */
router.post('/', function(req, res, next) {
  cielo.buy(req.body).then((result) => {
    const paymentId = result.Payment.PaymentId
    cielo.capture(paymentId)
    .then((result) => {
      if (result.Status === 2) {
        res.status(201).send({'Status': 'Success', "Message": "Compra realizada.", "Compra": paymentId})
      } else {
        res .status(402).send({'Status': 'Error', "Message": "Houve algum erro."})
      }
    })}
  )
});

/* POST status buy. */
router.get('/:buy_id/status', function(req, res, next) {
  cielo.consult(req.params.buy_id)
  .then((result) => {
    if (result.Payment.Status < 4)
      res.status(200).send({msg: 'Sucesso'})
    else 
      res.status(402).send({msg: 'Falha no pagamento'})
  });
});

module.exports = router;
