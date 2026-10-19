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

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const closeMenu = () => { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); navigation.classList.remove('open'); };
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 851px)').addEventListener('change', closeMenu);
