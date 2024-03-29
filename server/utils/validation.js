export function isValidCard(value) {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0,
    bEven = false;
  value = value.replace(/\D/g, '');

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
}

export default function isValid(req) {
  const { cardNumber, limit } = req.body;
  if (cardNumber && !isValidCard(`${cardNumber}`)) {
    return {
      success: false,
      message: 'Card number is invalid, Please try different'
    };
  }
  if (limit && limit < 0) {
    return {
      success: false,
      message: 'Card limit must be positive'
    };
  }
  return {
    success: true,
    message: ''
  };
}
