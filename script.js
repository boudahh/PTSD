const copyButton = document.getElementById('copyContract');
const contract = document.getElementById('contractAddress');
const toast = document.getElementById('toast');

document.getElementById('year').textContent = new Date().getFullYear();

copyButton?.addEventListener('click', async () => {
  const value = contract.textContent.trim();
  try {
    await navigator.clipboard.writeText(value);
    showToast(value === 'CONTRACT_ADDRESS_HERE' ? 'Add the real contract address before launch.' : 'Contract copied.');
  } catch {
    showToast('Select and copy the contract address manually.');
  }
});

document.querySelectorAll('[data-placeholder-link]').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') === '#') {
      event.preventDefault();
      showToast('Add this live link before launch.');
    }
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(window.__ptsdToast);
  window.__ptsdToast = window.setTimeout(() => toast.classList.remove('show'), 2200);
}
