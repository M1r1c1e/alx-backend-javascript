function calculateNumber(type, a, b) {
    let DO = 0;
    switch (type) {
    case 'SUM':
	DO = Math.round(a) + Math.round(b);
	break;
    case 'SUBTRACT':
	DO = Math.round(a) - Math.round(b);
	break;
    case 'DIVIDE':
      if (Math.round(b) === 0) {
            DO = "Error";
      } else {
            DO = Math.round(a) / Math.round(b);
      }
      break;
    }
    return DO;
}

module.exports = calculateNumber;
