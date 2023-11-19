document.getElementById('generate-comparison').addEventListener('click', function() {
    // Aquí capturas todos los valores del formulario
    const monthlySales = document.getElementById('monthly-sales').value;
    const debitPercentage = document.getElementById('debit-percentage').value;
    const creditPercentage = document.getElementById('credit-percentage').value;
    const commissionDebitOther = document.getElementById('commission-debit-other').value;
    const commissionCreditOther = document.getElementById('commission-credit-other').value;
    const commissionDebitIzipay = document.getElementById('commission-debit-izipay').value;
    const commissionCreditIzipay = document.getElementById('commission-credit-izipay').value;
  
    // Validación básica para verificar que se hayan ingresado todos los campos
    if (monthlySales && debitPercentage && creditPercentage && commissionDebitOther && commissionCreditOther && commissionDebitIzipay && commissionCreditIzipay) {
      // Guarda los valores en el almacenamiento local
      localStorage.setItem('monthlySales', monthlySales);
      localStorage.setItem('debitPercentage', debitPercentage);
      localStorage.setItem('creditPercentage', creditPercentage);
      localStorage.setItem('commissionDebitOther', commissionDebitOther);
      localStorage.setItem('commissionCreditOther', commissionCreditOther);
      localStorage.setItem('commissionDebitIzipay', commissionDebitIzipay);
      localStorage.setItem('commissionCreditIzipay', commissionCreditIzipay);
  
      // Redirige a la página de resultados
      window.location.href = './results.html';
    } else {
      alert('Por favor, rellene todos los campos requeridos.');
    }
  });
  