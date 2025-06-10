const stripe = require('stripe')('tu_api_key');

app.post('/pagar', async (req, res) => {
  const { token, monto } = req.body;
  try {
    const pago = await stripe.charges.create({
      amount: monto,
      currency: 'usd',
      source: token,
      description: 'Compra en mi tienda',
    });
    res.json({ mensaje: 'Pago exitoso', pago });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el pago', error });
  }
});