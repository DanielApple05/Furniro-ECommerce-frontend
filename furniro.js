
document.addEventListener('DOMContentLoaded', function () {
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function () {
      window.location.href = '../checkout-page/checkout.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const showmoreBtn = document.getElementById('showMoreBtn');
  if (showMoreBtn) {
    showmoreBtn.addEventListener('click', function () {
      window.location.href = 'shop.html';
    });
  }
});
