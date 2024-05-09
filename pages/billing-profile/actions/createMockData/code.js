const createMockCharge = () => {
  return   {
      amount: Math.round((Math.random() * (250 - 1) + 1) * 100) / 100,
      amount_captured: 0,
      amount_refunded: 0,
      application: null,
      application_fee: null,
      application_fee_amount: null,
      balance_transaction: 'txn_2OPoueJN5vQBdWEx8dhHMVqh',
      billing_details: {
        address: {
          city: 'New York',
          country: 'US',
          line1: '123 Main Street',
          line2: null,
          postal_code: '10001',
          state: 'NY'
        },
        email: 'johndoe@exmample.com',
        name: 'John Doe',
        phone: '1234567890'
      },
      calculated_statement_descriptor: null,
      captured: false,
      created: 1234567891,
      currency: 'usd',
      customer: null,
      description: `Test charge ${Math.floor(Math.random() * (250 - 1) + 1)}`,
      disputed: false,
      failure_balance_transaction: null,
      failure_code: null,
      failure_message: null,
      fraud_details: {},
      id: window.crypto.randomUUID(),
      invoice: null,
      livemode: false,
      metadata: {},
      object: 'charge',
      on_behalf_of: null,
      outcome: null,
      paid: true,
      payment_intent: null,
      payment_method: 'card_2OPoudJN5vQBdWExSTD9mIPF',
      payment_method_details: {
        card: {
          amount_authorized: null,
          brand: 'mastercard',
          checks: {
            address_line1_check: 'pass',
            address_postal_code_check: 'pass',
            cvc_check: 'pass'
          },
          country: 'US',
          exp_month: 9,
          exp_year: 2023,
          extended_authorization: {
            status: 'disabled'
          },
          fingerprint: 'a40d4vOgg3VecDJF',
          funding: 'credit',
          incremental_authorization: {
            status: 'available'
          },
          installments: null,
          last4: '5678',
          mandate: null,
          multicapture: {
            status: 'available'
          },
          network: 'mastercard',
          network_token: {
            used: false
          },
          overcapture: {
            maximum_amount_capturable: 200,
            status: 'available'
          },
          three_d_secure: null,
          wallet: null
        },
        type: 'card'
      },
      receipt_email: 'john.doe@example.com',
      receipt_number: null,
      receipt_url: 'https://example.com/receipts/payment/2OPoueJN5vQBdWEx5AWizjSY',
      refunded: false,
      refunds: {
        data: [],
        has_more: false,
        object: 'list',
        url: '/v1/charges/ch_2OPoueJN5vQBdWEx5AWizjSY/refunds'
      },
      review: null,
      shipping: {
        address: {
          city: 'New York',
          country: 'US',
          line1: '123 Main Street',
          line2: null,
          postal_code: '10001',
          state: 'NY'
        },
        name: 'John Doe'
      },
      source_transfer: null,
      statement_descriptor: null,
      statement_descriptor_suffix: null,
      status: 'succeeded',
      transfer_data: null,
      transfer_group: null
    }
}


const generateMockData = (numberOfCharges) => {
  return {
    data: new Array(numberOfCharges).fill().map(createMockCharge),
    has_more: false,
    object: 'list',
    url: '/v1/charges',
  };
};

return generateMockData(100);