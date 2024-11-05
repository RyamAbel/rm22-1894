new Card({
  form: 'form',
  container: '.card',
  formSelectors: {
    numberInput: 'input[name=number]',
    expiryInput: 'input[name=expiry]',
    cvcInput: 'input[name=cvv]',
    nameInput: 'input[name=name]'
  },
  width: 390, 
  formatting: true,
  placeholders: {
    number: '•••• •••• •••• ••••',
    name: 'Nombre Completo',
    expiry: '••/••',
    cvc: '•••'
  }
});
