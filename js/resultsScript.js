document.addEventListener('DOMContentLoaded', function() {
    const monthlySales = localStorage.getItem('monthlySales');
    const debitPercentage = localStorage.getItem('debitPercentage');
    const creditPercentage = localStorage.getItem('creditPercentage');
    const commissionPercentage = localStorage.getItem('commissionPercentage');
  
    if (monthlySales && debitPercentage && creditPercentage && commissionPercentage) {
      // Aquí realizarías los cálculos y actualizarías el DOM como se mostró anteriormente
    } else {
      window.location.href = './index.html'; // Redirigir al usuario si no hay datos
    }
  });
  