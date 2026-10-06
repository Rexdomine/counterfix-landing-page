const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', expanded);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);

const hero = document.querySelector('.hero');
const revealButton = document.querySelector('#reveal-button');
const revealLabel = document.querySelector('#reveal-label');
const ordinaryPanel = document.querySelector('#ordinary-panel');
const revealedPanel = document.querySelector('#revealed-panel');
revealButton.addEventListener('click', () => {
  const revealed = revealButton.getAttribute('aria-pressed') !== 'true';
  revealButton.setAttribute('aria-pressed', String(revealed));
  hero.classList.toggle('is-revealed', revealed);
  ordinaryPanel.hidden = revealed;
  revealedPanel.hidden = !revealed;
  revealLabel.textContent = revealed ? 'Hide its identity' : 'Reveal its identity';
  if (!revealed) resetCheck();
});

const verifyButton = document.querySelector('#verify-button');
const resetButton = document.querySelector('#reset-demo');
const title = document.querySelector('#result-title');
const copy = document.querySelector('#result-copy');
let hasVerified = false;
let pendingCheck;
function resetCheck() {
  clearTimeout(pendingCheck);
  hasVerified = false;
  title.textContent = 'An identity you can check.';
  copy.textContent = 'Run a simulated first check, then try again to see how prior use adds context.';
  verifyButton.textContent = 'Run demo check';
  verifyButton.disabled = false;
  resetButton.hidden = true;
}
verifyButton.addEventListener('click', () => {
  verifyButton.disabled = true;
  verifyButton.textContent = 'Checking sample record…';
  title.textContent = 'Looking up the demo identity…';
  copy.textContent = 'Simulating a record match and a prior-use check.';
  resetButton.hidden = true;
  pendingCheck = setTimeout(() => {
    if (hasVerified) {
      title.textContent = 'Previously verified. Check further.';
      copy.textContent = 'Demo result: this identity has been checked before. A repeat scan alone does not mean a product is fake.';
    } else {
      title.textContent = 'Demo identity matched.';
      copy.textContent = 'The sample identity matches its record. In a live check, follow any further verification steps and reward terms.';
      hasVerified = true;
    }
    verifyButton.textContent = 'Try checking it again';
    verifyButton.disabled = false;
    resetButton.hidden = false;
  }, 900);
});
resetButton.addEventListener('click', () => { resetCheck(); verifyButton.focus(); });

// The story's sample-check link opens the existing hero demonstration.
document.querySelector('#jump-to-demo').addEventListener('click', () => {
  if (revealButton.getAttribute('aria-pressed') !== 'true') revealButton.click();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelector('#verification-demo').scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'center' });
  verifyButton.focus({ preventScroll: true });
});
