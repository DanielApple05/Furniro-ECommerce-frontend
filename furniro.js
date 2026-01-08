document.addEventListener("DOMContentLoaded", function () {
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      window.location.href = "../checkout-page/checkout.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  if (showMoreBtn) {
    showmoreBtn.addEventListener("click", function () {
      window.location.href = "shop.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const isInIframe = window.self !== window.top;
  const navBar = document.getElementById("mobileNavButton");
  const mobileNavBar = document.getElementById("mobileNavBar");
  // if running inside the header iframe, window.frameElement points to the hosting <iframe>
  const headerIframe = isInIframe ? window.frameElement : document.getElementById("headerIframe");

  if (!navBar || !mobileNavBar) return;

  // store original header iframe height so we can restore it
  const baseHeight = headerIframe ? (headerIframe.getBoundingClientRect().height || parseInt(getComputedStyle(headerIframe).height) || 80) : 80;

  navBar.addEventListener("click", function () {
    const isVisible = window.getComputedStyle(mobileNavBar).display !== "none";

    if (isVisible) {
      if (headerIframe) headerIframe.style.height = `${baseHeight}px`;
      mobileNavBar.style.display = "none";
      navBar.setAttribute("aria-expanded", "false");
    } else {
      // make visible first so we can measure its natural height
      mobileNavBar.style.display = "block";
      const navHeight = mobileNavBar.scrollHeight || mobileNavBar.getBoundingClientRect().height || 220;
      if (headerIframe) headerIframe.style.height = `${baseHeight + navHeight}px`;
      navBar.setAttribute("aria-expanded", "true");
    }
  });
});
