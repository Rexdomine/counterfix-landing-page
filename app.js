document.addEventListener('DOMContentLoaded', () => {
const workflowStyles = document.createElement('link');
workflowStyles.rel = 'stylesheet';
workflowStyles.href = 'workflow-art-direction.css';
document.head.append(workflowStyles);
document.querySelectorAll('.workflow-step .step-no, .workflow-step figcaption').forEach(element => element.remove());
const workspaceCapture = document.querySelector('.workspace-capture');
if (workspaceCapture) {
  const workspaceImage = workspaceCapture.querySelector('img');
  workspaceImage.src = 'assets/manufacturer-command-center-demo.jpg';
  workspaceImage.alt = 'Illustrative CounterFix Command Center workspace screen';
  workspaceCapture.querySelector('figcaption')?.remove();
}

const packIdentityArt = document.querySelector('.reason-art');
if (packIdentityArt) {
  packIdentityArt.innerHTML = `
    <div class="pack-system" aria-label="Illustration of Citrus Fizz product, batch, and distinct pack identities">
      <div class="identity-source"><span>PRODUCT</span><strong>Citrus Fizz</strong></div>
      <div class="identity-batch"><span>BATCH</span><strong>CFZ-0426</strong></div>
      <p class="identity-note">SAME PRODUCT · SAME BATCH · DISTINCT PACKS</p>
      <div class="unit-row">
        <figure class="unit-card"><img src="assets/citrus-fizz-demo.png" alt="Illustrative Citrus Fizz pack with code CF-006-0426"><figcaption>CF-006-0426</figcaption></figure>
        <figure class="unit-card featured-unit"><img src="assets/citrus-fizz-demo.png" alt="Illustrative Citrus Fizz pack with code CF-008-0426"><figcaption><span>UNIQUE PACK ID</span>CF-008-0426</figcaption></figure>
        <figure class="unit-card"><img src="assets/citrus-fizz-demo.png" alt="Illustrative Citrus Fizz pack with code CF-011-0426"><figcaption>CF-011-0426</figcaption></figure>
      </div>
    </div>`;
}

const hero = document.querySelector('.hero');
if (hero) {
  const useCases = document.createElement('section');
  useCases.className = 'use-cases';
  useCases.setAttribute('aria-labelledby', 'use-cases-title');
  useCases.innerHTML = `
    <div class="shell use-cases-inner">
      <div class="use-cases-heading">
        <div>
          <p class="eyebrow">Designed around the packs you make</p>
          <h2 id="use-cases-title">Different products.<br><span>Every pack</span> accounted for.</h2>
        </div>
        <p>Link each pack to its product and batch.</p>
      </div>
      <div class="use-cases-grid">
        <article class="use-case-card use-case-food">
          <div class="use-case-art"><picture><source srcset="assets/usecase-food-beverage.webp" type="image/webp"><img src="assets/usecase-food-beverage.png" width="768" height="512" loading="eager" fetchpriority="low" decoding="async" alt="Illustrative food pouch and drinks can with CounterFix code labels"></picture><span class="case-code">DEMO PACK CODE <b>CF · 021</b></span></div>
          <h3>Food &amp; beverages</h3>
        </article>
        <article class="use-case-card use-case-everyday">
          <div class="use-case-art"><picture><source srcset="assets/usecase-everyday-essentials.webp" type="image/webp"><img src="assets/usecase-everyday-essentials.png" width="768" height="702" loading="eager" fetchpriority="low" decoding="async" alt="Illustrative detergent and personal-care packs with CounterFix code labels"></picture><span class="case-code">DEMO PACK CODE <b>CF · 034</b></span></div>
          <h3>Everyday essentials</h3>
        </article>
        <article class="use-case-card use-case-pharma">
          <div class="use-case-art"><picture><source srcset="assets/usecase-pharmaceuticals.webp" type="image/webp"><img src="assets/usecase-pharmaceuticals.png" width="768" height="512" loading="eager" fetchpriority="low" decoding="async" alt="Illustrative medicine carton and blister pack with CounterFix code labels"></picture><span class="case-code">DEMO PACK CODE <b>CF · 051</b></span></div>
          <h3>Pharmaceuticals</h3>
        </article>
        <article class="use-case-card use-case-spirits">
          <div class="use-case-art"><picture><source srcset="assets/usecase-wine-spirits.webp" type="image/webp"><img src="assets/usecase-wine-spirits.png" width="768" height="702" loading="eager" fetchpriority="low" decoding="async" alt="Illustrative spirits bottle and outer pack with CounterFix code labels"></picture><span class="case-code">DEMO PACK CODE <b>CF · 062</b></span></div>
          <h3>Wine &amp; spirits</h3>
        </article>
      </div>
    </div>`;
  hero.insertAdjacentElement('afterend', useCases);
}

const pricingRows = document.querySelectorAll('.pricing-row');
if (pricingRows.length >= 2) {
  const [planRow, balanceRow] = pricingRows;
  const planIcon = planRow.querySelector('.row-icon');
  const balanceIcon = balanceRow.querySelector('.row-icon');
  if (planIcon) {
    planIcon.className = 'row-icon pricing-illustration plan-illustration';
    planIcon.setAttribute('aria-hidden', 'true');
    planIcon.innerHTML = '<span class="plan-card plan-card-back"></span><span class="plan-card plan-card-mid"></span><span class="plan-card plan-card-selected"><i></i><b></b></span>';
  }
  if (balanceIcon) {
    balanceIcon.className = 'row-icon pricing-illustration balance-illustration';
    balanceIcon.setAttribute('aria-hidden', 'true');
    balanceIcon.innerHTML = '<span class="usage-receipt"><i></i><i></i><i></i></span><span class="balance-wallet"><b></b><i></i></span>';
  }
}

const footerMark = document.querySelector('.footer span:last-child');
if (footerMark) {
  footerMark.classList.add('footer-mark');
  footerMark.innerHTML = '© 2026 CounterFix<small>Made with 💙 from the A team</small>';
}

const legacySignupUrl = 'https://auth.counterfix.io/register/';
const signupUrl = 'https://counterdevs.xyz/register';
document.querySelectorAll(`a[href="${legacySignupUrl}"]`).forEach(link => { link.href = signupUrl; });

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const closeMenu = () => { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); navigation.classList.remove('open'); };
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);
});
