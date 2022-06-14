const fetch = require('node-fetch')

class Cielo {
  static buy(params) {

    return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
      method: 'post',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'MerchantId': 'e344b49b-7fce-4578-bb56-5aa7d80faf8d',
        'MerchantKey': 'OWAJPDGYBBBRQQYOLYYGYZLTYOQWZPNZFTOTIDHR'
      }
    })
    .then(res => res.json())
  }

  static capture(paymentId) {

    return fetch(`https://apisandbox.cieloecommerce.cielo.com.br/1/sales/${paymentId}/capture`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'MerchantId': 'e344b49b-7fce-4578-bb56-5aa7d80faf8d',
        'MerchantKey': 'OWAJPDGYBBBRQQYOLYYGYZLTYOQWZPNZFTOTIDHR'
      }
    })
    .then(res => res.json())
  }

  static consult(paymentId) {

    return fetch(`https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/${paymentId}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'MerchantId': 'e344b49b-7fce-4578-bb56-5aa7d80faf8d',
        'MerchantKey': 'OWAJPDGYBBBRQQYOLYYGYZLTYOQWZPNZFTOTIDHR'
      }
    })
    .then(res => res.json())
  }
}

module.exports = Cielo